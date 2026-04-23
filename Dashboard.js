import React from "react";
import Card from "./Card";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome Back 👋</h1>

      <div className="cards">
        <Card title="Tasks" value="24" />
        <Card title="Completed" value="18" />
        <Card title="Pending" value="6" />
      </div>
    </div>
  );
}

export default Dashboard;
