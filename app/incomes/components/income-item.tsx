"use client";
import Category from "@/components/category";
import { formatCurrency } from "./../helpers";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

export default function IncomeItem({
  income,
  onDelete,
  onEditIncome,
}: {
  income: any;
  onDelete: (id: number) => void;
  onEditIncome: (id: number) => void;
}) {
  return (
    <div className="grid grid-cols-12 gap-2 bg-green-200 dark:bg-green-700 rounded-xl py-2 px-4">
      <small className="col-span-10">{income.description}</small>
      <div className="col-span-2 justify-self-end flex">
        <PencilSquareIcon
          className="w-5 h-5 mr-2 cursor-pointer"
          onClick={() => onEditIncome(income.id)}
        />
        <TrashIcon
          className="w-5 h-5 mr-2 cursor-pointer"
          onClick={() => onDelete(income.id)}
        />
      </div>
      <div className="col-span-10 ">
        <Category category={income.category} />
      </div>
      <strong className="col-span-2 justify-self-end">
        {formatCurrency(income.amount)}
      </strong>
    </div>
  );
}
