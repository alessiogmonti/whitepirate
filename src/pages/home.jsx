import { Box } from "@chakra-ui/react"
import Action from "../components/actions"
import { CTA } from "../components/CTA"

const Home = () => (
  <Box margin={'auto'} width={'100vw'} height={'100vh'} position={'absolute'}>
    <CTA />
    <Action />
  </Box>
) 
export default Home