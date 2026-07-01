interface Props {
  location: string;
  jobType: string;
  onLocationChange: (value: string) => void;
  onJobTypeChange: (value: string) => void;
}

export default function FilterBar({
  location,
  jobType,
  onLocationChange,
  onJobTypeChange,
}: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-6">

      <select
        value={location}
        onChange={(e) => onLocationChange(e.target.value)}
        className="border p-3 rounded-lg"
      >
        <option value="">All Locations</option>
        <option>Pune</option>
        <option>Bangalore</option>
        <option>Hyderabad</option>
      </select>

      <select
        value={jobType}
        onChange={(e) => onJobTypeChange(e.target.value)}
        className="border p-3 rounded-lg"
      >
        <option value="">All Job Types</option>
        <option>Full Time</option>
        <option>Remote</option>
        <option>Hybrid</option>
      </select>

    </div>
  );
}