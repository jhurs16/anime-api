import { useState, useEffect, memo } from 'react';
import { useQuery } from '@tanstack/react-query'
import { searchForTopAiring, searchForAnime } from '../api/gogoanime';
import { Center, Wrap, WrapItem, Flex, Box , Heading, Input, IconButton, FormControl, FormLabel} from '@chakra-ui/react';
// import { products } from '../products';
import {animedata} from '../animelist'
import AnimeCard from '../components/AnimeCard';
import { SearchIcon } from '@chakra-ui/icons';
import SearchForm from '../components/SearchForm';

import SearchData from '../components/SearchData';

const AnimeScreen = () => {
  
  

    
    
    // if(isLoadingData) return <p>Is Loading...</p>
    // if (apiDataSearchError) return 'An error has occurred: ' + apiDataSearchError.message
    

  const [search, setSearch] = useState()

  const { isLoading, data: apiData, error} = useQuery({
    queryKey: ['animelist'],
    queryFn: () => searchForTopAiring('/top-airing'),
    refetchOnWindowFocus: false,
  })

  if(isLoading) return <p>Is Loading...</p>
  if (error) return 'An error has occurred: ' + error.message


  const onSubmitData = async (search)=>{
    setSearch(search)
  }

  return (
    <>
    
    {/* data here */}

    <Flex minW='100vw' alignItems='center' justifyContent='center' mt={5} flexDirection='column'>
  
    <Center>
          
      <Heading color='tomato'>
        Top Airing
      </Heading>
         
    </Center>
        
    </Flex>
    <Wrap spacing='30px' justify='center' >
      
        {apiData.results.map((anime)=> (
            <WrapItem key={anime.id}>
                <Center w='250px' h='550px'>
                    { <AnimeCard anime={anime}/>}
                </Center>
            </WrapItem>
        ))}
    </Wrap>
    </>
  )
}

export default memo(AnimeScreen)