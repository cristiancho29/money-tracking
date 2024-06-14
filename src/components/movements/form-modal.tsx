import { useEffect, useMemo } from "react";
import Modal from "../modal";
import { useStore } from "@nanostores/react";
import {
  $isFormModalOpen,
  $loading,
  addMovementToList,
  closeFormModal,
  editMovementInList,
  setLoading,
} from "../../lib/store/movements";
import { useForm, type SubmitHandler } from "react-hook-form";
import { $selectedMovement } from "../../lib/store/movements";
import { isLoaded, isNumberGreaterThanZero } from "../../helpers";
import Loading from "../loader";
const initialValues: MovementI = {
  description: "",
  amount: 0,
  category: "",
  type: "income",
};

export default function MovementsModal() {
  const movement = useStore($selectedMovement);
  const loading = useStore($loading);
  const isOpen = useStore($isFormModalOpen);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MovementI>();

  useEffect(() => {
    reset(movement || initialValues);
  }, [movement]);

  const handleClose = () => {
    closeFormModal();
  };

  const modalTitle = useMemo(
    () => `${movement ? "Edit" : "Add"} Movement`,
    [movement],
  );

  const submitText = useMemo(() => (movement ? "Edit" : "Create"), [movement]);

  const onHandleCreate: SubmitHandler<MovementI> = async (formData) => {
    try {
      setLoading("loading");
      const response = await fetch(`/api/movements`, {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data: Array<MovementI> = await response.json();
      addMovementToList(data[0]);
      reset();
      closeFormModal();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading("loaded");
    }
  };

  const onHandleEdit: SubmitHandler<MovementI> = async (formData) => {
    if (movement) {
      try {
        setLoading("loading");
        const response = await fetch(`/api/movements/${movement.id}`, {
          method: "PUT",
          body: JSON.stringify({ ...movement, ...formData }),
        });
        const data: Array<MovementI> = await response.json();
        editMovementInList(data[0]);
        reset();
        closeFormModal();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading("loaded");
      }
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={modalTitle}>
      <form
        onSubmit={handleSubmit(movement ? onHandleEdit : onHandleCreate)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <label
          htmlFor="description"
          className="flex flex-col text-sm font-semibold col-span-1"
        >
          Description
          <input
            {...register("description", { required: true })}
            className="mt-2 p-2 rounded"
          />
          {errors.description && (
            <span className="text-red-600 text-xs">This field is required</span>
          )}
        </label>

        <label
          htmlFor="amount"
          className="flex flex-col text-sm font-semibold col-span-1"
        >
          Amount
          <input
            {...register("amount", {
              required: true,
              validate: isNumberGreaterThanZero,
            })}
            className="mt-2 p-2 rounded"
          />
          {errors.amount && (
            <span className="text-red-600 text-xs">This field is required</span>
          )}
        </label>
        <label
          htmlFor="category"
          className="flex flex-col text-sm font-semibold col-span-1"
        >
          Category
          <input
            {...register("category", { required: true })}
            className="mt-2 p-2 rounded"
          />
          {errors.category && (
            <span className="text-red-600 text-xs">This field is required</span>
          )}
        </label>
        <label
          htmlFor="type"
          className="flex flex-col text-sm font-semibold col-span-1"
        >
          Type
          <select
            {...register("type", { required: true })}
            className="mt-2 p-2 rounded"
          >
            <option value="income">Income</option>
            <option value="outcome">Outcome</option>
          </select>
        </label>
        <button
          className="bg-green-700 mt-4 rounded p-2 text-white col-span-full"
          type="submit"
        >
          {!isLoaded(loading) ? (
            <Loading className="w-4 h-4 border-[1px]" />
          ) : (
            submitText
          )}
        </button>
      </form>
    </Modal>
  );
}
