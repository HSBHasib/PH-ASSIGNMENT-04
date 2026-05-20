# JobTracker Dashboard

A modern, clean, and fully responsive **Job Application Management Dashboard** built with pure Vanilla JavaScript.  
Track your application pipeline, toggle candidate statuses seamlessly, and manage your career workflow in one unified interface.

## About the Project

JobTracker Dashboard is a lightweight, logic driven web application designed to optimize the job hunt process. It allows users to view a comprehensive catalog of active job openings and dynamically sort them into dedicated pipelines (All, Interview, and Rejected) with real time status toggling. Built with a responsive layout inspired by professional Figma components, it eliminates messy spreadsheet tracking and brings your recruitment workflow to life.

---

## 🔗 Links

* 🌐 **Live Site:** [View Live Site](https://job-tracker-dashboard-azure.vercel.app/)
* 💻 **GitHub Repo:** [View Github Repo](https://github.com/HSBHasib/Job-Tracker-Dashboard-A4)

## 🛠️ Technologies Used

* **Structure:** HTML5
* **Styling & Components:** Tailwind CSS
* **Core Logic:** Vanilla JavaScript (ES6+ DOM Manipulation)
* **State Management:** Local Arrays for active job filtering and metric counting

---

## 🚀 Key Features

### 📊 Real-Time Metrics Counters
* The header dashboard displays continuous dynamic counts for total jobs, ongoing interviews, and rejected applications that update instantly based on user actions.

### 🔀 Triple-Tab Pipeline Toggling
* Includes separate tabs for **All**, **Interview**, and **Rejected**. 
* Advanced conditional rendering displays a beautiful "No Jobs Available" state with illustrative warnings when a pipeline is empty.

### 🔄 Two Way Status Switching
* Supports full multi state toggling. Clicking "Interview" or "Rejected" instantly updates the job status, moves the card to its respective tab view, and recalculates dashboard counter analytics without page reloads.

### ❌ Smart Card Deletion (CRUD)
* Features an absolute removal system. Clicking the delete icon completely purges the card from the active UI, auto deducting its metrics from both the dashboard widgets and tab totals.

---

## ⚙️ How to Run Locally

```bash
# Clone the repository
git clone [ https://github.com/HSBHasib/Job-Tracker-Dashboard-A4.git ]

# Go into the project folder
cd Job-Tracker-Dashboard-A4

# Run the project
Run via Live Server extension in VS Code or open the hosted live link directly!
```

## Developer
* Name: Hasibur Rahman
* GitHub: [HSBHasib](https://github.com/HSBHasib)
