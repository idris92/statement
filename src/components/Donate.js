import React from "react";
import {
  Flex,
  Text,
  Spacer,
  Select,
  SimpleGrid,
  Button,
  Input,
  Box,
  Stack,
} from "@chakra-ui/react";

const Donate = () => {
  return (
    <Flex
      w="100%"
      gap={{ base: 3, md: 12 }}
      direction={{ base: "column", md: "row" }}
    >
      <Box w={{ base: "100%", md: "50%" }}>
        <Flex
          //   w={{ base: "100%", md: "100%" }}
          py={{ base: "20px", md: "80px" }}
          direction="column"
          gap={4}
        >
          <Text fontSize={{ base: "40px", md: "70px" }} fontWeight="700">
            Support our Mission
          </Text>
          <Text
            fontSize={{ base: "14px", md: "18px" }}
            fontWeight="400"
            color="darkgreen"
          >
            Elections are expensive. They still cost billions of Naira. Osinbajo
            has never been a “money bag.” We need your help.
          </Text>
          <Text
            fontSize={{ base: "14px", md: "18px" }}
            fontWeight="400"
            color="darkgreen"
          >
            We work every day investing in public and grassroot campaign
            infrastructure, taking YOUR message to delegates. None of this work
            is possible without your support.
          </Text>
          <Text
            fontSize={{ base: "14px", md: "18px" }}
            fontWeight="400"
            color="darkgreen"
          >
            This campaign is led by everyday Nigerians telling themselves the
            truth: that Osinbajo is competent, experienced, and prepared to fix
            Nigeria. The best choice, if not the ONLY choice.
          </Text>
          <Text
            fontSize={{ base: "14px", md: "18px" }}
            fontWeight="400"
            color="darkgreen"
          >
            Please support us financially. Also let us know your email address –
            so we can thank you personally, and inform you of our activities
            from funds raised. Thank you for your support!
          </Text>
          <Text
            fontSize={{ base: "14px", md: "18px" }}
            fontWeight="400"
            color="darkgreen"
          >
            Join us to help take the Mission further!
          </Text>
        </Flex>
      </Box>
      <Box w={{ base: "100%", md: "50%" }}>
        <Flex
          direction="column"
          bg="white"
          rounded={{ base: "12px", md: "24px" }}
          p={{ base: 3, md: 12 }}
          // w={{ base: "100%", md: "50%" }}
        >
          <Stack
            flexDirection={{ base: "column-reverse", md: "initial" }}
            direction={["column", "row"]}
            w="100%"
          >
            <Box w={{ base: "100%", md: "70%" }}>
              {/* <Box> */}

              <Text
                fontSize={{ base: "18px", md: "24px" }}
                fontWeight="600"
                color="darkgreen"
                w="100%"
                textAlign={{ base: "center", md: "initial" }}
                display={{ base: "none", md: "initial" }}
              >
                Choose an amount:
              </Text>

              <Text
                fontSize={{ base: "14px", md: "18px" }}
                fontWeight="400"
                color="disable"
                w="100%"
                textAlign={{ base: "center", md: "initial" }}
              >
                How much do you want to donate to this campaign?
              </Text>
              {/* </Box> */}
            </Box>
            <Spacer />
            <Box w={{ base: "100%", md: "30%" }}>
              <Box display={{ base: "initial", md: "none" }} w="100%">
                <Text
                  fontSize={{ base: "18px", md: "24px" }}
                  fontWeight="600"
                  color="darkgreen"
                  textAlign={{ base: "center", md: "initial" }}
                >
                  Choose an amount:
                </Text>
              </Box>

              <Select placeholder="Naira" w={{ base: "100%", md: "80%" }}>
                <option value="option1">US Dollar</option>
                <option value="option2">Nigerian Naira</option>
                <option value="option3">Ghanian Cedi</option>
              </Select>
            </Box>
          </Stack>
          <SimpleGrid
            columns={3}
            spacing={{ base: 2, md: 4 }}
            py={{ base: 4, md: 8 }}
          >
            <Button
              variant="outline"
              fontSize={{ base: "13px", md: "15px" }}
              fontWeight="500"
              color="darkgreen"
            >
              ₦5000
            </Button>
            <Button
              variant="outline"
              fontSize={{ base: "13px", md: "15px" }}
              fontWeight="500"
              color="darkgreen"
            >
              ₦10000
            </Button>
            <Button
              variant="outline"
              fontSize={{ base: "13px", md: "15px" }}
              fontWeight="500"
              color="darkgreen"
            >
              ₦50000
            </Button>
            <Button
              variant="outline"
              fontSize={{ base: "13px", md: "15px" }}
              fontWeight="500"
              color="darkgreen"
            >
              ₦100,000
            </Button>
            <Button
              variant="outline"
              fontSize={{ base: "13px", md: "15px" }}
              fontWeight="500"
              color="darkgreen"
            >
              ₦500,000
            </Button>
            <Button
              variant="outline"
              fontSize={{ base: "13px", md: "15px" }}
              fontWeight="500"
              color="darkgreen"
            >
              ₦1,000,000
            </Button>
          </SimpleGrid>
          <Flex direction="column" py={2} gap={1}>
            <Input
              placeholder="# Enter Amount"
              color="darkgreen"
              fontSize="16px"
              fontWeight="400"
            />
            <Text
              as="span"
              fontSize={{ base: "12px", md: "14px" }}
              fontWeight="400"
              color="darkgreen"
            >
              Minimum amount is ₦2,000
            </Text>
          </Flex>
          <Flex direction="column" py={2} gap={1}>
            <Text
              as="span"
              fontSize={{ base: "12px", md: "14px" }}
              fontWeight="400"
              color="darkgreen"
            >
              Email Address:
            </Text>
            <Input
              placeholder="Enter your email address"
              color="darkgreen"
              fontSize="16px"
              fontWeight="400"
            />
          </Flex>
          <Flex py={4} w="100%">
            <Button
              variant="action"
              color="white"
              py={{ base: 6, md: 8 }}
              fontSize="18px"
              fontWeight="500"
              w="100%"
            >
              DONATE NOW
            </Button>
          </Flex>
          <Flex
            direction="column"
            py={2}
            bgColor="#F7F7F7"
            rounded="10px"
            px={4}
          >
            <Text color="believe" fontSize="12px" fontWeight="600">
              Back it because you believe in it.
            </Text>
            <Text color="support" fontSize="12px" fontWeight="400">
              Support our Campaign for no reward, just because it speaks to you.
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Donate;
