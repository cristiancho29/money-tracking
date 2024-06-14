import { useStore } from "@nanostores/react";
import {
  $isDeleteModalOpen,
  $loading,
  $selectedMovement,
  closeDeleteModal,
  removeMovementFromList,
  setLoading,
} from "../../lib/store/movements";
import Modal from "../modal";
import { useCallback } from "react";
import Loading from "../loader";
import { isLoaded } from "../../helpers";

export default function DeleteModal() {
  const loading = useStore($loading);
  const openModal = useStore($isDeleteModalOpen);
  const movement: MovementI | null = useStore($selectedMovement);
  const onDelete = useCallback(async () => {
    try {
      setLoading("loading");
      await fetch(`/api/movements/${movement?.id}`, {
        method: "DELETE",
      });
      movement?.id && removeMovementFromList(movement.id);
      closeDeleteModal();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading("loaded");
    }
  }, [movement]);

  return (
    <Modal
      isOpen={openModal}
      onClose={closeDeleteModal}
      title="Delete Movement"
    >
      <div className="grid grid-cols-2 gap-4">
        <button
          className="bg-red-700 rounded p-2 text-white"
          onClick={onDelete}
        >
          {!isLoaded(loading) ? (
            <Loading className="w-4 h-4 border-[1px]" />
          ) : (
            "Accept"
          )}
        </button>
        <button
          className="bg-slate-700 rounded p-2 text-white"
          onClick={closeDeleteModal}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}
