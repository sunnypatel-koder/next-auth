import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen">
      {/* Header */}
      <header className="bg-blue-500 p-4">
        <nav className="flex items-center justify-end">
          <ul className="flex space-x-4 text-white">
            <li>
              <Link href="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/login">
                Login
              </Link>
            </li>
            <li>
              <Link href="/signup">
              Signup
              </Link>
            </li>
          </ul>
        </nav>
      </header>

   {/* Hero Section */}
   <div className="flex flex-col items-center justify-center mt-20 text-center text-gray-700">
  <h1 className="text-4xl font-bold mb-4">Embrace the Journey of Growth</h1>
  <p className="text-lg">
    In the tapestry of life, every thread represents a unique experience. <br/>Embrace challenges, celebrate victories, and let each moment shape the masterpiece of your journey.
    <br /><br/>
    <span className="text-blue-500">Discover the extraordinary within the ordinary.</span>
  </p>
</div>

      {/* Other content goes here */}
    </div>
  );
}
