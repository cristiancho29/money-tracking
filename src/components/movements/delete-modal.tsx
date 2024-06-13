import { useStore } from "@nanostores/react";
import {
  $isDeleteModalOpen,
  $selectedMovement,
  closeDeleteModal,
  removeMovementFromList,
} from "../../lib/store/movements";
import Modal from "../modal";
import { useCallback } from "react";

export default function DeleteModal() {
  const openModal = useStore($isDeleteModalOpen);
  const movement: MovementI | null = useStore($selectedMovement);
  const onDelete = useCallback(async () => {
    try {
      await fetch(`/api/movements/${movement?.id}`, {
        method: "DELETE",
      });
      movement?.id && removeMovementFromList(movement.id);
      $isDeleteModalOpen.set(false);
    } catch (error) {
      console.log(error);
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
          Accept
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
