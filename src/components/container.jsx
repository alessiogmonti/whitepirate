import { Box, Center } from "@chakra-ui/react"

export const Container = ({children}) => (
    <Box width={'60vw'} height={'100vh'} rounded='md' borderColor={'blue.200'} borderWidth={'1px'} bg={'whiteAlpha.300'} zIndex={5} display={'fixed'}>
            <Box width={'100%'} margin={'auto'}>
                {children}
            </Box>
    </Box>
)