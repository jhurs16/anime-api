

import HeroSection from '../components/HeroSection'

import AnimeScreen from '../screens/AnimeScreen'
import { useQuery } from '@chakra-ui/react'
import SearchForm from '../components/SearchForm'



const Home = () => {
  
  return (
    <>
    <HeroSection/>
    
    {/* <Full/> */}
    <SearchForm/>
    <AnimeScreen/>
    
    </>
  )
}

export default Home