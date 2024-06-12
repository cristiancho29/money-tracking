import MovementsModal from "./modal";
import { openModal } from "../../lib/store/movements";
import MovementItem from "./item";

type MovementsListProps = {
  movements: Array<any>;
};

export default function MovementsList({ movements }: MovementsListProps) {
  const onHandleAddMovement = () => {
    openModal();
  };
  return (
    <div className="flex flex-col">
      <button
        onClick={onHandleAddMovement}
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
    </div>
  );
}
