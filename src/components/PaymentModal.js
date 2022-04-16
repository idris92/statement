import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { BsCheckCircleFill } from "react-icons/bs";


function PaymentModal({ isOpen, onOpen, onClose,pay}) {
 const handlePay=(e,pay)=>{
   console.log({e,pay})
    pay(true)
  }
  return (
    <Modal size="lg" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton color="#1E363F" bg="#E5E5E5" rounded="50%" />

        <ModalBody mt="50px" px={{base: "15px", md:"30px"}}>
         
            <Button mt={4} variant='action' color='white' py={{base: 6, md:8}}  fontSize='18px' fontWeight='500' w='100%' onClick={(e)=>handlePay(e,pay)} >DONATE (LOCAL)</Button>
            <Button  mt={4} variant='action' color='white' py={{base: 6, md:8}}  fontSize='18px' fontWeight='500' w='100%' >DONATE (INTERNATIONAL)</Button>
            <Button  mt={4} mb={6} variant='action' color='white' py={{base: 6, md:8}}  fontSize='18px' fontWeight='500' w='100%' >DONATE VIA BANK TRANSFER</Button>
           
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default PaymentModal;
