import React from "react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Heading,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";
const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Image
              w={"150px"}
              h="60px"
              src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5fc4feea074f5b86a6c62285_freshly-logo-R.svg"
              alt="FRESHLY.com"
            />
            <Stack direction={"row"} spacing={6}>
              <Text>© Freshly Inc.</Text>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading fontSize={15}>Company</Heading>
            <Link
              style={{ cursor: "pointer", textDecoration: "none" }}
              to={"#"}
            >
              Careers
            </Link>
            <Link
              style={{ cursor: "pointer", textDecoration: "none" }}
              to={"#"}
            >
              Press
            </Link>
            <Link
              style={{ cursor: "pointer", textDecoration: "none" }}
              to={"#"}
            >
              Contact us
            </Link>
            <Link
              style={{ cursor: "pointer", textDecoration: "none" }}
              to={"#"}
            >
              Terms
            </Link>
            <Link
              style={{ cursor: "pointer", textDecoration: "none" }}
              to={"#"}
            >
              Privacy
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading fontSize={15}>Learn More</Heading>
            <Link
              to="/plansmenu"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              Plans & Menu
            </Link>
            <Link
              style={{ cursor: "pointer", textDecoration: "none" }}
              to={"#"}
            >
              Why Freshly?
            </Link>
            <Link
              style={{ cursor: "pointer", textDecoration: "none" }}
              to={"#"}
            >
              Gifts
            </Link>
            <Link
              style={{ cursor: "pointer", textDecoration: "none" }}
              to={"#"}
            >
              Refer a friend
            </Link>
            <Link
              style={{ cursor: "pointer", textDecoration: "none" }}
              to={"#"}
            >
              FAQs
            </Link>
            <Link style={{ cursor: "pointer", textDecoration: "none" }} to="#">
              Blogs
            </Link>
          </Stack>
          <Stack align={"flex-start"} justify="space-evenly">
            <Heading fontSize={15}>Join Us</Heading>
            <Stack
              direction={"row"}
              spacing={6}
              fontSize="1rem"
              margin={"10rem"}
            >
              <Box>
                <FaFacebook />
              </Box>
              <Box>
                <FaInstagram />
              </Box>
              <Box>
                <FaTwitter />
              </Box>
              <Box>
                <FaPinterest />
              </Box>
            </Stack>
            <Box style={{ cursor: "pointer" }}>
              <a
                href="https://apps.apple.com/app/apple-store/id1195648107"
                target="_blank"
              >
                <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5d6439d4fb92e7630e46976b_Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.freshly.meal&utm_source=website&utm_campaign=footer&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                target="_blank"
              >
                <Image
                  w={125}
                  src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5d643dd558306bfe1df5ef8b_google-play-badge.png"
                />
              </a>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
