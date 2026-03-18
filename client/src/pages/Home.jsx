import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, Users, BookOpen, Award, ArrowRight } from 'lucide-react';
import { motion, useInView, useSpring, useMotionValue, useTransform } from 'framer-motion';

// --- Custom Animated Counter Component ---
// Replaces react-countup to avoid dependency issues
const AnimatedCounter = ({ value, suffix = '', duration = 2.5 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const rounded = useTransform(springValue, (latest) => Math.floor(latest));
  
  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  // Render the motion value manually to avoid React re-render overhead on every frame
  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest + suffix;
      }
    });
  }, [rounded, suffix]);

  return <span ref={ref} />;
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- Data Updates ---
  const slides = [
    {
      // CHANGED: Updated to local path
      image: '/assets/ce/groupphoto2.jpeg', 
      title: 'Excellence in Civil Engineering Education',
      subtitle: 'Shaping the future of infrastructure and sustainable development',
      cta: 'Explore Programs',
      link: '/academics'
    },
    {
      // CHANGED: Updated to local path
      image: '/assets/ce/groupphoto.jpeg',
      title: 'Specialized Engineering Areas',
      subtitle: 'Five core specializations with advanced facilities and research',
      cta: 'View Specializations',
      link: '/specializations'
    },
    {
      // CHANGED: Updated to local path
      image: '/assets/ce/departmentoffice.jpeg',
      title: 'Our Academic Community',
      subtitle: 'Meet our faculty, staff, and students who make up our vibrant community',
      cta: 'Meet Our People',
      link: '/people'
    }
  ];

  const stats = [
    // CHANGED: Faculty to 17, Years to 10+
    { icon: Users, label: 'Faculty Members', value: 17, suffix: '' },
    { icon: BookOpen, label: 'Research Projects', value: 200, suffix: '+' },
    { icon: Award, label: 'Publications', value: 1000, suffix: '+' },
    { icon: Calendar, label: 'Years of Excellence', value: 10, suffix: '+' }
  ];

  // CHANGED: Real data from IIT Indore Civil Engineering News
  const news = [
    {
      date: '2025-11-26',
      title: 'ANRF Financial Assistance for International Symposium',
      excerpt: 'Mr. Vikas Rawat receives financial assistance from ANRF for participating in the International Symposium on Land Reclamation in Singapore.'
    },
    {
      date: '2025-12-06',
      title: '𝐈𝐧𝐚𝐮𝐠𝐮𝐫𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐭𝐡𝐞 𝐁𝐈𝐒 𝐒𝐭𝐮𝐝𝐞𝐧𝐭 𝐂𝐡𝐚𝐩𝐭𝐞𝐫 (𝐒𝐂-𝟏𝟏𝟐𝟖𝟑)',
      excerpt: 'IIT Indore is 𝐝𝐞𝐥𝐢𝐠𝐡𝐭𝐞𝐝 to announce the inauguration of the 𝐁𝐮𝐫𝐞𝐚𝐮 𝐨𝐟 𝐈𝐧𝐝𝐢𝐚𝐧 𝐒𝐭𝐚𝐧𝐝𝐚𝐫𝐝𝐬 (𝐁𝐈𝐒) 𝐒𝐭𝐮𝐝𝐞𝐧𝐭 𝐂𝐡𝐚𝐩𝐭𝐞𝐫 (𝐒𝐂-𝟏𝟏𝟐𝟖𝟑) in the Department of Civil Engineering. he launch featured an insightful workshop on 𝐒𝐭𝐚𝐧𝐝𝐚𝐫𝐝𝐢𝐳𝐚𝐭𝐢𝐨𝐧 𝐢𝐧 𝐂𝐢𝐯𝐢𝐥 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫𝐢𝐧𝐠 𝐟𝐨𝐫 𝐑𝐞𝐬𝐢𝐥𝐢𝐞𝐧𝐭 𝐈𝐧𝐟𝐫𝐚𝐬𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞, conducted under the aegis of BIS.',
      link: 'https://www.linkedin.com/posts/ced-outreach-iit-indore-a51575390_civilengineering-bis-bureauofindianstandards-activity-7402743045588279296-oVRU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC4ENpUBAjdryz1Wdz50rJf3Sm4YnBT4nM8',
    },
    {
      date: '2024-03-15', 
      title: 'Himalayan Glaciology Research Featured in Mongabay',
      excerpt: 'Research on western Himalayan glaciers reacting to climate change by Dr. Mohd Farooq Azam\'s team featured in Mongabay magazine.'
    },
     {
      date: '2024-02-20',
      title: 'Research Featured in Media: Soil and Rocks of MP',
      excerpt: 'Research work of Dr. Lalit Borana and his group on "Soil and Rocks of Madhyapradesh" has been featured in Hindi and English Media.'
    },
    {
      date: '2023-11-15',
      title: 'Prof. Biswajeet Pradhan Listed as Highly Cited Researcher',
      excerpt: 'Adjunct Professor Prof. Biswajeet Pradhan listed as one of the highly Cited Researchers announced by Clarivate Analytics.'
    },
    {
      date: '2023-10-24',
      title: 'PhD Admission Advertisement',
      excerpt: 'Last Date of Online Application: October 24, 2023.'
    },
     {
      date: '2023-09-01',
      title: 'Appointment to NEAT Expert Committee',
      excerpt: 'Prof. Sandeep Chaudhary appointed as an Independent Expert Committee member for the National Educational Alliance for Technology (NEAT).'
    },
    {
      date: '2020-12-15',
      title: 'Editor’s Choice Papers Award-2020',
      excerpt: 'Mr. M. Johnson Singh received the prestigious Editor’s Choice Papers Award from the International Journal of Geosynthetics and Ground Engineering.'
    },
    {
      date: '2020-07-10',
      title: 'Ph.D. Openings in Transportation Engineering',
      excerpt: 'Immediate openings for Ph.D. in Transportation Engineering Specialization. Application Deadline: 10 July 2020.'
    },
    {
      date: '2020-01-20',
      title: 'Executive Member of Indian Society of Engineering Geology',
      excerpt: 'Dr. Neelima Satyam elected as Executive member of Indian Society of Engineering Geology (ISEG) for the term 2020-2021.'
    },
    {
      date: '2019-12-15',
      title: 'Best Poster Award at International Conference',
      excerpt: 'Mr. Vikas Poonia awarded the best poster award in International Conference of "Recent Advance in Life Science" held at Indore.'
    }
  ];

  // --- Duplicated news array for the infinite scroll marquee ---
  const duplicatedNews = [...news, ...news];

  // --- Carousel Logic ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // --- Animation Variants ---
  const heroTextContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const heroTextItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // --- Refs for scroll-triggered animations ---
  const statsRef = useRef(null);
  const welcomeRef = useRef(null);
  const newsHeaderRef = useRef(null);
  const ctaRef = useRef(null);

  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const welcomeInView = useInView(welcomeRef, { once: true, amount: 0.3 });
  const newsHeaderInView = useInView(newsHeaderRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });


  return (
    <div className="bg-white">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                // Note: Ensure these images exist in your public/assets folder
                backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.7), rgba(59, 130, 246, 0.7)), url(${slide.image})`
              }}
            />
            <div className="relative h-full flex items-center justify-center">
              
              <motion.div
                key={currentSlide}
                className="text-center text-white max-w-4xl mx-auto px-4"
                variants={heroTextContainerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                  variants={heroTextItemVariants}
                >
                  {slide.title}
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed"
                  variants={heroTextItemVariants}
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div variants={heroTextItemVariants}>
                  <Link
                    to={slide.link}
                    className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <span>{slide.cta}</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-amber-500 scale-125' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300 transform">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-blue-800 mb-2">
                  {/* Replaced external CountUp with local AnimatedCounter */}
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* News and Updates */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            ref={newsHeaderRef}
            initial={{ opacity: 0, y: 20 }}
            animate={newsHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest developments, achievements, and announcements from our department
            </p>
          </motion.div>

          {/* Marquee/Slider Implementation */}
          <div className="w-full relative">
            
            {/* Gradient Fades - Enhanced visibility */}
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none" />
            
            {/* THE FIX: 
                1. Added 'w-max' to ensure the div is as wide as its content.
                2. Slower duration (40s) for readability.
                3. Exact -50% translation.
            */}
            <div className="overflow-hidden flex">
              <motion.div
                className="flex gap-8 w-max"
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{
                  ease: "linear",
                  duration: 80, // Adjusted speed: Higher number = Slower
                  repeat: Infinity,
                }}
                whileHover={{ animationPlayState: "paused" }}
                onHoverStart={(e) => {}} // Optional: Can add pause logic here if needed
                onHoverEnd={(e) => {}}
                // This makes the pause work using CSS on hover
                style={{ 
                   // This ensures the animation stops instantly on hover if framer's whileHover has lag
                   cursor: "pointer" 
                }}
              >
                {/* We render the duplicate list. 
                    Because the container is w-max, it fits all items side by side.
                    Moving -50% moves exactly one full set length. 
                */}
                {duplicatedNews.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden w-96 flex-shrink-0 border border-gray-100"
                  >
                    <div className="p-6 flex flex-col h-full">
                      <div className="text-sm text-amber-600 font-medium mb-2">
                        {new Date(item.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 h-14">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-3 leading-relaxed flex-grow">
                        {item.excerpt}
                      </p>
                      <button className="mt-4 text-blue-800 hover:text-amber-600 font-medium inline-flex items-center space-x-1 transition-colors group/link self-start">
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/events"
                className="inline-flex items-center space-x-2 bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
              >
                <span>View All Events</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Welcome Section */}
      <section className="py-20 bg-white overflow-hidden" ref={welcomeRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={welcomeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome to Civil Engineering Department
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Department of Civil Engineering at IIT Indore is committed to excellence in education, 
                research, and service. We offer comprehensive programs that prepare students for leadership 
                roles in the rapidly evolving field of civil engineering.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our department focuses on sustainable infrastructure development, advanced construction 
                technologies, and innovative solutions for modern engineering challenges. With state-of-the-art 
                facilities and renowned faculty, we provide an environment that fosters learning, research, and innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/about"
                    className="block bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
                  >
                    Learn More About Us
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/specializations"
                    className="block bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
                  >
                    View Specializations
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={welcomeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Ensure this image path is also correct or use a local placeholder if needed */}
              <img
                src="https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Civil Engineering"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600" ref={ctaRef}>
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join us in shaping the infrastructure of tomorrow. Explore our programs, 
            research opportunities, and become part of the IIT Indore Civil Engineering legacy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/academics"
                className="block bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Explore Programs
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/specializations"
                className="block bg-white hover:bg-gray-100 text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"
              >
                View Specializations
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="block bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;