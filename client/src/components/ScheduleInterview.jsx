import { useState } from 'react';

export default function ScheduleInterviewForm() {
  const [form, setForm] = useState({
    candidate: '',
    date: '',
    time: '',
    mode: 'Online',
    interviewer: '',
    remarks: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.candidate || !form.date || !form.time || !form.interviewer) {
      alert('Please fill all required fields');
      return;
    }
    console.log('Interview Scheduled:', form);
    alert(`Interview scheduled for ${form.candidate}`);
    setForm({ candidate: '', date: '', time: '', mode: 'Online', interviewer: '', remarks: '' });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold text-center mb-6 text-blue-600">Schedule Interview</h2>
      <input name="candidate" value={form.candidate} onChange={handleChange}
        className="w-full border p-2 rounded mb-4" placeholder="Candidate Name" />
      
      <input name="date" type="date" value={form.date} onChange={handleChange}
        className="w-full border p-2 rounded mb-4" />
      
      <input name="time" type="time" value={form.time} onChange={handleChange}
        className="w-full border p-2 rounded mb-4" />

      <select name="mode" value={form.mode} onChange={handleChange}
        className="w-full border p-2 rounded mb-4">
        <option>Online</option>
        <option>Offline</option>
      </select>

      <input name="interviewer" value={form.interviewer} onChange={handleChange}
        className="w-full border p-2 rounded mb-4" placeholder="Interviewer Name" />
      
      <textarea name="remarks" value={form.remarks} onChange={handleChange}
        className="w-full border p-2 rounded mb-4" placeholder="Remarks (optional)" />

      <button onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded">
        Schedule Interview
      </button>
    </div>
  );
}
