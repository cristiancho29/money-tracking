import { atom } from "nanostores";

export const $isFormModalOpen = atom(false);
export const $isDeleteModalOpen = atom(false);
export const $selectedMovement = atom(null);

export const openFormModal = () => {
  $isFormModalOpen.set(true);
};

export const closeFormModal = () => {
  $isFormModalOpen.set(false);
  $selectedMovement.set(null);
};

export const openDeleteModal = () => {
  $isDeleteModalOpen.set(true);
};

export const closeDeleteModal = () => {
  $isDeleteModalOpen.set(false);
  $selectedMovement.set(null);
};
