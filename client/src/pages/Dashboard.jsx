import { useNavigate } from "react-router-dom";
import { CalendarDays, UsersRound, LogOut } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("recruiter");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex flex-col">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-700 tracking-wide">Recruiter Portal</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </nav>

      {/* Hero */}
      <header className="text-center py-16 px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-4">Welcome, Recruiter 👋</h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Analyze, Schedule, and Manage Interviews – All in one beautiful interface.
        </p>
      </header>

      {/* Actions */}
      <main className="flex-grow container mx-auto px-4 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Schedule Interview */}
          <div className="bg-white/60 backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl p-6 transition-transform hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-4">
              <CalendarDays className="text-green-600" size={30} />
              <h3 className="text-xl font-semibold text-gray-800">Schedule Interview</h3>
            </div>
            <p className="text-gray-600 mb-6">Plan and assign interviews based on candidate profiles.</p>
            <button
              onClick={() => navigate('/schedule')}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
            >
              Schedule Now
            </button>
          </div>

          {/* View Scheduled Interviews */}
          <div className="bg-white/60 backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl p-6 transition-transform hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-4">
              <UsersRound className="text-blue-600" size={30} />
              <h3 className="text-xl font-semibold text-gray-800">View Interviews</h3>
            </div>
            <p className="text-gray-600 mb-6">See upcoming interviews and manage your schedule efficiently.</p>
            <button
              onClick={() => navigate('/interviews')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
            >
              View List
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-md text-center py-4 mt-auto text-sm text-gray-500">
        © 2025 RecruiterApp — Built with ❤️ by Bhawuk Arora
      </footer>
    </div>
  );
}
