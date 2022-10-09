import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select,
    HStack,
    Textarea,
    Input
  } from '@chakra-ui/react'

export const Form = () => (
    <FormControl>
        <HStack m={1}>
            <Input mr={1} type='email' placeholder={'email...'}/>
            <Input ml={1} type='name' placeholder={'name...'} />
        </HStack>
        <Select placeholder='Project type' m={1}>
            <option>ERC-721</option>
            <option>ERC-20</option>
            <option>Type3</option>
            <option>Type4</option>
        </Select>
        <Textarea m={1} placeholder='Briefly describe your smart contract' />
    </FormControl>
)