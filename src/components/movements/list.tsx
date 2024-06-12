import MovementsModal from "./form-modal";
import { openFormModal } from "../../lib/store/movements";
import MovementItem from "./item";
import DeleteModal from "./delete-modal";

type MovementsListProps = {
  movements: Array<any>;
};

export default function MovementsList({ movements }: MovementsListProps) {
  return (
    <div className="flex flex-col">
      <button
        onClick={openFormModal}
        className="bg-green-700 w-fit rounded p-2 self-end"
      >
        Add Movement
      </button>
      <div>
        {movements.map((movement, index) => (
          <MovementItem key={index} movement={movement} />
        ))}
      </div>
      <MovementsModal />
      <DeleteModal />
    </div>
  );
}
