import React, { useState } from "react";
import { modules } from "./constants/modules";
import { motion, AnimatePresence } from "framer-motion";
import Displayer from "./components/Displayer";

const App = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredModules = modules.filter((module) =>
    module.day.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 p-8">
      <Displayer search={search} handleSearcbhChange={handleSearchChange} filteredModules={filteredModules}/>
    </div>
  );
};

export default App;
