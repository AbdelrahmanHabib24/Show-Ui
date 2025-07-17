import { useTheme } from "../components/ThemeContext";

export default function Header({ searchTerm, setSearchTerm }) {
  const { toggleTheme } = useTheme();

  return (
    <header className="flex flex-col sm:flex-row items-center space-x-52 bg-white dark:bg-gray-900 text-black dark:text-white mx-auto max-w-[1500px] border-b border-gray-200 px-4 sm:px-6 py-4 gap-y-4 sm:gap-y-0">
      
      {/* Breadcrumb Section - Left Side */}
      <div className="flex flex-wrap items-center space-x-2 sm:space-x-4">
        <button>
          <img src="/openwindow.svg" alt="Open Window" />
        </button>
        <button>
          <img src="/Star.svg" alt="Star" />
        </button>
        <span className="text-[#00000066] text-sm">Dashboards</span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-700 font-medium">Default</span>
      </div>

      {/* Search + Icons Section - Right Side */}
      <div className="flex items-center space-x-4">
        {/* Search Input */}
        <div className="flex items-center bg-[#0000000A] px-2 py-1 rounded-md">
          <img
            src="/Search.svg"
            alt="Search icon"
            className="w-4 h-4 mr-2"
          />
          <input
            type="text"
            placeholder="Search"
            className="text-sm bg-transparent focus:outline-none border-none w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Icon Buttons */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <button onClick={toggleTheme}>
            <img src="/lightmode.svg" alt="Toggle Theme" />
          </button>
          <button>
            <img src="/ClockCounter.svg" alt="Clock Counter" />
          </button>
          <button>
            <img src="/Clock.svg" alt="Clock" />
          </button>
          <button>
            <img src="/openwindow.svg" alt="Open Window" />
          </button>
        </div>
      </div>
    </header>
  );
}
