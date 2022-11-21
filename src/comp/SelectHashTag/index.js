import { Box, HStack, Text } from "native-base";
import React from "react";

export default function SelectHashTag() {
  return (
    <HStack
      m={2}
      p={2}
      bg={"rgba(255,255,255,0.1)"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderRadius={9}
    >
      <Text color={"white"} fontFamily="heading" fontSize={"md"} p={2}>
        Add or select a Hashtag
      </Text>
      <Box bg={"rgba(0,0,0,0.2)"} borderRadius={9} p={2}>
        <Text color={"white"} fontFamily="heading" fontSize={"md"}>
          #London
        </Text>
      </Box>
    </HStack>
  );
}
