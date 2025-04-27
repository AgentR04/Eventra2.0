import React from "react";
import DashboardLayout from "./dashboard/DashboardLayout";
import DashboardSidebar from "./dashboard/DashboardSidebar";
import DashboardHeader from "./dashboard/DashboardHeader";
import DashboardContent from "./dashboard/DashboardContent";
import SchedulingSection from "./dashboard/SchedulingSection";
import TaskManagementSection from "./dashboard/TaskManagementSection";
import BudgetSection from "./dashboard/BudgetSection";
import AnnouncementsSection from "./dashboard/AnnouncementsSection";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <DashboardSidebar />
      <DashboardContent>
        {/* Example: Render sections based on routing or tab state */}
        <SchedulingSection />
        <TaskManagementSection />
        <BudgetSection />
        <AnnouncementsSection />
      </DashboardContent>
    </DashboardLayout>
  );
}

export default Dashboard;
