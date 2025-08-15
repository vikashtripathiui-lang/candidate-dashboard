"use client"

interface TabsContainerProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const TabsContainer = ({ activeTab, onTabChange }: TabsContainerProps) => {
  return (
     <div className="Container-Main">
    <div className="tabs-container">
      <div className="tabs">
        <button
          className={`tab ${activeTab === "all-details" ? "active" : ""}`}
          onClick={() => onTabChange("all-details")}
        >
          All Details
        </button>
        <button
          className={`tab ${activeTab === "assigned-jobs" ? "active" : ""}`}
          onClick={() => onTabChange("assigned-jobs")}
        >
          Assigned Jobs
        </button>
        <button
          className={`tab ${activeTab === "related-emails" ? "active" : ""}`}
          onClick={() => onTabChange("related-emails")}
        >
          Related Emails
        </button>
        <button
          className={`tab ${activeTab === "candidate-questions" ? "active" : ""}`}
          onClick={() => onTabChange("candidate-questions")}
        >
          Candidate Questions
        </button>
        <button className={`tab ${activeTab === "hotlists" ? "active" : ""}`} onClick={() => onTabChange("hotlists")}>
          Hotlists
        </button>
        <button
          className={`tab ${activeTab === "related-deals" ? "active" : ""}`}
          onClick={() => onTabChange("related-deals")}
        >
          Related Deals
        </button>
        <button
          className={`tab ${activeTab === "contacts-pitched" ? "active" : ""}`}
          onClick={() => onTabChange("contacts-pitched")}
        >
          Contact(s) Pitched
        </button>
      </div>
    </div>
    </div>
  )
}

export default TabsContainer
