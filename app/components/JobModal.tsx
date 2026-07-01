import { Job } from "../types/job";

interface Props {
  job: Job | null;
  onClose: () => void;
}

export default function JobModal({ job, onClose }: Props) {
  if (!job) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl p-8 w-[500px]">

        <h2 className="text-3xl font-bold">
          {job.title}
        </h2>

        <p className="mt-4">
          <strong>Company:</strong> {job.company}
        </p>

        <p>
          <strong>Location:</strong> {job.location}
        </p>

        <p>
          <strong>Experience:</strong> {job.experience}
        </p>

        <p>
          <strong>Salary:</strong> {job.salary}
        </p>

        <p className="mt-4">
          {job.description}
        </p>

        <div className="mt-5">
          <strong>Skills</strong>

          <div className="flex gap-2 mt-2 flex-wrap">
            {job.skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg"
          >
            Close
          </button>

          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Apply
          </button>

        </div>

      </div>

    </div>
  );
}