
import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    Button,
    Tooltip,
    Stack,
    Link,
    HStack,
    Text,
    Center,

   
  } from '@chakra-ui/react';

  import { Link as ReactLink } from 'react-router-dom';
  import { StarIcon, ArrowForwardIcon, ArrowRightIcon } from '@chakra-ui/icons';


  const AnimeCard = ({anime}) => {
    return (
      <Stack 
        p='2' 
        spacing='3px' 
        bg={useColorModeValue('white', 'gray.800')} 
        minW='240px' 
        h='auto' 
        borderWidth='1px' 
        rounded='lg' 
        shadow='lg' 
        >
     
        <Image src={anime.image} alt={anime.id} roundedTop='lg'/>

        <Box flex='1' alignItems='baseline' flexDirection='column'>
          <Center>{anime.title}</Center>
         
         <Stack spacing='4px' direction='row'>
          
          <Box spacing='4px'>
          {anime.genres.map((val) =>{
              return <Badge bg='yellow.400' color='black' m='1' key={val}>{val}</Badge>
          })
          
          }
          </Box>
          
      </Stack>
      <ReactLink to={`/anime-info/${anime.id}`} target="_blank" rel='noreferrer'>
      <Button rightIcon={<ArrowRightIcon />}  mt={2} ml={1} size='sm' variant='ghost' _hover={{ bg: 'none' }}>
          More Info
      </Button>
      </ReactLink>
    
      <a style={{textDecoration: 'none'}} target='_blank' href={anime.url}>
      <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline' mt={2} ml={1} size='sm' 
        
      >
        Watch Now
      </Button>
      </a>
     
      </Box>
       
      <Flex mt='1' justifyContent='space-between' alignContent='center'>

      </Flex>
      <Flex justifyContent='space-between' alignContent='center' py='2'>

      </Flex>
 
      </Stack>
    )
  }
  
  export default AnimeCard