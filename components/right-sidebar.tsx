"use client"

interface RightSidebarProps {
  isOpen: boolean
  activeTab: string
  onTabChange: (tab: string) => void
  onClose: () => void
}

const RightSidebar = ({ isOpen, activeTab, onTabChange, onClose }: RightSidebarProps) => {
  return (
    <div className={`right-sidebar ${isOpen ? "right-sidebar-open" : ""}`}>

      <div className="header-right right-side-btn">
        <button className="header-btn add-btn">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#E6F1FF" />
            <path d="M25.8333 12.5H14.1667C13.7246 12.5 13.3007 12.6756 12.9882 12.9882C12.6756 13.3007 12.5 13.7246 12.5 14.1667V25.8333C12.5 26.2754 12.6756 26.6993 12.9882 27.0118C13.3007 27.3244 13.7246 27.5 14.1667 27.5H20.8333L27.5 20.8333V14.1667C27.5 13.7246 27.3244 13.3007 27.0118 12.9882C26.6993 12.6756 26.2754 12.5 25.8333 12.5ZM20 25.8333V20H25.8333L20 25.8333Z" fill="#2570CA" />
          </svg>

        </button>
        <button className="header-btn add-btn">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_12_111)">
              <circle cx="22" cy="21" r="20" fill="#E6F1FF" />
            </g>
            <path d="M27.8339 20.9992H29.5005C29.5005 16.7242 26.273 13.5 21.9922 13.5V15.1667C25.3772 15.1667 27.8339 17.6192 27.8339 20.9992Z" fill="#2570CA" />
            <path d="M22.0006 18.5C23.7531 18.5 24.5006 19.2475 24.5006 21H26.1672C26.1672 18.3125 24.6881 16.8333 22.0006 16.8333V18.5ZM24.8522 23.0358C24.6921 22.8903 24.4817 22.8127 24.2654 22.8194C24.0491 22.8261 23.8439 22.9165 23.6931 23.0717L21.6989 25.1225C21.2189 25.0308 20.2539 24.73 19.2606 23.7392C18.2672 22.745 17.9664 21.7775 17.8772 21.3008L19.9264 19.3058C20.0817 19.1551 20.1723 18.9499 20.179 18.7335C20.1857 18.5172 20.108 18.3067 19.9622 18.1467L16.8831 14.7608C16.7373 14.6003 16.5346 14.5029 16.3182 14.4894C16.1017 14.4759 15.8886 14.5472 15.7239 14.6883L13.9156 16.2392C13.7715 16.3838 13.6855 16.5762 13.6739 16.78C13.6614 16.9883 13.4231 21.9233 17.2497 25.7517C20.5881 29.0892 24.7697 29.3333 25.9214 29.3333C26.0897 29.3333 26.1931 29.3283 26.2206 29.3267C26.4243 29.3153 26.6167 29.2289 26.7606 29.0842L28.3106 27.275C28.4518 27.1104 28.5233 26.8973 28.5099 26.6809C28.4965 26.4644 28.3993 26.2618 28.2389 26.1158L24.8522 23.0358Z" fill="#2570CA" />
            <defs>
              <filter id="filter0_d_12_111" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.211765 0 0 0 0 0.278431 0 0 0 0.05 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12_111" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12_111" result="shape" />
              </filter>
            </defs>
          </svg>

        </button>
        <button className="header-btn add-btn">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#E6F1FF" />
            <path d="M20.0003 11.6667C15.4053 11.6667 11.667 15.405 11.667 20C11.667 24.595 15.4053 28.3333 20.0003 28.3333C24.5953 28.3333 28.3337 24.595 28.3337 20C28.3337 15.405 24.5953 11.6667 20.0003 11.6667ZM18.3345 23.6775L15.2403 20.59L16.417 19.41L18.3328 21.3225L22.7445 16.9108L23.9228 18.0892L18.3345 23.6775Z" fill="#2570CA" />
          </svg>

        </button>
        <button className="header-btn add-btn">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#E6F1FF" />
            <path d="M25.8333 13.3333H24.1667V11.6667H22.5V13.3333H17.5V11.6667H15.8333V13.3333H14.1667C13.2475 13.3333 12.5 14.0808 12.5 15V26.6667C12.5 27.5858 13.2475 28.3333 14.1667 28.3333H25.8333C26.7525 28.3333 27.5 27.5858 27.5 26.6667V15C27.5 14.0808 26.7525 13.3333 25.8333 13.3333ZM25.8342 26.6667H14.1667V16.6667H25.8333L25.8342 26.6667Z" fill="#2570CA" />
          </svg>

        </button>
      </div>
      <div className="right-sidebar-header">
        <div className="right-tabs">
          <button className={`right-tab ${activeTab === "all" ? "active" : ""}`} onClick={() => onTabChange("all")}>
            All
          </button>
          <button className={`right-tab ${activeTab === "notes" ? "active" : ""}`} onClick={() => onTabChange("notes")}>
            Notes & Calls
          </button>
          <button className={`right-tab ${activeTab === "tasks" ? "active" : ""}`} onClick={() => onTabChange("tasks")}>
            Tasks
          </button>
          <button
            className={`right-tab ${activeTab === "meeting" ? "active" : ""}`}
            onClick={() => onTabChange("meeting")}
          >
            Meeting
          </button>
          <button className={`right-tab ${activeTab === "files" ? "active" : ""}`} onClick={() => onTabChange("files")}>
            Files
          </button>
        </div>
      </div>

      <div className="activity-list">
        {[1, 2, 3].map((item) => (
          <div key={item} className="activity-item">
            <div className="activity-header">
              <div className="activity-type">
                <span className="activity-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="10" fill="#E6F1FF"/>
<path d="M12.2222 7H6.77778C6.5715 7 6.37367 7.08194 6.22781 7.22781C6.08194 7.37367 6 7.5715 6 7.77778V13.2222C6 13.4285 6.08194 13.6263 6.22781 13.7722C6.37367 13.9181 6.5715 14 6.77778 14H9.88889L13 10.8889V7.77778C13 7.5715 12.9181 7.37367 12.7722 7.22781C12.6263 7.08194 12.4285 7 12.2222 7ZM9.5 13.2222V10.5H12.2222L9.5 13.2222Z" fill="#2570CA"/>
</svg>
</span>
                <span className="activity-label">Note</span>
                <span className="activity-status">To Do</span>
              </div>
            </div>
            <div className="activity-content">
              <p>
                Lorem dolore sit at aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex
                cillum laboris occaecat ipsum Lorem cupidatat.
              </p>
            </div>
            <div className="activity-meta">
              <div className="activity-association">
                <span className="association-count">1 Association(s)</span>
              </div>
              <div className="activity-author">
                <div className="activity-author-inner">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0C4.41498 0.0202135 2.90058 0.658844 1.77971 1.77971C0.658844 2.90058 0.0202135 4.41498 0 6C0.00740933 6.92335 0.227832 7.83253 0.644107 8.65675C1.06038 9.48098 1.66127 10.198 2.4 10.752V10.8H2.46C3.47591 11.5785 4.72011 12.0004 6 12.0004C7.27989 12.0004 8.52409 11.5785 9.54 10.8H9.6V10.752C10.3387 10.198 10.9396 9.48098 11.3559 8.65675C11.7722 7.83253 11.9926 6.92335 12 6C11.9798 4.41498 11.3412 2.90058 10.2203 1.77971C9.09942 0.658844 7.58502 0.0202135 6 0ZM3.642 10.158C3.72959 9.75687 3.95169 9.39773 4.27145 9.14018C4.59121 8.88262 4.98941 8.74213 5.4 8.742H6.6C7.01059 8.74213 7.40879 8.88262 7.72855 9.14018C8.04831 9.39773 8.27041 9.75687 8.358 10.158C7.64332 10.5785 6.8292 10.8002 6 10.8002C5.1708 10.8002 4.35668 10.5785 3.642 10.158ZM9.366 9.384C9.13778 8.83857 8.75347 8.37274 8.26135 8.04502C7.76924 7.71729 7.19125 7.54229 6.6 7.542H5.4C4.80875 7.54229 4.23076 7.71729 3.73865 8.04502C3.24653 8.37274 2.86222 8.83857 2.634 9.384C2.1844 8.94179 1.82634 8.41533 1.58029 7.83468C1.33424 7.25404 1.20501 6.63061 1.2 6C1.21556 4.7318 1.72627 3.51992 2.6231 2.6231C3.51992 1.72627 4.7318 1.21556 6 1.2C7.2682 1.21556 8.48008 1.72627 9.3769 2.6231C10.2737 3.51992 10.7844 4.7318 10.8 6C10.795 6.63061 10.6658 7.25404 10.4197 7.83468C10.1737 8.41533 9.8156 8.94179 9.366 9.384Z" fill="#495057" />
                    <path d="M6.00025 2.40001C5.68305 2.39262 5.36766 2.44965 5.07314 2.56764C4.77861 2.68564 4.51109 2.86215 4.28674 3.0865C4.06239 3.31085 3.88588 3.57838 3.76788 3.8729C3.64988 4.16742 3.59286 4.48282 3.60025 4.80001C3.59286 5.1172 3.64988 5.4326 3.76788 5.72712C3.88588 6.02164 4.06239 6.28917 4.28674 6.51352C4.51109 6.73787 4.77861 6.91438 5.07314 7.03237C5.36766 7.15037 5.68305 7.2074 6.00025 7.20001C6.31744 7.2074 6.63283 7.15037 6.92736 7.03237C7.22188 6.91438 7.4894 6.73787 7.71375 6.51352C7.93811 6.28917 8.11462 6.02164 8.23261 5.72712C8.35061 5.4326 8.40764 5.1172 8.40025 4.80001C8.40764 4.48282 8.35061 4.16742 8.23261 3.8729C8.11462 3.57838 7.93811 3.31085 7.71375 3.0865C7.4894 2.86215 7.22188 2.68564 6.92736 2.56764C6.63283 2.44965 6.31744 2.39262 6.00025 2.40001ZM6.00025 6.00001C5.84062 6.00773 5.68114 5.98197 5.53205 5.92439C5.38297 5.86682 5.24757 5.7787 5.13456 5.66569C5.02156 5.55268 4.93344 5.41729 4.87586 5.2682C4.81828 5.11912 4.79253 4.95964 4.80025 4.80001C4.79253 4.64038 4.81828 4.4809 4.87586 4.33181C4.93344 4.18273 5.02156 4.04733 5.13456 3.93433C5.24757 3.82132 5.38297 3.7332 5.53205 3.67562C5.68114 3.61805 5.84062 3.59229 6.00025 3.60001C6.15988 3.59229 6.31936 3.61805 6.46844 3.67562C6.61753 3.7332 6.75292 3.82132 6.86593 3.93433C6.97893 4.04733 7.06706 4.18273 7.12463 4.33181C7.18221 4.4809 7.20796 4.64038 7.20025 4.80001C7.20796 4.95964 7.18221 5.11912 7.12463 5.2682C7.06706 5.41729 6.97893 5.55268 6.86593 5.66569C6.75292 5.7787 6.61753 5.86682 6.46844 5.92439C6.31936 5.98197 6.15988 6.00773 6.00025 6.00001Z" fill="#495057" />
                  </svg>

                  <span>John Doe</span>
                </div>
                <div className="activity-date">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0C2.6916 0 0 2.6916 0 6C0 9.3084 2.6916 12 6 12C9.3084 12 12 9.3084 12 6C12 2.6916 9.3084 0 6 0ZM6 10.8C3.3534 10.8 1.2 8.6466 1.2 6C1.2 3.3534 3.3534 1.2 6 1.2C8.6466 1.2 10.8 3.3534 10.8 6C10.8 8.6466 8.6466 10.8 6 10.8Z" fill="#495057" />
                    <path d="M6.5999 3H5.3999V6.6H8.9999V5.4H6.5999V3Z" fill="#495057" />
                  </svg>

                  <span>Jul 12, 2023, 11:54 am</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RightSidebar
