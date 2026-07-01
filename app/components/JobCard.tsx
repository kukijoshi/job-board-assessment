import { Job } from "../types/job";

interface JobCardProps {
  job: Job;
  onView: (job: Job) => void;
}

export default function JobCard({ job, onView }: JobCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">

      {job.featured && (
        <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded">
          ⭐ Featured
        </span>
      )}

      <div className="flex items-center gap-4 mt-3">

  <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
    {job.company.charAt(0)}
  </div>

  <div>
    <h2 className="text-2xl font-bold">{job.title}</h2>

    <p className="text-gray-500">
      {job.company}
    </p>
  </div>

</div>

      

      <p><strong>Location:</strong> {job.location}</p>

      <p><strong>Type:</strong> {job.type}</p>

      <p className="text-green-600 font-bold mt-2">
        {job.salary}
      </p>

      <button
        onClick={() => onView(job)}
        className="w-full mt-5 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        View & Apply
      </button>

    </div>
  );
}