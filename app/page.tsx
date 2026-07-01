"use client";
import { useState } from "react";
import JobModal from "./components/JobModal";
import { Job } from "./types/job";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import JobCard from "./components/JobCard";
import Footer from "./components/Footer";

import { jobs } from "./data/jobs";

export default function Home() {

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchesLocation =
      location === "" || job.location === location;

    const matchesType =
      jobType === "" || job.type === jobType;

    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <main className="bg-gray-100 min-h-screen">

      <Navbar />

      <Hero />

      <div className="max-w-7xl mx-auto px-6">

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <FilterBar
          location={location}
          jobType={jobType}
          onLocationChange={setLocation}
          onJobTypeChange={setJobType}
        />
        <div className="grid grid-cols-3 gap-6 my-10">

  <div className="bg-white shadow rounded-xl p-6 text-center">
    <h2 className="text-3xl font-bold text-blue-600">100+</h2>
    <p>Jobs</p>
  </div>

  <div className="bg-white shadow rounded-xl p-6 text-center">
    <h2 className="text-3xl font-bold text-blue-600">50+</h2>
    <p>Companies</p>
  </div>

  <div className="bg-white shadow rounded-xl p-6 text-center">
    <h2 className="text-3xl font-bold text-blue-600">1000+</h2>
    <p>Applications</p>
  </div>

</div>
        <h2 className="text-3xl font-bold mt-10 mb-6">
          Featured Jobs
        </h2>

        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-10 text-center">
            <h2 className="text-2xl font-bold">
              😔 No Jobs Found
            </h2>

            <p className="text-gray-600 mt-3">
              Try another search or filter.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobCard
              key={job.id}
              job={job}
              onView={setSelectedJob}
              />
            ))}
          </div>
        )}

      </div>
        <JobModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
        />
      <Footer />

    </main>
  );
}