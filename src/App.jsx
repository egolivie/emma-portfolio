import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { ThemeProvider } from './contexts/theme';
import Home from './pages/Home';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <ChakraProvider>
      <ThemeProvider>
        <Router>
          <Box as="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/header" element={<Header />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/navbar" element={<Navbar />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Router>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
