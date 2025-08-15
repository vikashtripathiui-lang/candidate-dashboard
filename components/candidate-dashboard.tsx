"use client";

import { useState, useEffect } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import ProfileSection from "./profile-section";
import DetailsGrid from "./details-grid";
import TabsContainer from "./tabs-container";
import JobList from "./job-list";
import RightSidebar from "./right-sidebar";
import EditModal from "./edit-modal";
import "./candidate-dashboard.css";

// Mock API
const mockAPI = {
  fetchCandidateData: () =>
    new Promise((res) =>
      setTimeout(
        () =>
          res({
            name: "William Sample",
            jobTitle: "Senior Product Manager",
            location: "United States",
            city: "Dallas",
            email: "williamsample@gmail.com",
            phone: "+91 9021232326",
            currentOrganization: "World Bank Group",
            skills: "HTML, CSS, Javascript",
            availableFrom: "Jul, 14, 2023",
            currentSalary: "$6000",
            noticePeriod: "90 Days",
            fullAddress: "9400 Ashton Rd, Philadelphia...",
            totalExperience: "5 Years",
            currentEmploymentStatus: "Employed",
            dateOfBirth: "15 June 1993",
            relevantExperience: "7 Years",
            salaryExpectation: "$9000",
            status: "Submitted to Client",
            salaryType: "Annual",
            languageSkills: "English(Elementary proficiency)",
          }),
        800
      )
    ),
  fetchJobsData: () =>
    new Promise((res) =>
      setTimeout(
        () =>
          res([
            {
              id: 1,
              title: "Senior Product Manager",
              company: "Recruit CRM",
              assignedTo: "William Sample",
              assignedDate: "Jul 10, 2023",
              status: "Assigned",
            },
            {
              id: 2,
              title: "Senior Product Manager",
              company: "Recruit CRM",
              assignedTo: "William Sample",
              assignedDate: "Jul 10, 2023",
              status: "Assigned",
            },
          ]),
        600
      )
    ),
};

export default function CandidateDashboard() {
  const [candidateData, setCandidateData] = useState(null);
  const [jobsData, setJobsData] = useState([]);
  const [loading, setLoading] = useState({ candidate: true, jobs: true });
  const [isSaving, setIsSaving] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("assigned-jobs");
  const [activeRightTab, setActiveRightTab] = useState("all");
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  useEffect(() => {
    mockAPI.fetchCandidateData().then((data) => {
      setCandidateData(data);
      setLoading((prev) => ({ ...prev, candidate: false }));
    });
    mockAPI.fetchJobsData().then((data) => {
      setJobsData(data);
      setLoading((prev) => ({ ...prev, jobs: false }));
    });
  }, []);

  const handleSave = (updatedData) => {
    setIsSaving(true);
    setTimeout(() => {
      setCandidateData(updatedData);
      setIsEditOpen(false);
      setIsSaving(false);
    }, 800);
  };

  return (
    <div className="dashboard-container">
      <Sidebar isOpen={true} />
      <div className="main-content">
        <Header onToggleRightSidebar={() => setRightSidebarOpen(!rightSidebarOpen)} />

        {/* Breadcrumb */}
        <div className="breadcrumb-wrap">
          <div className="breadcrumb">
            <span className="breadcrumb-item">Candidates</span> › 
            <span className="breadcrumb-item">Robert Hardy</span> › 
            <span className="breadcrumb-item">ID - 231</span>
          </div>
          <div className="action-buttons">
            <button className="btn btn-secondary">Request Profile Update</button>
            <button className="btn btn-secondary">Previous</button>
            <button className="btn btn-secondary">Next</button>
          </div>
        </div>

        {/* Candidate Info */}
        {loading.candidate ? (
          <div className="loading-section">
            <div className="loading-spinner"></div>
            <p>Loading candidate profile...</p>
          </div>
        ) : (
          <>
            <ProfileSection candidateData={candidateData} onEditClick={() => setIsEditOpen(true)} isSaving={isSaving} />
            <DetailsGrid candidateData={candidateData} isEditMode={false} />
          </>
        )}

        <TabsContainer activeTab={activeTab} onTabChange={setActiveTab} />

        {loading.jobs ? (
          <div className="loading-section">
            <div className="loading-spinner"></div>
            <p>Loading assigned jobs...</p>
          </div>
        ) : (
          <JobList jobsData={jobsData} />
        )}
      </div>

      <RightSidebar
        isOpen={rightSidebarOpen}
        activeTab={activeRightTab}
        onTabChange={setActiveRightTab}
        onClose={() => setRightSidebarOpen(false)}
        activitiesData={[]}
        isLoadingActivities={false}
        error={null}
      />

      {candidateData && (
        <EditModal
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          candidateData={candidateData}
          onSave={handleSave}
          isSaving={isSaving}
        />
      )}
    </div>
  );
}
