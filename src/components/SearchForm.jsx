import { useState } from "react"
import { useQuery } from '@tanstack/react-query'
import { SearchIcon } from "@chakra-ui/icons"
import { Box, Button, Center, Flex, FormControl, FormLabel, Heading, IconButton, Input, Stack } from "@chakra-ui/react"
import { searchForAnime } from "../api/gogoanime"
import SearchData from "./SearchData"
import LoadingComp from "./LoadingComp"


const SearchForm = ({onSubmitData}) => {
    const [searchStr, setSearchStr] = useState()

      const { isLoading, data, error} = useQuery({
    queryKey: ['search', searchStr],
    queryFn: () => searchForAnime(searchStr),
    refetchOnWindowFocus: false,
    })
    
    const onSearchInputChange = (event)=>{
        setSearchStr(event.target.value)

    }
    const onSubmitDataOrig = async (e) => {

        e.preventDefault()
        
        const formData = new FormData(e.target);
        let datax = Object.fromEntries(formData);
        
        const orderDetails = {
        ...Object.fromEntries(formData)
        };
        setSearchStr(datax.searchname)
        // onSubmit(orderDetails);
        // onSubmitData(datax.searchname)
    }

    const sds = () => {
        if(isLoading){
            return <LoadingComp/>
        }
        if(error){
            return 
                <Flex minW='100vw' alignItems='center' justifyContent='center' mt={5} flexDirection='column'>
  
                <Center>
                        
                    <Heading color='tomato'>
                    Error ..
                    </Heading>
                    
                </Center>
                
            </Flex>
            
        }
        if (data){
            if (data.results.length > 0){
                
                return <SearchData data={data}/>
            }
        }
        return 
    }
  return (
    <Box>
        <Stack>
            <Flex w='full' alignItems='center' justifyContent='center' mt={5}  >
                <form onSubmit={onSubmitDataOrig}>
                    <FormControl display='flex' >
                  
                        {/* <Input type='search' onChange={onSearchInputChange} required/> */}
                        <Input type='search' name='searchname' required/>
                        <FormLabel>
                        <Button rightIcon={<SearchIcon />} colorScheme='blue' variant='outline' ml={2} type='submit'>
                            Search Anime
                        </Button>
                        </FormLabel>
                    </FormControl>
                </form>
            </Flex>
            <div>
                {
                sds()
                }
            </div>
        </Stack>
    </Box>
  )
}

export default SearchForm