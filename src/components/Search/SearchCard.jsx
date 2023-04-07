import { Box, Button, Center, Flex, Stack, Text, useColorModeValue,Image } from "@chakra-ui/react"
import { memo } from "react"
import { animedata } from "../../animelist"
import { ArrowForwardIcon } from "@chakra-ui/icons"
const SearchCard = ({anime}) => {
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
          <Text>{anime.title}</Text>
         
         <Stack spacing='4px' direction='column'>
          
          <Text>Released : {anime.releaseDate}</Text>
          <Text>Sub: {anime.subOrDub}</Text>
        </Stack>
      
    
      <a style={{textDecoration: 'none'}} target='_blank' href={anime.url}>
      <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline' mt={2} ml={1} size='sm' 
        
      >
         More Info
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

export default memo(SearchCard)