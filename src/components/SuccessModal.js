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
import check from "../assets/images/check.png"


function SuccessModal({ isOpen, onOpen, onClose }) {
  return (
    <Modal size="lg" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton color="#1E363F" bg="#E5E5E5" rounded="50%" />

        <ModalBody mt="50px" px={{base: "15px", md:"30px"}}>
          <Stack mb="20px" alignItems="center">
              <Image w="61px" src={check} />
            {/* <BsCheckCircleFill color="#1DC071" size="60px" /> */}
          </Stack>
          <Box px={{base: "10px", md:"55px"}} >
            <Text
              textAlign="center"
              fontFamily="Inter"
              fontSize={{base: "30px", md:"32px"}}
              fontWeight="600"
              color="#171725"
              mb="20px"
            >
              Thanks for you Support!
            </Text>
            <Text
              textAlign="center"
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="#808191"
              mb="25px"
              lineHeight="line-height: 22px;"
            >
              Thank you so much for your support. We are so grateful to have you
              with us on the Journey to a Greater Nigeria
            </Text>
            <Box mb="40px" w="100%" mt="32px">
              <Button
                py="26px"
                size="lg"
                _hover={{ bg: "#1BB66E" }}
                w="100%"
                color="#FFFFFF"
                bg="#1BB66E"
              >
                DONE
              </Button>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SuccessModal;
