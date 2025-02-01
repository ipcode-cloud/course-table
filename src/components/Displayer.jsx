import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Displayer = (props) => {
  const { search, filteredModules, handleSearchChange } = props;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-3xl bg-white bg-opacity-20 rounded-2xl shadow-2xl p-8 flex flex-col items-center"
      >
        <h1 className="text-4xl font-extrabold text-white mb-6 text-center flex items-center justify-center">
          📚 Module Search 📚
        </h1>
        <div className="flex items-center mb-6 w-full justify-center">
          <input
            type="text"
            placeholder="🔍 Type a day ..."
            value={search}
            onChange={handleSearchChange}
            className="flex-1 mr-2 p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition text-center"
          />
          <motion.button
            whileTap={{ scale: 0.75 }}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition flex-shrink-0"
          >
            Search 🔎
          </motion.button>
        </div>
        <AnimatePresence className="w-full">
          {filteredModules.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredModules.map((module) => (
                <motion.div
                  key={module.day}
                  className="bg-gray-800 bg-opacity-60 rounded-2xl p-6 shadow-lg flex flex-col items-center"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-2xl font-semibold text-purple-300 mb-4 flex items-center justify-center text-center">
                    🗓️ {module.day}
                  </h2>
                  <ul className="list-disc list-inside text-white space-y-2 text-center">
                    {module.names.map((element, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center"
                      >
                        ✅ {element}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.p
              className="text-center text-white mt-8 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              🤖 No modules found for "{search}"
            </motion.p>
          )}
        </AnimatePresence>
        <footer className="mt-8 text-center text-gray-300">
          Powered by React & Framer Motion 🚀 & made with 🤖 By irankunda
        </footer>
      </motion.div>
    </>
  );
};

export default Displayer;
