import { Button, ButtonGroup, HStack, Text, VStack } from "@chakra-ui/react";
import { colors } from "../constants/constants";
import NavOption from "./NavOption";

const Header = (props) => {
  return (
    <VStack bg={colors.black}>
      <HStack
        bg={colors.blue}
        w="100%"
        paddingX="1.3rem"
        justifyContent="space-between"
      >
        <Text fontSize="xl" fontWeight="500" color={colors.black}>
          Aegis
        </Text>
        <ButtonGroup>
          <Button size="sm" variant="link" color={colors.black}>
            Forum
          </Button>
          <Button size="sm" variant="link" color={colors.black}>
            Notifications
          </Button>
          <Button size="sm" variant="link" color={colors.black}>
            Logout
          </Button>
          <Button size="sm" variant="link" color={colors.black}>
            Settings
          </Button>
        </ButtonGroup>
      </HStack>
      {/* <Divider colorScheme="whiteAlpha" /> */}
      <HStack spacing={4} justifyContent="center">
        <NavOption to="/" text="Option 1">
          Option 1
        </NavOption>
        <NavOption to="/">Option 2</NavOption>
      </HStack>
    </VStack>
  );
};

export default Header;
