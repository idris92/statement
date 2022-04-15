import React from 'react'
import {Flex, Image, Text, Spacer, Box, Select, SimpleGrid, Button, Input} from '@chakra-ui/react'

const Donate = () => {
    return (
        <Flex gap={12} >
            <Flex w='50%' py='80px' direction='column' gap={4}>
                        <Text fontSize='70px' fontWeight='700'>Support our Mission</Text>
                        <Text fontSize='18px' fontWeight='400' color='darkgreen'>Thank you for your support! We are working every day to make investments in grassroot infrastructure so that we can secure our futures in the years to come. But none of that work is possible without your support. </Text>
                        <Text fontSize='18px' fontWeight='400'  color='darkgreen'>Join us to help take the Mission further!</Text>
                    </Flex>
                    <Flex direction='column' bg='white' rounded='24px' p={12} w='50%'>
                        <Flex >
                            <Flex display='column' gap={4}>
                                <Text fontSize='24px' fontWeight='600' color='darkgreen' w='70%'>Choose an amount:</Text>
                                <Text fontSize='18px' fontWeight='400' color='disable' w='90%' >How much do you want to donate to this campaign?</Text>
                            </Flex>
                            <Spacer/>
                            <Select placeholder='Naira' w='30%'>
                                <option value='option1'>US Dollar</option>
                                <option value='option2'>Nigerian Naira</option>
                                <option value='option3'>Ghanian Cedi</option>
                            </Select>
                        </Flex>
                        <SimpleGrid columns={3} spacing={4} py={8}>
                            <Button variant='outline' fontSize='15px' fontWeight='500' color='darkgreen'>#5000</Button>
                            <Button variant='outline'fontSize='15px' fontWeight='500' color='darkgreen'>#10000</Button>
                            <Button variant='outline'fontSize='15px' fontWeight='500' color='darkgreen'>#50000</Button>
                            <Button variant='outline'fontSize='15px' fontWeight='500' color='darkgreen'>#100,000</Button>
                            <Button variant='outline'fontSize='15px' fontWeight='500' color='darkgreen'>#500,000</Button>
                            <Button variant='outline'fontSize='15px' fontWeight='500' color='darkgreen'>#1,000, 000</Button>
                        </SimpleGrid>
                        <Flex direction='column' py={2} gap={1}>
                        <Input placeholder='# Enter Amount' color='darkgreen' fontSize='16px' fontWeight='400'/>
                        <Text as='span' fontSize='14px' fontWeight='400' color='darkgreen'>Minimum amount is ₦2,000</Text>
                        </Flex>
                        <Flex direction='column' py={2} gap={1}>
                             <Text as='span' fontSize='14px' fontWeight='400' color='darkgreen'>Email Address:</Text>
                              <Input placeholder='Enter your email address' color='darkgreen' fontSize='16px' fontWeight='400'/>
                        </Flex>
                        <Flex py={4} w='100%'>
                        <Button variant='action' color='white' py={8}  fontSize='18px' fontWeight='500' w='100%'>DONATE NOW</Button>
                       </Flex>
                       <Flex direction='column' py={2} bgColor='#F7F7F7' rounded='10px' px={4}>
                            <Text color='believe' fontSize='12px' fontWeight='600'>Back it because you believe in it.</Text>
                            <Text color='support' fontSize='12px' fontWeight='400'>Support our Campaign for no reward, just because it speaks to you.</Text>
                       </Flex>
                    </Flex>
        </Flex>
    )
}

export default Donate
