import React, { useEffect, useState } from "react";

export default function MainContent({ searchTerm }) {
  const [spendings, setSpendings] = useState([]);

  const timelineDays = ["SU", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const timelineDates = [22, 23, 24, 25, 26, 27, 28];
  const activeDate = 23;

  const activities = [
    {
      user: "You",
      avatar: "/Female.svg",
      action: "You have a bug that needs to be fixed.",
      time: "Just now",
    },
    {
      user: "Someone",
      avatar: "/person.svg",
      action: "Released a new version",
      time: "59 minutes ago",
    },
    {
      user: "Someone",
      avatar: "/person2.svg",
      action: "Submitted a bug",
      time: "1 hour ago",
    },
    {
      user: "Someone",
      avatar: "/Avatar.svg",
      action: "Modified A data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      user: "Someone",
      avatar: "/person3.svg",
      action: "Deleted a page in Project X",
      time: "Feb 2, 2025",
    },
  ];

  const files = [
    {
      name: "Project tech requirements.pdf",
      size: "5.6 MB",
      time: "Just now",
      user: "Karina Clark",
      icon: "/pdf.svg",
    },
    {
      name: "Dashboard-design.jpg",
      size: "2.3 MB",
      time: "59 minutes ago",
      user: "Marcus Blake",
      icon: "/Jpg.svg",
    },
    {
      name: "Completed Project Stylings.pdf",
      size: "4.6 MB",
      time: "12 hours ago",
      user: "Terry Barry",
      icon: "/pdf.svg",
    },
    {
      name: "Create Project Wireframes.xls",
      size: "2.8 MB",
      time: "Today, 11:59 AM",
      user: "Roth Bloom",
      icon: "/xls.svg",
    },
    {
      name: "Project tech requirements.pdf",
      size: "2.8 MB",
      time: "Yesterday",
      user: "Natalie Craig",
      icon: "/pdf.svg",
    },
  ];

  useEffect(() => {
    async function fetchSpendings() {
      console.log("fetchSpendings called");

      try {
        const res = await fetch(
          "https://scopey.onrender.com/api/session/sessions"
        );

        console.log("response status:", res.status);

        const data = await res.json();
        console.log("Fetched data:", data); // 🟢 اطبع البيانات الراجعة

        // 👇 عدل حسب شكل البيانات
        if (data && Array.isArray(data.sessions)) {
          setSpendings(data.sessions);
        } else {
          console.error("sessions not found or not array");
        }
      } catch (err) {
        console.error("Error fetching spendings:", err.message);
      }
    }

    fetchSpendings();
  }, []);

  const filteredSpendings = searchTerm.trim()
    ? spendings.filter((item) =>
        item.clientName?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : spendings;

  //   if (loading) return <p>Loading spendings...</p>;

 return (
  <main className="w-full mx-auto px-4 sm:px-6">
    <div className="text-sm text-gray-800">
      
      {/* Header Navigation */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-2 sm:px-6 py-3 bg-white gap-3 sm:gap-0">
        <nav className="flex flex-wrap gap-2 sm:gap-4 text-[14px] text-[#00000066]">
          {[
            "Overview",
            "Targets",
            "Budget",
            "Users",
            "Files",
            "Activity",
            "Settings",
          ].map((tab, idx) => (
            <span
              key={tab}
              className={`pb-1 ${
                idx === 0 ? "text-black border-b-2 border-black" : ""
              }`}
            >
              {tab}
            </span>
          ))}
        </nav>
        <div className="flex flex-wrap justify-start sm:justify-end items-center gap-2 mt-2 sm:mt-0">
          <button className="bg-[#0000000A] text-[#00000066] h-[28px] w-[98px] rounded text-sm">
            + Add User
          </button>
          <button className="bg-[#0000000A] text-[#00000066] w-[98px] h-[28px] rounded text-sm">
            Add Target
          </button>
          <button className="w-[28px] h-[28px] bg-[#0000000A] rounded-full flex items-center justify-center">
            <img src="/threedots.svg" alt="" />
          </button>
        </div>
      </header>

      {/* Project Summary */}
      <section className="bg-[#F9F9FA] m-4 sm:m-6 p-4 sm:p-6 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <h2 className="text-xl font-bold">SnowUI</h2>
          <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
            <div className="flex items-center space-x-4 pr-4 border-r border-gray-200">
              <span className="relative flex items-center justify-center text-[18px] text-black h-[28px] w-[160px] rounded-full text-xs font-semibold overflow-hidden">
                <span
                  className="absolute left-0 top-0 h-full bg-[#9F9FF8]"
                  style={{ width: "52%" }}
                ></span>
                <span className="relative z-10 flex items-center bg-[#0000000A] h-[28px] w-[160px] justify-center">
                  In Progress <span className="text-[#00000033] mx-1">/</span>{" "}
                  <span>51%</span>
                </span>
              </span>
            </div>
            <div className="flex flex-wrap space-x-4 sm:space-x-6">
              <span className="flex flex-col pr-4 border-r text-[#000000] border-gray-200">
                Total Tasks{" "}
                <strong>
                  15 <span className="text-[#00000033] mx-0">/</span> 48
                </strong>
              </span>
              <span className="flex flex-col pr-4 text-[#000000] border-r border-gray-200">
                Due Date <strong>29 Jan, 2025</strong>
              </span>
              <span className="flex flex-col text-[#000000]">
                Budget Spent <strong>$15,000</strong>
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-start md:justify-end items-end space-x-2 mt-4 md:mt-0">
          <div className="flex flex-col items-end justify-end">
            <img className="pb-4" src="/ice.svg" alt="Ice" />
            <div className="flex items-center space-x-1">
              <img src="/Frame.svg" alt="User1" className="w-8 h-8 rounded-full" />
              <img src="/Female.svg" alt="User2" className="w-8 h-8 rounded-full" />
              <span className="text-xs bg-[#EDEEFC] px-1 py-1 w-6 h-6 rounded-full text-black flex items-center justify-center">
                +3
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Files */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6">
        {/* Timeline */}
        <div className="p-4 rounded-lg shadow bg-[#F9F9FA] space-y-4">
          <h3 className="text-[14px] font-semibold">What's on the road?</h3>
          <div className="flex justify-between">
            {timelineDays.map((day, i) => (
              <div
                key={day}
                className={`flex flex-col items-center w-10 h-14 justify-center rounded-lg ${
                  timelineDates[i] === activeDate
                    ? "bg-black text-white"
                    : "text-gray-500"
                }`}
              >
                <span className="text-xs">{day}</span>
                <span className="font-semibold">{timelineDates[i]}</span>
              </div>
            ))}
          </div>
          <div className="relative">
            {activities.map((item, i) => (
              <div key={i} className="relative flex items-start space-x-3 mb-5">
                <div className="relative flex flex-col items-center">
                  <div className="z-10 w-8 h-8 rounded-full overflow-hidden bg-white">
                    <img
                      src={item.avatar}
                      alt={item.user}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {i !== activities.length - 1 && (
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-px h-[14px] mt-1 bg-gray-300 z-0" />
                  )}
                </div>
                <div>
                  <p className="text-sm text-[#000000]">{item.action}</p>
                  <p className="text-xs text-gray-400">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Files */}
        <div className="p-4 rounded-lg bg-[#F9F9FA] shadow space-y-5">
          <h3 className="text-md font-medium">Latest Files</h3>
          {files.map((file, i) => {
            const firstMatchIndex = files.findIndex(
              (f) => f.name === "Project tech requirements.pdf"
            );

            return (
              <div key={i} className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <img
                    src={file.icon}
                    alt="File icon"
                    className="w-8 h-8 object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{file.name}</p>
                    <p className="text-xs text-gray-400">
                      {file.size} / {file.time} / {file.user}
                    </p>
                  </div>
                </div>
                {file.name === "Project tech requirements.pdf" &&
                  i === firstMatchIndex && (
                    <img
                      src="/download.svg"
                      alt="Special icon"
                      className="w-8 h-8 object-contain"
                    />
                  )}
              </div>
            );
          })}
          <div className="bg-[#FFFFFFCC] rounded-full z-50 p-4 text-center text-sm text-gray-400">
            Drop files here or upload files
            <button className="ml-2 text-black bg-[#0000000A] h-[26px] w-[60px]">
              Upload
            </button>
          </div>
        </div>
      </section>

      {/* Spendings Table */}
      <section className="bg-[#F9F9FA] p-4 sm:p-6 mt-6 mx-4 sm:mx-6 rounded-lg shadow overflow-x-auto">
        <h3 className="text-md font-semibold mb-4">Project Spendings</h3>
        <table className="min-w-full text-sm text-left text-gray-600">
          <thead className="border-b text-gray-300">
            <tr>
              <th className="py-2">Manager</th>
              <th className="py-2">Date</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredSpendings.slice(0, 5).map((item, i) => (
              <tr key={i}>
                <td className="py-3 flex items-center space-x-2">
                  <img
                    src="/Frame.svg"
                    alt="Manager"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium text-[#000000]">
                    {item.clientName || "—"}
                  </span>
                </td>
                <td className="py-3 text-sm text-gray-600">
                  {item.date
                    ? new Date(item.date).toLocaleDateString()
                    : "No date"}
                </td>
                <td className="py-3 text-sm text-gray-600">
                  {item.amount ? item.amount : "—"}
                </td>
                <td className="py-3">
                  <span className="flex items-center space-x-2 text-sm font-medium opacity-80 text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                    <span>{item.status}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  </main>
);

}
