import { useStore } from "@nanostores/react";
import {
  $isDeleteModalOpen,
  closeDeleteModal,
} from "../../lib/store/movements";
import Modal from "../modal";

export default function DeleteModal() {
  const openModal = useStore($isDeleteModalOpen);
  return (
    <Modal
      isOpen={openModal}
      onClose={closeDeleteModal}
      title="Delete Movement"
    >
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-red-700 rounded p-2 text-white">Accept</button>
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
