import IncomeItem from "./components/income-item";

export default function Incomes() {
  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="font-bold">Incomes</h1>
        <button className="p-2 rounded-md bg-green-600 text-white self-end w-auto">
          Add Income
        </button>
      </header>
      <IncomeItem />
    </>
  );
}
