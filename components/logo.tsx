import { Flex, HStack, Text } from "@chakra-ui/react"
import Link from "next/link"

const Logo = () => (
  <Link href="/">
    <HStack spacing={-4} w="min" _hover={{ cursor: "pointer" }}>
      <Text
        fontSize="4xl"
        fontWeight="normal"
        fontFamily="serif"
        lineHeight="shorter"
      >
        C
      </Text>
      <Flex flexDirection="column">
        <Text
          fontSize="4xl"
          fontWeight="normal"
          fontFamily="serif"
          lineHeight="shorter"
          marginTop={3.5}
        >
          N
        </Text>
      </Flex>
    </HStack>
  </Link>
)

export default Logo
