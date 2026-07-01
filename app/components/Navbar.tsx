export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-700">
          AI Job Board
        </h1>

        <div className="space-x-6">
          <button className="text-gray-700 hover:text-blue-600">
            Home
          </button>

          <button className="text-gray-700 hover:text-blue-600">
            Jobs
          </button>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Post Job
          </button>
        </div>

      </div>
    </nav>
  );
}