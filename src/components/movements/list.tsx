import MovementsModal from "./form-modal";
import { $movements, openFormModal } from "../../lib/store/movements";
import MovementItem from "./item";
import DeleteModal from "./delete-modal";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import ListWrapper from "../list-wrapper";

async function getMovements() {
  const response = await fetch("/api/movements");
  const data: Array<MovementI> = await response.json();
  $movements.set(data);
}

export default function MovementsList() {
  const movements = useStore($movements);
  useEffect(() => {
    getMovements();
  }, []);
  return (
    <div className="flex flex-col">
      <button
        onClick={openFormModal}
        className="bg-green-700 w-fit rounded p-2 self-end"
      >
        Add Movement
      </button>
      <div>
        <ListWrapper condition={!!movements.length}>
          {movements.map((movement, index) => (
            <MovementItem key={index} movement={movement} />
          ))}
        </ListWrapper>
      </div>
      <MovementsModal />
      <DeleteModal />
    </div>
  );
}
