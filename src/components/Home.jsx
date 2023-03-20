import { Heading, Center, Box, Image } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="home-container">
      <Center bg="green.200" h="100px" color="black">
        <Heading as="h2" size="2xl"> Los Almendros • Frutos secos
        </Heading>
      </Center>  

      <Center>
        <Box boxSize="xl">
          <Image
            src="https://images.ecestaticos.com/gaQuWP9gDTMFWoiZrPZVKP_EyWo=/0x110:2119x1300/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fbef%2Fe7a%2Fc66%2Fbefe7ac66501753b6524e29e7d896e0b.jpg"
            alt="frutos secos"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Home;

 