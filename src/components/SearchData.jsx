import { Box, Center, Flex, Heading, Wrap, WrapItem } from "@chakra-ui/react"
import SearchCard from "./Search/SearchCard"



const SearchData = ({data}) => {

  return (
    <>
        <Flex minW='100vw' alignItems='center' justifyContent='center' mt={5} flexDirection='column'>
  
            <Center>
                    
                <Heading color='tomato'>
                Search Result
                </Heading>
                
            </Center>
            
        </Flex>
        <Wrap spacing='30px' justify='center' >
      
            {data.results.map((anime)=> (
                <WrapItem key={anime.id}>
                    <Center w='250px' h='550px'>
                        { <SearchCard anime={anime}/>}
                    </Center>
                </WrapItem>
            ))}
        </Wrap>
        <Flex minW='100vw' alignItems='center' justifyContent='center' mt={5} flexDirection='column'>
  
            <Center>

                -- End of Result ---

            </Center>
            
        </Flex>
    </>
  )
}

export default SearchData