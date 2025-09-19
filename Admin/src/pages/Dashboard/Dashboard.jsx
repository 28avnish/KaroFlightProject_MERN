import React, { useState } from "react";
import TabNavigation from './components/TabNavigation';
import DashboardMetrics from './components/DashboardMetrics';
import DashboardCharts from './components/DashboardCharts';
import FlightTable from './components/FlightTable';
import HotelTable from './components/HotelTable';
import CustomerTable from './components/CustomerTable';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Travel Dashboard</h1>
      
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'overview' && (
        <>
          <DashboardMetrics />
          <DashboardCharts />
        </>
      )}

      {activeTab === 'flights' && <FlightTable />}
      {activeTab === 'hotels' && <HotelTable />}
      {activeTab === 'customers' && <CustomerTable />}
    </div>
  );
}