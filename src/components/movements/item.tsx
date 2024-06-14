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
        "flex flex-col  my-4 text-gray-700 rounded-lg pb-2",
        isIncome ? "bg-green-300" : "bg-red-300",
      )}
    >
      <div className="flex justify-between">
        <div
          className={classNames(
            " h-fit px-2 rounded-ss-md rounded-ee-md font-semibold capitalize text-gray-100 text-sm ",
            isIncome ? "bg-green-600" : "bg-red-600 ",
          )}
        >
          {movement.type}
        </div>
        <div className="flex px-1 pt-2">
          <EditIcon
            className="w-5 h-5 text-slate-500"
            onClick={handleOpenEditModal}
          />
          <DeleteIcon
            className="w-5 h-5 text-slate-500"
            onClick={handleOpenDeleteModal}
          />
        </div>
      </div>
      <div className="flex justify-between px-2">
        <div>
          <div className="py-2">{movement.description}</div>
          <div>
            <span className="bg-gray-400 text-gray-100 text-xs px-2 py-1 rounded-md font-semibold uppercase">
              {movement.category}
            </span>
          </div>
        </div>

        <span
          className={classNames(
            isIncome ? "text-green-700" : "text-red-700",
            "font-bold self-end",
          )}
        >
          {`${isIncome ? "+" : "-"}${parseToCurrency(movement.amount)}`}
        </span>
      </div>
    </div>
  );
}
