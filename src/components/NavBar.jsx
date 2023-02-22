import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const NavBar = () => { 
  return (
    <nav>
        <Container maxW="150rem" bg="green.100" color="black">
        <Flex alignItems="center" gap="2">
          <Image
              borderRadius='full'
              boxSize='150px'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHXYPU_sdxMKWtJC0T0AR2oFnkXR4JsFMdhdMa3AVqljJIt9Td--EmMROsBlNKLLzRt94&usqp=CAU'
              alt='logo los almendros'
            />
          <Box p="10" w="300px" h="100">
            <Heading size="md">
            <Link to={"/"}><h1 className="titulo">Tienda online saludable</h1> 
            <h2 className="subtitulo">Envíos a todo el país, Argentina</h2> </Link>
            </Heading>
          </Box>
          <Spacer />
          <Box>

        <Menu>
        <Link to={"/catalogue"}> 
        <Button colorScheme='gray' variant='solid'm="5">
    Productos
        </Button>        
        </Link>

        <MenuButton as={Button} rightIcon={<ChevronDownIcon m="5"/>}>
    Categorías 
          </MenuButton>
          <MenuList>
          <Link to={`/category/${"Frutos secos y deshidratados"}`}>
            <MenuItem>Frutos secos y deshidratados</MenuItem>
            </Link>
          
          <Link to={`/category/${"Cereales"}`}> 
            <MenuItem>Cereales</MenuItem>
          </Link>

          <Link to={`/category/${"Semillas"}`}> 
            <MenuItem>Semillas</MenuItem>
          </Link>
          </MenuList>
        </Menu>

        <CartWidget />
      
        </Box>
       <Spacer />
      </Flex>
    </Container>
    </nav>
  );
};

export default NavBar