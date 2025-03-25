import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaHistory, FaUsers, FaTrophy, FaGlobeAsia, FaFlag } from 'react-icons/fa';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const historyTimeline = [
    {
      year: "1985",
      title: "Foundation",
      description: "ITU was established with the vision to promote Taekwondo across India."
    },
    {
      year: "1990",
      title: "First Nationals",
      description: "Organized the first national-level Taekwondo championship."
    },
    {
      year: "2000",
      title: "International Recognition",
      description: "Gained affiliation with World Taekwondo Federation."
    },
    {
      year: "2015",
      title: "30 Years Celebration",
      description: "Marked three decades of excellence in martial arts training."
    },
    {
      year: "2023",
      title: "Current Era",
      description: "Over 50,000 members across India with world-class facilities."
    }
  ];

  const ambitions = [
    {
      icon: <FaUsers className="text-4xl text-[#FF9933]" />,
      title: "Community Growth",
      description: "Expand our membership to 100,000 practitioners by 2030"
    },
    {
      icon: <FaTrophy className="text-4xl text-[#FFFFFF]" />,
      title: "Championship Goals",
      description: "Produce Olympic medalists in Taekwondo by 2028"
    },
    {
      icon: <FaGlobeAsia className="text-4xl text-[#138808]" />,
      title: "Global Presence",
      description: "Establish training centers in 10 countries by 2035"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#FF993311] via-[#FFFFFF11] to-[#13880811] pt-24 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Hero Section with Flag-inspired Header */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto text-center mb-16 relative"
      >
        {/* Flag color bars */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-full"></div>
        
        <motion.div 
  variants={itemVariants}
  className="mt-8 flex justify-center items-center mb-4 relative"
>
  {/* Saffron Flag */}
  <FaFlag className="text-4xl text-[#FF9933] mr-2" />
  
  {/* White Flag with Ashoka Chakra */}
  <div className="relative mr-2">
    <FaFlag className="text-4xl text-[#FFFFFF]" />
    {/* Ashoka Chakra */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-6 h-6 rounded-full border-2 border-[#000080] flex items-center justify-center">
        {/* 24 spokes - simplified version */}
        <div className="relative w-full h-full">
          {[...Array(24)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-[1px] h-3 bg-[#000080] origin-center"
              style={{
                transform: `rotate(${i * 15}deg) translateY(-4px)`,
                left: '49%',
                top: '25%'
              }}
            />
          ))}
          {/* Center dot */}
          <div className="absolute w-1 h-1 bg-[#000080] rounded-full" 
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        </div>
      </div>
    </div>
  </div>
  
  {/* Green Flag */}
  <FaFlag className="text-4xl text-[#138808]" />
</motion.div>
        
        <motion.h1 
          variants={itemVariants} 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF9933] via-[#0B2545] to-[#138808] bg-clip-text text-transparent mb-4"
        >
          About Indian Taekwondo Union
        </motion.h1>
        <motion.p 
          variants={itemVariants} 
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
        >
          Empowering individuals through martial arts since 1985. Our journey, values, and vision for the future.
        </motion.p>
      </motion.section>

      {/* Introduction with Flag-colored accent */}
      <motion.section 
        className="max-w-7xl mx-auto mb-20"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          variants={cardVariants} 
          className="bg-white rounded-xl shadow-lg p-8 md:p-10 border-t-4 border-[#FF9933]"
        >
          <h2 className="text-3xl font-bold text-[#0B2545] mb-6 relative">
            Our Mission
            <span className="absolute bottom-0 left-0 h-1 w-20 bg-[#138808] rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            The Indian Taekwondo Union (ITU) is dedicated to promoting and developing the sport of Taekwondo across India. 
            We strive to foster discipline, physical fitness, and mental strength while cultivating sportsmanship and respect.
          </p>
          <p className="text-lg text-gray-700">
            With over three decades of experience, we've trained thousands of athletes, many of whom have represented India 
            at international competitions, bringing pride to our nation.
          </p>
        </motion.div>
      </motion.section>

      {/* Our Ambitions with Flag-colored cards */}
      <motion.section 
        className="max-w-7xl mx-auto mb-20"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={cardVariants}>
          <h2 className="text-3xl font-bold text-[#0B2545] mb-10 text-center">
            Our Ambitions
            <div className="w-24 h-1 mx-auto mt-2 bg-gradient-to-r from-[#FF9933] via-[#0B2545] to-[#138808] rounded-full"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ambitions.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 ${
                  index === 0 ? 'bg-gradient-to-br from-[#FF993322] to-white' :
                  index === 1 ? 'bg-white border-2 border-[#0B2545]' :
                  'bg-gradient-to-br from-white to-[#13880822]'
                }`}
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  index === 0 ? 'text-[#FF9933]' :
                  index === 1 ? 'text-[#0B2545]' :
                  'text-[#138808]'
                }`}>
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* History of ITU with Flag-inspired timeline */}
      <motion.section 
        className="max-w-7xl mx-auto mb-20"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={cardVariants}>
          <h2 className="text-3xl font-bold text-[#0B2545] mb-10 text-center">
            History of ITU
            <div className="w-24 h-1 mx-auto mt-2 bg-gradient-to-r from-[#FF9933] via-[#0B2545] to-[#138808] rounded-full"></div>
          </h2>
          <div className="relative">
            {/* Timeline line with flag colors */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-[#FF9933] via-[#FFFFFF] to-[#138808] transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-8 md:space-y-16">
              {historyTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot with alternating flag colors */}
                  <div className={`hidden md:flex absolute left-1/2 h-5 w-5 rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 ${
                    index % 3 === 0 ? 'bg-[#FF9933]' :
                    index % 3 === 1 ? 'bg-[#FFFFFF] border-2 border-[#0B2545]' :
                    'bg-[#138808]'
                  }`}></div>
                  
                  {/* Content */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className={`bg-white p-6 rounded-xl shadow-lg border-t-2 ${
                      index % 3 === 0 ? 'border-[#FF9933]' :
                      index % 3 === 1 ? 'border-[#0B2545]' :
                      'border-[#138808]'
                    }`}>
                      <div className="flex items-center mb-2">
                        <FaHistory className={`mr-2 ${
                          index % 3 === 0 ? 'text-[#FF9933]' :
                          index % 3 === 1 ? 'text-[#0B2545]' :
                          'text-[#138808]'
                        }`} />
                        <span className={`font-bold ${
                          index % 3 === 0 ? 'text-[#FF9933]' :
                          index % 3 === 1 ? 'text-[#0B2545]' :
                          'text-[#138808]'
                        }`}>{item.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Values Section with Flag-inspired design */}
      <motion.section 
        className="max-w-7xl mx-auto"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          variants={cardVariants} 
          className="rounded-xl shadow-lg overflow-hidden"
        >
          <div className="h-2 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808]"></div>
          <div className="bg-[#0B2545] p-8 md:p-10 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Our Core Values
              <div className="w-24 h-1 mt-2 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] rounded-full"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  title: "Discipline", 
                  description: "Cultivating self-control and dedication in all practitioners",
                  color: "from-[#FF9933] to-[#FF993366]"
                },
                { 
                  title: "Respect", 
                  description: "Honoring traditions, instructors, and fellow students",
                  color: "from-[#FFFFFF] to-[#FFFFFF66]"
                },
                { 
                  title: "Excellence", 
                  description: "Striving for the highest standards in training and competition",
                  color: "from-[#138808] to-[#13880866]"
                },
                
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gradient-to-br ${value.color} p-5 rounded-lg`}
                >
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-200">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default About;