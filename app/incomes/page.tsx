"use client";
import { useState } from "react";
import IncomeItem from "./components/income-item";

export default function Incomes() {
  const [incomes, setIncomes] = useState<Array<any>>([]);
  const onAddIncome = () => {
    const temp = [...incomes];
    temp.push({
      id: incomes.length + 1,
      description: "New Income",
      amount: 30000,
      category: {
        id: 1,
        name: "Salary",
      },
    });
    setIncomes(temp);
  };

  const onDeleteIncome = (id: number) => {
    const temp = incomes.filter((income) => income.id !== id);
    setIncomes(temp);
  };

  const onEditIncome = (id: number) => {
    // TODO: Implement edit income
  };
  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="font-bold">Incomes</h1>
        <button
          className="p-2 rounded-md bg-green-600 text-white self-end w-auto"
          onClick={onAddIncome}
        >
          Add Income
        </button>
      </header>
      {incomes.map((income, i) => (
        <IncomeItem
          key={i}
          income={income}
          onDelete={onDeleteIncome}
          onEditIncome={onEditIncome}
        />
      ))}
    </>
  );
}
