import { Button, Stack, Box, Heading, ButtonGroup,IconButton } from "@chakra-ui/react" 
import { BrowserRouter, Route, Link } from "react-router-dom";
import { FcParallelTasks, FcInfo, FcAddressBook, FcDocument } from "react-icons/fc";

const urls = [
    {link:'service', icon:<FcParallelTasks/>},
    {link: 'about', icon:<FcInfo/>},
    {link: 'docs', icon:<FcDocument/>}, 
    // {link: 'contact', icon:<FcAddressBook/>}
]

const Action = () => (
    <>
        <Stack spacing={5} direction={'row'} position={'fixed'} right={0} top={0} m={5} zIndex={5}>
            { urls.map(
                (d) => <PageLinks link={d.link} icon={d.icon} />
            ) }
        </Stack>
    </>
)

const PageLinks = (props) => (
        <Link to={'/'+props.link}>
            <ButtonGroup isAttached>
            <Button> {props.link} </Button>
            <IconButton icon={props.icon} size={'md'}/>
            </ButtonGroup>
            {/* <Heading stroke={'1px solid black'}
                fontWeight={300}
                fontSize={{ base: '3xl', sm: '4xl', md: '25px' }}
                lineHeight={'110%'}
                fontFamily={'Maven Pro'}
                display={'flex'}>
                {props.link}
            </Heading> */}
        </Link>
)

export default Action