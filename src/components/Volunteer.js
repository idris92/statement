import React from 'react'
import {Flex, Image, Text, Spacer, Box, Select, SimpleGrid, Button, Input, Divider} from '@chakra-ui/react'
import faithPng from '../assets/images/faith.png'

const Volunteer = () => {
    return (
        <Flex w='100%' overflow='hidden' rounded='24px'>
            <Flex w='50%' bg='darkgreen'  align='center'  >
                <Flex direction='column' gap={4} px={8}>
                    <Text fontSize='36px' fontWeight='600' color='white'>Become a Volunteer</Text>
                    <Text fontSize='20px' fontWeight='400' color='white'>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit.</Text>
                    <Box w='30%'>
                    <Button variant='action' fontSize='18px' fontWeight='500' p={8}>JOIN OUR TEAM</Button>
                    </Box>
                </Flex>
            </Flex>
                <Flex w='50%' borderBottomRightRadius='24px' borderTopRightRadius='24px'>
                <Image src={faithPng} alt='support' />
            </Flex>
        </Flex>
    )
}

export default Volunteer
