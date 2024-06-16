import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 w-2/3 mx-auto px-8 py-4 rounded-3xl">
      <ul>
        <li>
          <Link className="text-white" href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
