import classNames from "classnames";

export default function Loading({ className }: { className?: string }) {
  return (
    <span
      className={classNames("loader w-12 h-12 border-[5px]", className)}
    ></span>
  );
}
