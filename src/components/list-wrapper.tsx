type ListWrapperProps = {
  children: React.ReactNode;
  condition: boolean;
};
export default function ListWrapper({ children, condition }: ListWrapperProps) {
  return condition ? (
    children
  ) : (
    <div className="text-center">No Records Found</div>
  );
}
