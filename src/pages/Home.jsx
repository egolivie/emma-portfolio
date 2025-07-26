import React, { useState, useEffect, useRef } from 'react';
import uniqid from 'uniqid';
import ProjectContainer from '../components/ProjectContainer/ProjectContainer';
import projects from '../portfolio';
import './Home.css';
import { Box } from '@chakra-ui/react';
import Projects from '../components/Projects/Projects';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import { FaLinkedin, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { projectMedia } from '../portfolio';

const mainImage = projectMedia.find(item => item.title === 'Main home image');
const aboutImage = projectMedia.find(item => item.title === 'About Me');

const Home = () => {
  const hero = {
    position: 'relative',
    backgroundImage: `url(${mainImage?.media || ''})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '60vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    textAlign: 'center',
    paddingTop: '10rem',
  };

  const projectsRef = useRef(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShowPrompt(true);
          observer.unobserve(projectsRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const handleYesClick = () => {
    setShowPrompt(false);
    setShowGallery(true);
  };

  const handleNoClick = () => {
    setShowPrompt(false);
    alert('Ok, happy scrolling!');
  };

  const closeGallery = () => {
    setShowGallery(false);
    setSelectedImageIndex(null);
  };

  const handleImageClick = (index) => {
    if (projectMedia[index].type === 'image') {
      setSelectedImageIndex(index);
    }
  };

  const handlePrevious = () => {
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : projectMedia.length - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev < projectMedia.length - 1 ? prev + 1 : 0));
  };

  const galleryMedia = projectMedia.filter(
    (item) =>
      item.title !== 'Main home image' &&
      item.title !== 'About Me'
  );

  return (
    <>
      <div className="page-wrapper">
        <Header />
        <Box as="section" className="hero" style={hero}>
          <Box maxW="800px" px={{ base: '2rem', md: '3rem' }} textAlign="center">
            <Box
              fontFamily="'Luckiest Guy', cursive"
              color="#5c445a"
              fontSize={{ base: '1.4rem', md: '1.6rem', lg: '2rem' }}
            >
              Welcome!
            </Box>
            <Box
              fontFamily="'Bungee', sans-serif"
              fontSize={{ base: '0.9rem', md: '1rem' }}
              mt="0.5rem"
              fontWeight="400"
              color="#706f6f"
            >
              Software Engineer
            </Box>
            <Box
              fontFamily="'Bungee', sans-serif"
              fontSize={{ base: '0.7rem', md: '0.8rem' }}
              mt="0.5rem"
              fontWeight="200"
              color="#706f6f"
            >
              Frontend | FullStack
            </Box>
            <div className="resume-linkedin-wrapper">
              <a href="/EO_Resume_2025.pdf" className="resume-btn" role="button" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
              <a
                href="https://www.linkedin.com/in/emma-olivier-010227230"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-icon"
              >
                <FaLinkedin />
              </a>
            </div>
          </Box>
        </Box>
        <Box as="section" className="about-section">
          <h2 className="section__title">About Me</h2>
          <div className="about-container">
            <div className="about-text">
              <div className="about-photo-circle">
                {aboutImage && (
                  <img src={aboutImage.media} alt={aboutImage.title} />
                )}
              </div>
              <p>
                I’m a <strong>full-stack developer</strong> with a strong passion for front-end design and user experience. At Bayes Studio, I worked as a full-stack engineer on a wildfire detection admin panel—helping ensure critical data is accessible when it matters most. I also developed a custom hotel website, combining UI enhancements and SEO improvements with back-end functionality tailored to the client’s needs. I work with <strong>React</strong>, <strong>Next.js</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>Java</strong>, and <strong>Python</strong>, and I love collaborating on features that feel intuitive and impactful. I usually have my dogs curled up beside me while I code. I’m excited to join a team where I can keep learning, contribute across the stack, and help build tools that truly make a difference. <span className="about-paw" style={{ marginLeft: '0.5rem' }}>🐾</span>
              </p>
            </div>
          </div>
        </Box>
        <div ref={projectsRef}>
          <Box as="section" py="2rem">
            <Projects />
          </Box>
        </div>
        <Box as="section" py="2rem">
          <Skills />
        </Box>
        <Box as="section" py="2rem">
          <Contact />
        </Box>
      </div>
      {showPrompt && (
        <motion.div
          className="prompt-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="prompt-box">
            <p>Ready to see my projects?</p>
            <div>
              <button onClick={handleYesClick}>Yes</button>
              <button onClick={handleNoClick}>No</button>
            </div>
          </div>
        </motion.div>
      )}

      {showGallery && (
        <motion.div
          className="gallery-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="gallery-box">
            <button onClick={closeGallery} className="close-btn" aria-label="Close">
              <FaTimes />
            </button>
            <div className="gallery-content">
              {galleryMedia.map((item, index) => (
                item.type === 'video' ? (
                  <ReactPlayer
                    key={item.id}
                    url={item.media}
                    width="300px"
                    height="200px"
                    playing={true}
                    muted={true}
                    loop={true}
                  />
                ) : (
                  <img
                    key={item.id}
                    src={item.media}
                    alt={item.title}
                    style={{ width: '300px', height: '200px', objectFit: 'cover', cursor: 'pointer' }}
                    onClick={() => setSelectedImageIndex(index)}
                  />
                )
              ))}
            </div>
            {selectedImageIndex !== null && projectMedia[selectedImageIndex].type === 'image' && (
              <motion.div
                className="enlarged-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button onClick={handlePrevious} className="nav-arrow left"><FaArrowLeft /></button>
                <img
                  src={projectMedia[selectedImageIndex].media}
                  alt={projectMedia[selectedImageIndex].title}
                  className="enlarged-image"
                />
                <button onClick={handleNext} className="nav-arrow right"><FaArrowRight /></button>
                <button onClick={() => setSelectedImageIndex(null)} className="close-enlarged">Close</button>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Home;
