export default function NavMenu() {
  return (
    <nav className="w-48 p-4 bg-green-700 h-screen">
      <h2 className="text-xl font-bold py-2">Money Tracking</h2>
      <ul>
        <li className="py-1 text-gray-100 font-semibold">
          <a href="/">Dashboard</a>
        </li>
        <li className="py-1 text-gray-100 font-semibold">
          <a href="/movements">Movements</a>
        </li>
        <li className="py-1 text-gray-100 font-semibold">
          <a href="/debts">Debts</a>
        </li>
      </ul>
    </nav>
  );
}
