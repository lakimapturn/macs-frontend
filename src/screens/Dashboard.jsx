import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  HStack,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { colors, dashboardDummyData } from "../constants/constants";
import DashboardItem from "../components/DashboardItem";

const Dashboard = () => {
  return (
    <VStack bg={colors.gray} minH="100%" paddingX="2rem">
      <Box marginY={"2rem"}>
        <Text fontWeight="700" fontSize="5xl" color={colors.blue}>
          Dashboard
        </Text>
      </Box>
      <Card bg={colors.black} w="95vw" padding={3}>
        <HStack justifyContent="space-between">
          <HStack>
            <Text>Business Unit</Text>
            <Input placeholder="Default Group" bg={colors.white} />
          </HStack>
          <HStack>
            <Text>From Period</Text>
            <Input type="date" bg={colors.white} />
          </HStack>
          <HStack>
            <Text>To Period</Text>
            <Input type="date" bg={colors.white} />
          </HStack>
          <Button>Filter</Button>
        </HStack>
      </Card>
      <Card
        borderBottomRadius={0}
        width="95vw"
        minH="80vh"
        padding={3}
        bg={colors.black}
      >
        <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={6}>
          {dashboardDummyData.map((item) => (
            <DashboardItem key={new Date().toString()} {...item} />
          ))}
        </SimpleGrid>
      </Card>
    </VStack>
  );
};

export default Dashboard;
