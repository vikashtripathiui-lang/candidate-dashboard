"use client"

interface CandidateData {
  [key: string]: string
}

interface DetailsGridProps {
  candidateData: CandidateData
  isEditMode: boolean
  onInputChange: (field: string, value: string) => void
}

const DetailsGrid = ({ candidateData, isEditMode, onInputChange }: DetailsGridProps) => {
  return (
    <div className="Container-Main">
    <div className="details-grid">
      <div className="details-column">
        <div className="detail-item">
          <span className="detail-label">Current Organization</span>
          {isEditMode ? (
            <input
              type="text"
              value={candidateData.currentOrganization}
              onChange={(e) => onInputChange("currentOrganization", e.target.value)}
              className="edit-input detail-edit"
            />
          ) : (
            <span className="detail-value">{candidateData.currentOrganization}</span>
          )}
        </div>
        <div className="detail-item">
          <span className="detail-label">Skills</span>
          {isEditMode ? (
            <input
              type="text"
              value={candidateData.skills}
              onChange={(e) => onInputChange("skills", e.target.value)}
              className="edit-input detail-edit"
            />
          ) : (
            <span className="detail-value">{candidateData.skills}</span>
          )}
        </div>
        <div className="detail-item">
          <span className="detail-label">Available From</span>
          {isEditMode ? (
            <input
              type="text"
              value={candidateData.availableFrom}
              onChange={(e) => onInputChange("availableFrom", e.target.value)}
              className="edit-input detail-edit"
            />
          ) : (
            <span className="detail-value">{candidateData.availableFrom}</span>
          )}
        </div>
        <div className="detail-item">
          <span className="detail-label">Current Salary</span>
          {isEditMode ? (
            <input
              type="text"
              value={candidateData.currentSalary}
              onChange={(e) => onInputChange("currentSalary", e.target.value)}
              className="edit-input detail-edit"
            />
          ) : (
            <span className="detail-value">{candidateData.currentSalary}</span>
          )}
        </div>
        <div className="detail-item">
          <span className="detail-label">Notice Period</span>
          {isEditMode ? (
            <input
              type="text"
              value={candidateData.noticePeriod}
              onChange={(e) => onInputChange("noticePeriod", e.target.value)}
              className="edit-input detail-edit"
            />
          ) : (
            <span className="detail-value">{candidateData.noticePeriod}</span>
          )}
        </div>
        <div className="detail-item">
          <span className="detail-label">Full Address</span>
          {isEditMode ? (
            <input
              type="text"
              value={candidateData.fullAddress}
              onChange={(e) => onInputChange("fullAddress", e.target.value)}
              className="edit-input detail-edit"
            />
          ) : (
            <span className="detail-value">{candidateData.fullAddress}</span>
          )}
        </div>
        <div className="detail-item">
          <span className="detail-label">Resume</span>
          <span className="detail-value">Resume</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Total Experience</span>
          {isEditMode ? (
            <input
              type="text"
              value={candidateData.totalExperience}
              onChange={(e) => onInputChange("totalExperience", e.target.value)}
              className="edit-input detail-edit"
            />
          ) : (
            <span className="detail-value">{candidateData.totalExperience}</span>
          )}
        </div>
      </div>
      <div className="details-column">
        <div className="detail-item">
          <span className="detail-label">Summary</span>
          <span className="detail-value">Current Organization</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Current Employment Status</span>
          {isEditMode ? (
            <select
              value={candidateData.currentEmploymentStatus}
              onChange={(e) => onInputChange("currentEmploymentStatus", e.target.value)}
              className="edit-input detail-edit"
            >
              <option value="Employed">Employed</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Freelancer">Freelancer</option>
            </select>
          ) : (
            <span className="detail-value">{candidateData.currentEmploymentStatus}</span>
          )}
        </div>
        <div className="detail-item">
          <span className="detail-label">Date of Birth</span>
          {isEditMode ? (
            <input
              type="text"
              value={candidateData.dateOfBirth}
              onChange={(e) => onInputChange("dateOfBirth", e.target.value)}
              className="edit-input detail-edit"
            />
          ) : (
            <span className="detail-value">{candidateData.dateOfBirth}</span>
          )}
        </div>
        <div className="detail-item">
          <span className="detail-label">Relevant Experience</span>
          {isEditMode ? (
            <input
              type="text"
              value={candidateData.relevantExperience}
              onChange={(e) => onInputChange("relevantExperience", e.target.value)}
              className="edit-input detail-edit"
            />
          ) : (
            <span className="detail-value">{candidateData.relevantExperience}</span>
          )}
        </div>
        <div className="detail-item">
          <span className="detail-label">Salary Expectation</span>
          {isEditMode ? (
            <input
              type="text"
              value={candidateData.salaryExpectation}
              onChange={(e) => onInputChange("salaryExpectation", e.target.value)}
              className="edit-input detail-edit"
            />
          ) : (
            <span className="detail-value">{candidateData.salaryExpectation}</span>
          )}
        </div>
        <div className="detail-item">
          <span className="detail-label">Status</span>
          {isEditMode ? (
            <select
              value={candidateData.status}
              onChange={(e) => onInputChange("status", e.target.value)}
              className="edit-input detail-edit"
            >
              <option value="Submitted to Client">Submitted to Client</option>
              <option value="In Review">In Review</option>
              <option value="Interview Scheduled">Interview Scheduled</option>
              <option value="Hired">Hired</option>
              <option value="Rejected">Rejected</option>
            </select>
          ) : (
            <span className="detail-value">{candidateData.status}</span>
          )}
        </div>
        <div className="detail-item">
          <span className="detail-label">Salary Type</span>
          {isEditMode ? (
            <select
              value={candidateData.salaryType}
              onChange={(e) => onInputChange("salaryType", e.target.value)}
              className="edit-input detail-edit"
            >
              <option value="Annual">Annual</option>
              <option value="Monthly">Monthly</option>
              <option value="Hourly">Hourly</option>
            </select>
          ) : (
            <span className="detail-value">{candidateData.salaryType}</span>
          )}
        </div>
        <div className="detail-item">
          <span className="detail-label">Language Skills</span>
          {isEditMode ? (
            <input
              type="text"
              value={candidateData.languageSkills}
              onChange={(e) => onInputChange("languageSkills", e.target.value)}
              className="edit-input detail-edit"
            />
          ) : (
            <span className="detail-value">{candidateData.languageSkills}</span>
          )}
        </div>
      </div>
    </div>
    </div>
  )
}

export default DetailsGrid
