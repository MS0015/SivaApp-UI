import { Input, VStack, TextArea as TextA, Text } from "native-base";
import React from "react";

export default function TextArea() {
  const [textAreaValue, setTextAreaValue] = React.useState(
    "In literature, abstract imagery is language that portrays sensations or experiences that have no physical parallel, such as ideas, concepts, or emotions. "
  );

  return (
    <VStack m={2} bg={"rgba(255,255,255,0.1)"} borderRadius={9}>
      <TextA
        backgroundColor={"rgba(255,255,255,0)"}
        color={"white"}
        size="md"
        w="100%"
        borderWidth={0}
        value={textAreaValue}
        onChangeText={(txt) => setTextAreaValue(txt)}
      />
      <Text alignSelf={"flex-end"} pr={2} color={"white"}>
        {textAreaValue.length}
      </Text>
    </VStack>
  );
}
