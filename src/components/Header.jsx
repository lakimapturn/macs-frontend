import {
  Box,
  Button,
  Container,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { colors } from "../constants/constants";

const Header = (props) => {
  return (
    <Box bg={colors.black}>
      <HStack
        paddingX="1.3rem"
        paddingY="0.75rem"
        justifyContent="space-between"
      >
        <Text fontSize="xl" fontWeight="500">
          SoftwareName
        </Text>
        <HStack spacing={2}>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
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
            <MenuButton as={Button}>Directory 2</MenuButton>
          </Menu>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
