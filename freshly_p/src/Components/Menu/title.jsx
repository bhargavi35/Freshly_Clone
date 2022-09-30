import React from "react";

import { Flex, Stack, Tag, Text } from "@chakra-ui/react";

export const MenuModalTitle = ({ data }) => {
  // console.log(data);
  return (
    <>
      {data?.map((item) => {
        <Stack>
          <Text size="md" fontSize={"16px"} color={"black"} w="130%">
            {item.title}
          </Text>
          <Text size={"xs"} fontSize="14px"color={"black"} as="i">
            {item.subTitle}
          </Text>
          <Flex justifyContent={"space-between"}>
            <Tag
              size="xs"
              p="5px 15px"
              mr="5px"
              fontSize="12px"
              backgroundColor={"rgb(184,255,250)"}
            >
              {item.hightlight}
            </Tag>
          </Flex>
        </Stack>;
      })}
    </>
  );
};
