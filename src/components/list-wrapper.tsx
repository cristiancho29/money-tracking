import { isLoaded } from "../helpers";
import type { LoadingI } from "../lib/store/types";
import Loading from "./loader";

type ListWrapperProps = {
  children: React.ReactNode;
  condition: boolean;
  loading: LoadingI;
};
export default function ListWrapper({
  children,
  condition,
  loading,
}: ListWrapperProps) {
  if (!isLoaded(loading)) return <Loading />;
  return condition ? (
    children
  ) : (
    <div className="text-center">No Records Found</div>
  );
}
