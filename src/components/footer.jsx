import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    IconButton,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
import { FaTelegram, FaTwitter, FaMedium } from 'react-icons/fa';
import { Link } from 'react-router-dom';
  
  const SocialButton = ({
    children,
    label,
    href }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'blackAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
    <Box position={'fixed'} width={'100vw'} height={'100%'} bottom={0} zIndex={1} pointerEvents={'none'}>
      <Stack direction={'row'} mt={5} ml={5}>
      <Box
      bg={'whiteAlpha.700'}
        border={'0.5px solid'}
        borderColor={'rgba(22,10,2,0.5)'}
        position="absolute"
        bottom={0}
        rounded={'full'}
        m={5}
        right={0}
        zIndex={2}>
          <Container
            as={Stack}
            py={0}
            direction={{ base: 'column', md: 'row' }}
            spacing={2}
            justify={{ base: 'top', md: 'space-between' }}
            align={{ base: 'top', md: 'top' }}>
            <Text color='black' fontWeight={'heavy'} fontSize={'12px'}> 
                © 2022 &nbsp;
              <Link to="/">
                  White Pirate &nbsp;
              </Link> 
                  all rights reserved.</Text>
          </Container>
      </Box>
        <Box bg={'whiteAlpha.200'}
        border={'1px solid'}
        borderColor={'rgba(22,10,2,0.5)'}
        rounded={'md'}
        zIndex={5} pointerEvents={'all'}>
          <Stack direction={'row'} spacing={6} justify={'top'} align={'top'}>
            <IconButton label={'Twitter'} variant={'social'} href={'#'} icon={<FaTwitter fontSize={'25px'} />} color='green.300' _hover={{color:'blue.200'}}/>
            <IconButton label={'Medium'} variant={'social'} href={'#'} icon={<FaMedium fontSize={'25px'} />} color='green.300' _hover={{color:'blue.200'}}/>
            <IconButton label={'Telegram'} variant={'social'} href={'#'} icon={<FaTelegram fontSize={'25px'} />} color='green.300' _hover={{color:'blue.200'}}/>
          </Stack>
        </Box>
      </Stack>
    </Box>
    );
  }