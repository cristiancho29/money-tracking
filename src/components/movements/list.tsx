import MovementsModal from "./form-modal";
import {
  $loading,
  $movements,
  openFormModal,
  setLoading,
} from "../../lib/store/movements";
import MovementItem from "./item";
import DeleteModal from "./delete-modal";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import ListWrapper from "../list-wrapper";
// import type { MovementI } from "../../pages/api/movements/types";

async function getMovements() {
  try {
    const response = await fetch("/api/movements");
    console.log({ response });
    // const data = await response.text();
    // $movements.set(JSON.parse(data));
  } catch (error) {
    console.error({ error }, "catch error getMovements");
  }
}

export default function MovementsList() {
  const movements = useStore($movements);
  const loading = useStore($loading);

  useEffect(() => {
    setLoading("loading");
    getMovements().then(() => setLoading("loaded"));
  }, []);

  return (
    <div className="flex flex-col items-center flex-1">
      <button
        onClick={openFormModal}
        className="bg-green-700 w-fit rounded p-2 self-end"
      >
        Add Movement
      </button>
      <ListWrapper condition={!!movements.length} loading={loading}>
        {movements.map((movement, index) => (
          <MovementItem key={index} movement={movement} />
        ))}
      </ListWrapper>
      <MovementsModal />
      <DeleteModal />
    </div>
  );
}
