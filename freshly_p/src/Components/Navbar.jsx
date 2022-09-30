import {
  ModalContent,
  ModalOverlay,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MdEmail } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import {
  FaFacebookMessenger,
  FaTwitter,
  FaWhatsapp,
  FaPinterest,
} from "react-icons/fa";
import {
  Flex,
  Image,
  Center,
  HStack,
  Modal,
  ModalBody,
  Box,
  Text,
  Button,
  ModalCloseButton,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <nav className={styles.nav_top}>
        <Box className={styles.logo1}>
          <Image
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5fc4feea074f5b86a6c62285_freshly-logo-R.svg"
            alt=""
          />
        </Box>
        <Box className={styles.logo2}>
          <Image
            src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62cc357f7fae1600a04f4546_freshlywell-bw.svg"
            alt=""
          /> 
        </Box>
      </nav>
      <Flex
        className={styles.navbar}
        gap={{ sm: "5px", md: "15px", lg: "20px" }}
      >
        <Center>
          <Link to="/">
            <Image
              width="100px"
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5fc4feea074f5b86a6c62285_freshly-logo-R.svg"
              alt="logo"
            />
          </Link>
        </Center>
        <Spacer />
        <Center>
          <HStack gap={{ sm: "5px", md: "10px", lg: "20px" }}>
            <Link to="/plansmenu" className={`${styles.links} ${styles.hide}`}>
              Plans & Menu
            </Link>
            <Link to="/" className={`${styles.links} ${styles.hide}`}>
              How it Works
            </Link>
            <Link to="/" className={`${styles.links} ${styles.hide}`}>
              Gifts
            </Link>
            <Link
              to="#"
              onClick={onOpen}
              className={`${styles.links} ${styles.hide}`}
            >
              Refer a Friend
            </Link>
            {/* *******************refermodal********* */}
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent minW="800" minH="580">
                <ModalCloseButton
                  bg="#669966"
                  borderRadius="50%"
                  color="white"
                />
                <ModalBody p="0">
                  <Flex>
                    <Box>
                      <Image
                        alt="refr"
                        height="100%"
                        src="https://origin.xtlo.net/type=creativeArchive:clientId=234960547:creativeArchiveId=7109037448615810170:version=5:coreAssetsVersion=1544591110416/img/POP_UP_1655201914801.jpg"
                      />
                    </Box>
                    <Box alignItems="center" p="30px">
                      <Text fontSize="30px" color="green.900" fontWeight="bold">
                        12 Free Meals for Friends, $30 Just for You!
                      </Text>
                      <Text
                        fontSize="15px"
                        color="green.900"
                        fontWeight="600"
                        mt="20px"
                      >
                        Refer your friends and earn $30 for each friend who
                        joins!
                      </Text>
                      <Text
                        fontSize="12px"
                        color="green.900"
                        fontWeight="500"
                        mt="30px"
                      >
                        Enter your email to get your share link
                      </Text>
                      <HStack mt="20px">
                        <Input placeholder="Your Email" borderRadius="50px" />
                        <Button
                          bg="#669966"
                          color="white"
                          borderRadius="50px"
                          px="25px"
                        >
                          Enter
                        </Button>
                      </HStack>
                      <HStack mt="20px">
                        <Button
                          bg="#669966"
                          color="white"
                          borderRadius="50px"
                          px="25px"
                          w="150px"
                          leftIcon={<MdEmail />}
                        >
                          Email
                        </Button>
                        <Button
                          colorScheme="facebook"
                          borderRadius="50px"
                          px="25px"
                          w="150px"
                          leftIcon={<GrFacebookOption />}
                        >
                          FaceBook
                        </Button>
                      </HStack>
                      <HStack mt="20px">
                        <Button
                          colorScheme="messenger"
                          borderRadius="50px"
                          px="25px"
                          w="150px"
                          leftIcon={<FaFacebookMessenger />}
                        >
                          Messenger
                        </Button>
                        <Button
                          colorScheme="twitter"
                          borderRadius="50px"
                          px="25px"
                          w="150px"
                          leftIcon={<FaTwitter />}
                        >
                          Twitter
                        </Button>
                      </HStack>

                      <HStack mt="20px">
                        <Button
                          colorScheme="whatsapp"
                          borderRadius="50px"
                          px="25px"
                          w="150px"
                          leftIcon={<FaWhatsapp />}
                        >
                          Whatsapp
                        </Button>
                        <Button
                          bg="#bd081c"
                          color="white"
                          borderRadius="50px"
                          px="25px"
                          w="150px"
                          leftIcon={<FaPinterest />}
                        >
                          Printerest
                        </Button>
                      </HStack>
                      <Box mt="10px">
                        <Text>How It Works | My Stats | Powered by Extole</Text>
                      </Box>
                    </Box>
                  </Flex>
                </ModalBody>
              </ModalContent>
            </Modal>
            {/* ********************************endmodal******** */}
            <Link to="/help" className={`${styles.links} ${styles.hide}`}>
              Help
            </Link>
          </HStack>
        </Center>
        <Spacer />

        <Center>
          <HStack>
            <Link to="/login">
              <Button
                colorScheme="black.900"
                variant="ghost"
                size={{ sm: "xs", md: "md", lg: "lg" }}
                className={styles.hide}
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                size={{ sm: "xs", md: "md", lg: "lg" }}
                className={`${styles.hide}`}
                colorScheme="messenger"
                variant="solid"
                borderRadius="10%"
                width="80%"
              >
                Sign Up
              </Button>
            </Link>
          </HStack>
        </Center>
      </Flex>
    </>
  );
};

export default Navbar;
