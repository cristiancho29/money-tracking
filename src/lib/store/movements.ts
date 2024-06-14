import { atom } from "nanostores";
import type { LoadingI } from "./types";

export const $isFormModalOpen = atom(false);
export const $isDeleteModalOpen = atom(false);
export const $selectedMovement = atom<MovementI | null>(null);
export const $movements = atom<Array<MovementI>>([]);
export const $loading = atom<LoadingI>("empty");

export const setLoading = (loading: LoadingI) => {
  $loading.set(loading);
};

export const openFormModal = () => {
  $isFormModalOpen.set(true);
};

export const closeFormModal = () => {
  $selectedMovement.set(null);
  $isFormModalOpen.set(false);
};

export const openDeleteModal = () => {
  $isDeleteModalOpen.set(true);
};

export const closeDeleteModal = () => {
  $selectedMovement.set(null);
  $isDeleteModalOpen.set(false);
};

export const addMovementToList = (movement: MovementI) => {
  $movements.set([...$movements.get(), movement]);
};

export const editMovementInList = (updatedMovement: MovementI) => {
  const updatedList = $movements
    .get()
    .map((movement) =>
      movement.id === updatedMovement.id ? updatedMovement : movement,
    );
  $movements.set(updatedList);
};

export const removeMovementFromList = (movementId: number) => {
  const updatedList = $movements
    .get()
    .filter((movement) => movement.id !== movementId);
  $movements.set(updatedList);
};
