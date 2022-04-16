import React, {useState} from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Flex, 
  Text
} from '@chakra-ui/react'

const DrawerComponent = ({open, close, home, about, contact, click}) => {
     const { isOpen, onOpen, onClose } = useDisclosure()
    const handleClose=()=>{
      close(false)
     
    }
    return (
        <>
      {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button> */}
      <Drawer
        isOpen={open && onOpen}
        placement='right'
        onClose={!open && onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg='darkgreen'>
          <DrawerCloseButton  onClick={handleClose}/>
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody pt={12}>
            <Flex color='white' align='center' fontSize='16px' fontWeight='500' gap={12} direction='column'>
                <Flex gap={8} direction='column'>
                      <Text onClick={home} cursor='pointer'>Home</Text>
                    <Text onClick={about} cursor='pointer'>About</Text>
                    <Text onClick={contact} cursor='pointer'>Contact</Text>
                </Flex>
                <Button variant='action' p={6} onClick={click}>DONATE</Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
    )
}

export default DrawerComponent
