import { 
    Box, 
    Flex, 
    HStack, 
    Link, 
    IconButton, 
    Icon, 
    Text, 
    useDisclosure, 
    Button, 
    Stack, 
    useColorModeValue, 
    useColorMode, 
    Spacer
} from '@chakra-ui/react';

import { Link as ReactLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon} from '@chakra-ui/icons';

import { GiAtomicSlashes } from 'react-icons/gi';

const links = [

    {linkname: 'Anime Info', path: '/anime-info'},
    {linkname: 'ShoppingCart', path: '/cart'}
]

const NavLink = ({path, children}) => {
    return (
        <ReactLink
            to={path}
            px={2}
            py={2}
            rounded='md'
            _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700')}}
        >   
        {children}
        </ReactLink>
    )

}
const Navbar = () => {
    const { isOpen, onClose, onOpen } = useDisclosure(); //hamburger
    const { colorMode, toggleColorMode } = useColorMode(); //darlmode

    return (
        <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} minW='100vw'>
            <Flex h={16} alignItems='center' justifyContent='space-between'>
                
                <IconButton size='md' icon={isOpen ? <CloseIcon /> : <HamburgerIcon /> } display={{md: 'none'}} onClick={isOpen ? onClose: onOpen}/> 
            
                <HStack >
                    
                    <ReactLink to='/'>
                        <Flex alignItems='center' mr='6'>
                            <Icon as={GiAtomicSlashes} h={6} w={6} color="orange.400" />
                            <Text fontWeight="extrabold" ml='2'>Anime List API</Text>
                        </Flex>
                    </ReactLink>
                 
                    {/* <HStack spacing={4} display={{base: 'none', md: 'flex'}} >
                        {links.map((link)=>(
                            <NavLink path={link.path} key={link.linkname}>
                                {link.linkname}
                            </NavLink>
                        ))}
                    </HStack> */}
                </HStack>
                <Flex alignItems='center'>
                    <NavLink>
                        <Icon as={colorMode === 'light' ? MoonIcon : SunIcon } alignSelf='center' onClick={() => toggleColorMode()}/>
                    </NavLink>
                    <Button as={ReactLink} to='/login' p={2} fontSize='sm' fontWeight={400} variant='link'>
                        Sign In
                    </Button>
                    <Button as={ReactLink} to='/registration' m={2} fontSize='sm' fontWeight={400} _hover={{bg: 'orange.400'}} bg='orange.500' color='white' display={{base: 'none', md: 'inline-flex'}}>
                        Sign Up
                    </Button>
                </Flex>
            
            </Flex>
            {isOpen ? <Box pb={4} display={{md: 'none'}}>
                <Stack as='nav' spacing={4}>
                {/* {links.map((link)=>(
                    <NavLink path={link.path} key={link.linkname}>
                        {link.linkname}
                    </NavLink>
                ))} */}
                <NavLink path='/registration' key='sign up'>Sign Up</NavLink>
                </Stack>
                </Box> : null
            }
        </Box>
        </>
    )
}

export default Navbar