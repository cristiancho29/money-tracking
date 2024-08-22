import { useStore } from "@nanostores/react";
import classNames from "classnames";
import { $currentPath } from "../lib/store/routes";

const routes = [
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Movements",
    path: "/movements",
  },
  {
    name: "Debts",
    path: "/debts",
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
              "flex flex-1 text-gray-100 font-semibold text-xs",
              {
                "bg-green-600": currentPath === route.path,
              },
            )}
          >
            <a
              href={route.path}
              className={classNames("flex w-full justify-center py-4", {
                "pointer-events-none": currentPath === route.path,
              })}
            >
              {route.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
