import { useState } from "react";

interface TabsProps {
  onTabChange: (tab: "plants" | "animals") => void;
}

const Tabs: React.FC<TabsProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<"plants" | "animals">("plants");

  return (
    <div className="flex space-x-4 mb-4">
      <button
        className={`px-4 py-2 rounded-lg ${activeTab === "plants" ? "bg-green-500 text-white" : "bg-gray-300"}`}
        onClick={() => { setActiveTab("plants"); onTabChange("plants"); }}
      >
        Plants
      </button>
      <button
        className={`px-4 py-2 rounded-lg ${activeTab === "animals" ? "bg-green-500 text-white" : "bg-gray-300"}`}
        onClick={() => { setActiveTab("animals"); onTabChange("animals"); }}
      >
        Animals
      </button>
    </div>
  );
};

export default Tabs;
