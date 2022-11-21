import { HStack, Text } from "native-base";
import React from "react";
import IconButton from "../IconButton";

export default function Header() {
  return (
    <HStack justifyContent={"space-between"} alignItems={"center"} px={3}>
      <IconButton />
      <Text color={"white"} fontSize={"xl"}>
        Add your post
      </Text>
      <IconButton />
    </HStack>
  );
}
