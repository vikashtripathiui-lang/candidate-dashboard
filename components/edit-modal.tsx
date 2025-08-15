"use client"

import { useState } from "react"

interface CandidateData {
  name: string
  jobTitle: string
  location: string
  city: string
  email: string
  phone: string
  currentOrganization: string
  skills: string
  availableFrom: string
  currentSalary: string
  notePeriod: string
  fullAddress: string
  resume: string
  totalExperience: string
  currentEmploymentStatus: string
  dateOfBirth: string
  relevantExperience: string
  salaryExpectation: string
  status: string
  salaryType: string
  languageSkills: string
  [key: string]: string
}

interface EditModalProps {
  isOpen: boolean
  onClose: () => void
  candidateData: CandidateData
  onSave: (data: CandidateData) => void
  isSaving?: boolean
}

const EditModal = ({ isOpen, onClose, candidateData, onSave, isSaving = false }: EditModalProps) => {
  const [formData, setFormData] = useState<CandidateData>(candidateData)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    onSave(formData)
  }

  const handleCancel = () => {
    setFormData(candidateData) // Reset form data
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Edit Candidate Profile</h2>
          <button className="modal-close" onClick={onClose} disabled={isSaving}>
            ×
          </button>
        </div>

        <div className="modal-body">
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                disabled={isSaving}
              />
            </div>

            <div className="form-group">
              <label>Job Title</label>
              <input
                type="text"
                value={formData.jobTitle}
                onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                disabled={isSaving}
              />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                disabled={isSaving}
              />
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                disabled={isSaving}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                disabled={isSaving}
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                disabled={isSaving}
              />
            </div>

            <div className="form-group">
              <label>Current Organization</label>
              <input
                type="text"
                value={formData.currentOrganization}
                onChange={(e) => handleInputChange("currentOrganization", e.target.value)}
                disabled={isSaving}
              />
            </div>

            <div className="form-group">
              <label>Skills</label>
              <input
                type="text"
                value={formData.skills}
                onChange={(e) => handleInputChange("skills", e.target.value)}
                disabled={isSaving}
              />
            </div>

            <div className="form-group">
              <label>Available From</label>
              <input
                type="date"
                value={formData.availableFrom}
                onChange={(e) => handleInputChange("availableFrom", e.target.value)}
                disabled={isSaving}
              />
            </div>

            <div className="form-group">
              <label>Current Salary</label>
              <input
                type="text"
                value={formData.currentSalary}
                onChange={(e) => handleInputChange("currentSalary", e.target.value)}
                disabled={isSaving}
              />
            </div>

            <div className="form-group">
              <label>Notice Period</label>
              <input
                type="text"
                value={formData.notePeriod}
                onChange={(e) => handleInputChange("notePeriod", e.target.value)}
                disabled={isSaving}
              />
            </div>

            <div className="form-group">
              <label>Employment Status</label>
              <select
                value={formData.currentEmploymentStatus}
                onChange={(e) => handleInputChange("currentEmploymentStatus", e.target.value)}
                disabled={isSaving}
              >
                <option value="Employed">Employed</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Self-employed">Self-employed</option>
                <option value="Student">Student</option>
              </select>
            </div>

            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                disabled={isSaving}
              />
            </div>

            <div className="form-group">
              <label>Relevant Experience</label>
              <input
                type="text"
                value={formData.relevantExperience}
                onChange={(e) => handleInputChange("relevantExperience", e.target.value)}
                disabled={isSaving}
              />
            </div>

            <div className="form-group">
              <label>Salary Expectation</label>
              <input
                type="text"
                value={formData.salaryExpectation}
                onChange={(e) => handleInputChange("salaryExpectation", e.target.value)}
                disabled={isSaving}
              />
            </div>

            <div className="form-group">
              <label>Status</label>
              <select
                value={formData.status}
                onChange={(e) => handleInputChange("status", e.target.value)}
                disabled={isSaving}
              >
                <option value="Submitted to Client">Submitted to Client</option>
                <option value="In Review">In Review</option>
                <option value="Interview Scheduled">Interview Scheduled</option>
                <option value="Hired">Hired</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <div className="form-group">
              <label>Salary Type</label>
              <select
                value={formData.salaryType}
                onChange={(e) => handleInputChange("salaryType", e.target.value)}
                disabled={isSaving}
              >
                <option value="Annual">Annual</option>
                <option value="Monthly">Monthly</option>
                <option value="Hourly">Hourly</option>
              </select>
            </div>

            <div className="form-group">
              <label>Language Skills</label>
              <input
                type="text"
                value={formData.languageSkills}
                onChange={(e) => handleInputChange("languageSkills", e.target.value)}
                disabled={isSaving}
              />
            </div>

            <div className="form-group full-width">
              <label>Full Address</label>
              <textarea
                value={formData.fullAddress}
                onChange={(e) => handleInputChange("fullAddress", e.target.value)}
                disabled={isSaving}
                rows={3}
              />
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={handleCancel} disabled={isSaving}>
            Cancel
          </button>
          <button
            className={`btn btn-primary ${isSaving ? "btn-loading" : ""}`}
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditModal
