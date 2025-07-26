import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from './contexts/theme'; 
import EmotionCacheProvider from './utils/EmotionCacheProvider'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <EmotionCacheProvider>
      <ChakraProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ChakraProvider>
    </EmotionCacheProvider>
  </React.StrictMode>
);

