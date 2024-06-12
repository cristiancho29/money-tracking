import classNames from "classnames";
import { parseToCurrency } from "../../helpers";
import { useMemo } from "react";
import EditIcon from "virtual:icons/mdi/edit";
import DeleteIcon from "virtual:icons/mdi/delete";
import {
  $selectedMovement,
  openDeleteModal,
  openFormModal,
} from "../../lib/store/movements";

type Props = {
  movement: any;
};

export default function MovementItem({ movement }: Props) {
  const isIncome = useMemo(() => movement.type === "income", []);

  function handleOpenEditModal() {
    $selectedMovement.set(movement);
    openFormModal();
  }

  function handleOpenDeleteModal() {
    $selectedMovement.set(movement);
    openDeleteModal();
  }

  return (
    <div
      className={classNames(
        "flex flex-col  my-4 text-gray-700 rounded-lg",
        isIncome ? "bg-green-300" : "bg-red-300",
      )}
    >
      <div className="flex justify-between">
        <span
          className={classNames(
            "px-2 py-1 rounded-ss-md font-semibold capitalize text-gray-100",
            isIncome ? "bg-green-600" : "bg-red-600 ",
          )}
        >
          {movement.type}
        </span>
        <div className="flex px-1 py-2">
          <EditIcon
            className="w-6 h-6 text-slate-500"
            onClick={handleOpenEditModal}
          />
          <DeleteIcon
            className="w-6 h-6 text-slate-500"
            onClick={handleOpenDeleteModal}
          />
        </div>
      </div>
      <div className="flex justify-between px-2 py-6">
        <div>
          <span>{movement.description}</span>
          <div>
            <span className="bg-gray-400 text-gray-100 text-xs px-2 py-1 rounded-md font-semibold uppercase">
              {movement.category}
            </span>
          </div>
        </div>

        <span
          className={classNames(
            isIncome ? "text-green-800" : "text-red-800",
            "font-bold ",
          )}
        >
          {`${isIncome ? "+" : "-"}${parseToCurrency(movement.amount)}`}
        </span>
      </div>
    </div>
  );
}
