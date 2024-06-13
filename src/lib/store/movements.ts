import { atom } from "nanostores";

export const $isFormModalOpen = atom(false);
export const $isDeleteModalOpen = atom(false);
export const $selectedMovement = atom<MovementI | null>(null);
export const $movements = atom<Array<MovementI>>([]);

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
