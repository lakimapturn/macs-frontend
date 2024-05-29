import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { colors } from "../constants/constants";

const Header = (props) => {
  return (
    <VStack bg={colors.black}>
      <HStack w="100%" paddingX="1.3rem" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="500">
          Aegis
        </Text>
        <ButtonGroup>
          <Button size="sm" variant="link" color={colors.white}>
            Forum
          </Button>
          <Button size="sm" variant="link" color={colors.white}>
            Notifications
          </Button>
          <Button size="sm" variant="link" color={colors.white}>
            Logout
          </Button>
          <Button size="sm" variant="link" color={colors.white}>
            Settings
          </Button>
        </ButtonGroup>
      </HStack>
      <Divider colorScheme="whiteAlpha" />
      <HStack paddingBottom="0.75rem" justifyContent="center">
        <HStack spacing={2}>
          <Menu>
            <MenuButton as={Button} size="sm" rightIcon={<ChevronDownIcon />}>
              Directory 1
            </MenuButton>
            <MenuList>
              <MenuItem>Option 1</MenuItem>
              <MenuItem>Option 2</MenuItem>
              <MenuItem>Option 3</MenuItem>
              <MenuItem>Option 4</MenuItem>
              <MenuItem>Option 5</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton size="sm" as={Button}>
              Directory 2
            </MenuButton>
          </Menu>
        </HStack>
      </HStack>
    </VStack>
  );
};

export default Header;
