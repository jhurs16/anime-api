import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { getAnimeById } from '../api/gogoanime';
import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    Box,
    HStack,
    Wrap,
    WrapItem,
    Button,
    Center
    // useColorModeValue as ColorMode,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
import LoadingComp from './LoadingComp';
import NotFound from './NotFound';


  
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
const AnimeInfo = () => {
    const { animeId } = useParams()
  
    const { isLoading, data: apiData, error} = useQuery({
        queryKey: ['animedata'],
        queryFn: () => getAnimeById(animeId),
        refetchOnWindowFocus: false,
      })
 
    if(isLoading) return <LoadingComp/>
    if (error) return 'An error has occurred: ' + error.message


    if(!apiData.title) {
        return <NotFound/>
    }
 
    return (
        
       
      <Container maxW={'5xl'} py={12} minH='100vh'>
         
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4} p={2}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
            //   bg={ColorMode('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Anime Info
            </Text>

            <Heading>{apiData.title}</Heading>
            <Text color={'gray.500'} fontSize={'sm'}>
              <Box as='span' color='tomato'>Type:</Box> {apiData.type}
            </Text>
            <Text color={'gray.500'} fontSize={'sm'}>
              <Box as='span' color='tomato'>Plot Summary:</Box> {apiData.description}
            </Text>
            <Text color={'gray.500'} fontSize={'sm'}>
                <Box as='span' color='tomato' >
                    Genres: 
                </Box>
                {apiData.genres.map((data, idx)=> apiData.genres.length -1 === idx ? `${data} ` : ` ${data}, `)}
            </Text>
            <Text color={'gray.500'} fontSize={'sm'}>
              <Box as='span' color='tomato'>Released:</Box> {apiData.releaseDate}
            </Text>
            <Text color={'gray.500'} fontSize={'sm'}>
              <Box as='span' color='tomato'>Status:</Box> {apiData.status}
            </Text>
            <Text color={'gray.500'} fontSize={'sm'}>
              <Box as='span' color='tomato'>Other Name:</Box> {apiData.otherName ?  apiData.otherName : 'N/A'} 
            </Text>
            
                <Box as='span' color='tomato'>Episodes</Box>
                <Flex h='auto' flexWrap='wrap'>
                {
                    apiData.episodes.map((val)=>(
                        // <Box key={val.key}>{val.number}</Box>
                        <a style={{textDecoration: 'none'}} target='_blank' href={val.url} key={val.id}>
                        <Button   colorScheme='tomato' variant='outline' mt={2} ml={1} size='sm' _hover={{bg: 'orange', color: 'white', border: 'none'}}>
                            {val.number}
                        </Button>
                        </a>
                    ))
                }
                </Flex>
   
          </Stack>
          <Flex maxH={{ base: 'auto', md: '400px' }} maxW='auto'>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                apiData.image
              }
              objectFit={'cover'}
           
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }

  export default AnimeInfo;