import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import { MenuModal } from "./MenuModal";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import styles from "../Navbar.module.css";
export function MenuCard({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log(data);
  return (
    <Box>
      <>
        <Box onClick={onOpen} cursor="pointer">
          <Modal isOpen={isOpen} onClose={onClose} size="2xl">
            <ModalOverlay />
            <ModalContent>
              <MenuModal data={data} />
            </ModalContent>
          </Modal>
          <Box className={styles.showdata}>
            {" "}
            {data.map((item) => (
              <>
                <Box
                  rounded={"lg"}
                  mt={-12}
                  pos={"relative"}
                  height={"270px"}
                  _after={{
                    transition: "all .3s ease",
                    content: '""',
                    w: "full",
                    h: "full",
                    pos: "absolute",
                    top: 10,
                    left: 10,
                    filter: "blur(50px)",
                    zIndex: -1,
                  }}
                  marginTop="10px"
                >
                  <Image
                    rounded={"lg"}
                    height={250}
                    width={270}
                    objectFit={"cover"}
                    borderRadius="10px"
                    transform="scale(1.05)"
                    src={item.img_1}
                    p={5}
                    className={styles.zoom}
                  />
                  <Heading as="h6" size={"xs"} textTransform={"uppercase"}>
                    {item?.title}
                  </Heading>
                  <Text
                    color={"rgb(53,116,113)"}
                    fontSize={"xs"}
                    fontWeight="600"
                    textTransform={"uppercase"}
                    mt="5px"
                  >{`${item?.calories} Cal | ${
                    item?.GlutenFree === true ? "Gluten Free" : "Has Gluten"
                  } | Single-Serve`}</Text>
                </Box>
              </>
            ))}
          </Box>
        </Box>
      </>
    </Box>
  );
}
