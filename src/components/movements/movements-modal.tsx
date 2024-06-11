import { useMemo, useState, type FormEvent } from "react";
import Modal from "../modal";
import { useStore } from "@nanostores/react";
import { isModalOpen } from "../../lib/store/movements";
import { useForm, type SubmitHandler } from "react-hook-form";

const initialValues: IFormInput = {
  description: "",
  amount: 0,
  category: "",
  type: "income",
};

type MovementsModalProps = {
  movement?: any;
};

type IFormInput = {
  description: string;
  amount: number;
  category: string;
  type: "income" | "expense";
};

const movementToFormValues = (movement: any): IFormInput => {
  return {
    description: movement.description,
    amount: movement.amount,
    category: movement.category,
    type: movement.type as "income" | "expense",
  };
};

export default function MovementsModal({ movement }: MovementsModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: movement ? movementToFormValues(movement) : initialValues,
  });
  const isOpen = useStore(isModalOpen);
  const handleClose = () => {
    isModalOpen.set(false);
  };
  const modalTitle = useMemo(
    () => `${movement ? "Edit" : "Add"} Movement`,
    movement,
  );

  const onHandleSubmit: SubmitHandler<IFormInput> = (data) => {
    // POST form data
    console.log("Form data", data);
    isModalOpen.set(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={modalTitle}>
      <form
        onSubmit={handleSubmit(onHandleSubmit)}
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
            {...register("amount", { required: true })}
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
          <input id="category" name="category" className="mt-2 p-2 rounded" />
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
            <option value="expense">Expense</option>
          </select>
        </label>
        <button
          className="bg-green-700 mt-4 rounded p-2 text-white col-span-full"
          type="submit"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
}
