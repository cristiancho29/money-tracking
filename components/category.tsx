export default function Category({ category }: { category: any }) {
  return (
    <small className="py-1 px-3 bg-gray-500 rounded">{category.name}</small>
  );
}
