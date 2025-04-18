import { useEffect, useState } from "react";
import { getAllInterviews } from "../services/api";

export default function ScheduledList() {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    getAllInterviews().then(res => setInterviews(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Scheduled Interviews</h2>
      {interviews.length === 0 ? (
        <p>No interviews scheduled.</p>
      ) : (
        <table className="w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Candidate</th>
              <th className="p-2">Date</th>
              <th className="p-2">Time</th>
              <th className="p-2">Mode</th>
              <th className="p-2">Interviewer</th>
              <th className="p-2">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {interviews.map((intv, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2">{intv.candidate}</td>
                <td className="p-2">{intv.date}</td>
                <td className="p-2">{intv.time}</td>
                <td className="p-2">{intv.mode}</td>
                <td className="p-2">{intv.interviewer}</td>
                <td className="p-2">{intv.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
