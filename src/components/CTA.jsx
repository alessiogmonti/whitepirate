import { Container, Stack, Heading, Text } from "@chakra-ui/react"
export const CTA = () => (
    <Container zIndex={1} position="fixed" margin={10} mt={60} >
        <Stack
          textAlign={'left'}
          align={'left'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 8 }}
          width={'100vw'}>
          <Heading
            stroke={'1px solid black'}
            color={'black.500'}
            fontWeight={300}
            fontSize={{ base: '3xl', sm: '4xl', md: '70px' }}
            lineHeight={'110%'}
            display={'flex'}
            width={'60%'}
            >
            Ethereum Smart Contract Audits & Blockchain Security
          </Heading>
          <Text width={'50%'}
          position={'relative'} as={'span'} color={'blue.300'} fontSize={'20px'}
          >
            White Pirates are the pioneers of blockchain development, 
            security was always on the top of our heads as the most critical aspect of blockchain space. 
            Our audit solutions ensure top security for the startups 
            to comprehensive blockchain applications on Ethereum.
            </Text>
        </Stack>
    </Container>
)