// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { Box, ChakraProvider, Flex, HStack, Text } from '@chakra-ui/react';
//tanstack api client
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query' 
const queryClient = new QueryClient()

import AnimeInfo  from './components/AnimeInfo';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';



function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider >
        <HashRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/anime-info/:animeId" element={<AnimeInfo/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </HashRouter>
        
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
