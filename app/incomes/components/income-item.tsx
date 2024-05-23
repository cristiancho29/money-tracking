import Category from "@/components/category";
import { formatCurrency } from "./../helpers";

const categories = [
  { id: 1, name: "Salary" },
  { id: 2, name: "Bonus" },
  { id: 3, name: "Gift" },
  { id: 4, name: "Other" },
];

export default function IncomeItem() {
  return (
    <div className="grid grid-cols-12 gap-2 bg-green-200 dark:bg-green-700 rounded-xl py-2 px-4">
      <small className="col-span-10">Description</small>
      <div className="col-span-2 justify-self-end">Actions</div>
      <div className="col-span-10 ">
        <Category category={categories[0]} />
      </div>
      <strong className="col-span-2 justify-self-end">
        {formatCurrency(30000)}
      </strong>
    </div>
  );
}
