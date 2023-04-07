import { Box, Flex, Center, Text, Heading } from "@chakra-ui/react"

const NotFound = () => {
  return (
    <Box>
        <Flex minH='100vh' minW='100vw' alignItems='center' justifyContent='center'>
            <Center>
                <Heading color='white'> 
                    
                   404 not found.
                </Heading>
            </Center>
        </Flex>
    </Box>
  )
}

export default NotFound;