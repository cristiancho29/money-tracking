import MovementsModal from "./movements-modal";
import { isModalOpen } from "../../lib/store/movements";

type MovementsListProps = {
  movements: Array<any>;
};

export default function MovementsList({ movements }: MovementsListProps) {
  const onHandleAddMovement = () => {
    isModalOpen.set(true);
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
        {movements.map((_, index) => (
          <div key={index}>Movement Item</div>
        ))}
      </div>
      <MovementsModal />
    </div>
  );
}
