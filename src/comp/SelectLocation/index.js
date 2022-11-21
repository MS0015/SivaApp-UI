import { Box, HStack, Text } from "native-base";
import React from "react";

export default function SelectLocation() {
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
        Add Location
      </Text>
      <Text color={"white"} fontFamily="heading" fontSize={"md"} p={2}>
        london united kingdom
      </Text>
    </HStack>
  );
}
