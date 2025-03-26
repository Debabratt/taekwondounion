import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StateUnion = () => {
  const [selectedState, setSelectedState] = useState(null);
  
  const states = [
    { 
      id: 1, 
      name: 'Maharashtra', 
      members: 3200, 
      dojangs: 120, 
      champion: 'Master Rajesh Patil', 
      image: '/maharashtra.jpg',
      unionName: 'Maharashtra Taekwondo Association',
      established: 1995,
      president: 'Dr. Sanjay Deshmukh',
      headquarters: 'Mumbai',
      contact: 'info@mahatkd.org',
      website: 'www.mahatkd.org',
      color: 'from-amber-600 to-amber-800'
    },
    { 
      id: 2, 
      name: 'Delhi', 
      members: 2800, 
      dojangs: 95, 
      champion: 'Master Vikram Singh', 
      image: '/delhi.jpg',
      unionName: 'Delhi Taekwondo Federation',
      established: 1992,
      president: 'Col. Ramesh Chandra',
      headquarters: 'New Delhi',
      contact: 'contact@delhitkd.in',
      website: 'www.delhitkd.in',
      color: 'from-blue-600 to-blue-800'
    },
    { 
      id: 3, 
      name: 'Karnataka', 
      members: 2500, 
      dojangs: 110, 
      champion: 'Master Arjun Reddy', 
      image: '/karnataka.jpg',
      unionName: 'Karnataka State Taekwondo Association',
      established: 1998,
      president: 'Prof. Mohan Kumar',
      headquarters: 'Bengaluru',
      contact: 'ksta@kar.nic.in',
      website: 'www.karnatakatkd.org',
      color: 'from-red-600 to-red-800'
    },
    { 
      id: 4, 
      name: 'Tamil Nadu', 
      members: 2300, 
      dojangs: 105, 
      champion: 'Master Karthik Iyer', 
      image: '/tamilnadu.jpg',
      unionName: 'Tamil Nadu Taekwondo Union',
      established: 1996,
      president: 'Mr. Senthil Nathan',
      headquarters: 'Chennai',
      contact: 'tntkdunion@gmail.com',
      website: 'www.tntkd.org',
      color: 'from-green-600 to-green-800'
    },
    { 
      id: 5, 
      name: 'Kerala', 
      members: 2100, 
      dojangs: 90, 
      champion: 'Master Ajith Nair', 
      image: '/kerala.jpg',
      unionName: 'Kerala Taekwondo Academy',
      established: 1994,
      president: 'Mr. Ramesh Menon',
      headquarters: 'Kochi',
      contact: 'keralatkd@yahoo.com',
      website: 'www.keralatkd.com',
      color: 'from-emerald-600 to-emerald-800'
    },
    { 
      id: 6, 
      name: 'Gujarat', 
      members: 1900, 
      dojangs: 85, 
      champion: 'Master Jayesh Patel', 
      image: '/gujarat.jpg',
      unionName: 'Gujarat Taekwondo Committee',
      established: 2001,
      president: 'Mr. Amit Shah',
      headquarters: 'Ahmedabad',
      contact: 'gujarat.tkd@gmail.com',
      website: 'www.gujarattkd.org',
      color: 'from-violet-600 to-violet-800'
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const cardHover = {
    initial: { 
      y: 0,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    hover: { 
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const modalOverlay = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const modalContent = {
    initial: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    animate: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: { 
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Indian Taekwondo <span className="text-amber-600">State Associations</span>
          </motion.h1>
          <motion.p 
            className="mt-5 max-w-xl mx-auto text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Discover and connect with Taekwondo organizations across India
          </motion.p>
        </motion.div>

        {/* States Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {states.map((state) => (
            <motion.div
              key={state.id}
              variants={item}
              whileHover="hover"
              initial="initial"
              animate="show"
            >
              <motion.div
                variants={cardHover}
                className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer h-full border border-gray-100"
                onClick={() => setSelectedState(state)}
              >
                <div className={`h-48 bg-gradient-to-r ${state.color} flex items-center justify-center relative overflow-hidden`}>
                  <motion.span 
                    className="text-white text-2xl font-bold z-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {state.name}
                  </motion.span>
                  <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{state.unionName}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Members</span>
                      <span className="font-medium text-gray-900">{state.members.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Training Centers</span>
                      <span className="font-medium text-gray-900">{state.dojangs}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">State Champion</span>
                      <span className="font-medium text-gray-900">{state.champion.split(' ')[0] + ' ' + state.champion.split(' ')[1][0] + '.'}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal with AnimatePresence */}
        <AnimatePresence>
          {selectedState && (
            <motion.div 
              variants={modalOverlay}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed inset-0  bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedState(null)}
            >
              <motion.div 
                variants={modalContent}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <div className={`h-72 bg-gradient-to-r ${selectedState.color} flex items-center justify-center relative overflow-hidden`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-center z-10 px-4"
                    >
                      <h2 className="text-4xl font-bold text-white mb-2">{selectedState.name}</h2>
                      <p className="text-xl text-white opacity-90">{selectedState.unionName}</p>
                    </motion.div>
                    <motion.div 
                      className="absolute inset-0 bg-black bg-opacity-20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  </div>
                  <motion.button 
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                    onClick={() => setSelectedState(null)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
                
                <div className="p-8">
                  {/* Association Info */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-10"
                  >
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">Association Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Established</h4>
                          <p className="text-lg font-medium text-gray-900">{selectedState.established}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">President</h4>
                          <p className="text-lg font-medium text-gray-900">{selectedState.president}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Headquarters</h4>
                          <p className="text-lg font-medium text-gray-900">{selectedState.headquarters}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Contact</h4>
                          <p className="text-lg font-medium text-gray-900">{selectedState.contact}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Stats */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-10"
                  >
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">Statistics</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gray-50 p-4 rounded-xl text-center">
                        <p className="text-3xl font-bold text-amber-600">{selectedState.members.toLocaleString()}</p>
                        <p className="text-sm text-gray-500">Members</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl text-center">
                        <p className="text-3xl font-bold text-amber-600">{selectedState.dojangs}</p>
                        <p className="text-sm text-gray-500">Training Centers</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl text-center">
                        <p className="text-3xl font-bold text-amber-600">{Math.floor(selectedState.dojangs * 1.5)}</p>
                        <p className="text-sm text-gray-500">Certified Coaches</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl text-center">
                        <p className="text-3xl font-bold text-amber-600">{selectedState.dojangs + 5}</p>
                        <p className="text-sm text-gray-500">Annual Events</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Champion */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-10"
                  >
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">State Champion</h3>
                    <div className="flex items-center space-x-6 bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-2xl">
                      <div className="h-20 w-20 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold text-2xl">
                        {selectedState.champion.split(' ')[1][0]}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{selectedState.champion}</h4>
                        <p className="text-gray-600 mb-2">Current State Champion</p>
                        <div className="flex space-x-2">
                          <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">5th Dan Black Belt</span>
                          <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">National Medalist</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Events */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">Upcoming Events</h3>
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <motion.div 
                          key={item}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all"
                        >
                          <div>
                            <h4 className="font-medium text-gray-900">{selectedState.name} Taekwondo {item === 1 ? 'Championship' : item === 2 ? 'Open Tournament' : 'Youth Festival'}</h4>
                            <p className="text-sm text-gray-500">
                              {new Date(2023, 5, 10 + item).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}
                            </p>
                          </div>
                          <button className="px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-lg hover:bg-amber-700 transition-colors">
                            Register
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StateUnion;