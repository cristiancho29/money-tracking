import { useStore } from "@nanostores/react";
import classNames from "classnames";
import { $currentPath } from "../lib/store/routes";
import DashboardIcon from '~icons/mdi/graph-box-outline';
import MoneyIcon from '~icons/mdi/attach-money';
import DebtsIcon from '~icons/mdi/credit-card-multiple-outline';

const routes = [
  {
    name: "Dashboard",
    path: "/",
    icon: <DashboardIcon className="text-lg" />,
  },
  {
    name: "Movements",
    path: "/movements",
    icon: <MoneyIcon className="text-lg" />,
  },
  {
    name: "Debts",
    path: "/debts",
    icon: <DebtsIcon className="text-lg" />,
  },
];

export default function NavMenu() {
  const currentPath = useStore($currentPath);
  return (
    <nav className="w-full bg-green-700">
      <ul className="flex">
        {routes.map((route) => (
          <li
            key={route.path}
            className={classNames(
              "flex flex-1 text-gray-100",
              {
                "bg-green-600": currentPath === route.path,
              },
            )}
          >
            <a
              href={route.path}
              className={
                classNames("flex flex-col w-full justify-center items-center py-2", {
                "pointer-events-none": currentPath === route.path,
              })}
            >
              {route.icon}
              <span className="font-semibold text-sm ">{route.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
