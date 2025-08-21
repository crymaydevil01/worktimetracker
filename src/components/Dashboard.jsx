import React from "react";
import ShiftCalendar from "./ShiftCalendar";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md flex items-center justify-between">
        <h1 className="text-lg font-bold">Work Time Tracker</h1>
        <div className="flex space-x-4">
          <button className="bg-white text-blue-600 px-3 py-1 rounded">Home</button>
          <button className="bg-white text-blue-600 px-3 py-1 rounded">Reports</button>
          <button className="bg-white text-blue-600 px-3 py-1 rounded">Settings</button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 p-4 border-r overflow-y-auto hidden md:block">
          <h2 className="text-lg font-bold mb-2">Summary</h2>
          <ul className="space-y-2 text-sm">
            <li>✅ Hours Worked: 120</li>
            <li>📅 This Week: 32 hrs</li>
            <li>💵 Payday: Aug 25</li>
          </ul>
        </aside>

        {/* Calendar fills remaining space */}
        <main className="flex-1 overflow-auto">
          <ShiftCalendar />
        </main>
      </div>
    </div>
  );
}
