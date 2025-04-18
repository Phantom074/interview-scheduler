import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Welcome Recruiter 👋</h1>
      <div className="space-x-4">
        <button onClick={() => navigate('/schedule')} className="bg-green-600 text-white px-4 py-2 rounded shadow">Schedule Interview</button>
        <button onClick={() => navigate('/interviews')} className="bg-blue-600 text-white px-4 py-2 rounded shadow">View Scheduled Interviews</button>
        <button onClick={() => { localStorage.removeItem("recruiter"); navigate("/login"); }} className="bg-red-500 text-white px-4 py-2 rounded shadow">Logout</button>
      </div>
    </div>
  );
}
