import Link from "next/link";
import {
  ChartBarSquareIcon,
  CurrencyDollarIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";

export default function NavMenu() {
  return (
    <nav className="w-40 bg-green-400 dark:bg-green-800 p-2 ">
      <ul className="flex flex-col items-start">
        <Link href="/" className="flex items-center">
          <ChartBarSquareIcon className="w-8 h-8 mr-2" /> Dashboard
        </Link>
        <Link href="/incomes" className="flex items-center">
          <CircleStackIcon className="w-8 h-8 mr-2" /> Incomes
        </Link>
        <Link href="/outcomes" className="flex items-center">
          <CurrencyDollarIcon className="w-8 h-8 mr-2" /> Outcomes
        </Link>
      </ul>
    </nav>
  );
}
