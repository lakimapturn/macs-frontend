import {
  Box,
  Card,
  Container,
  Grid,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import ChartItem from "../components/ChartItem";
import { colors, dummyData } from "../constants/constants";

const Dashboard = () => {
  return (
    <VStack minH="100%" paddingX="2rem">
      <Box marginY={"2rem"}>
        <Text fontWeight="700" fontSize="5xl" color={colors.black}>
          Dashboard
        </Text>
      </Box>
      <Card
        borderBottomRadius={0}
        width="95vw"
        minH="80vh"
        padding={3}
        bg={colors.black}
      >
        <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={6}>
          {dummyData.map((item) => (
            <ChartItem key={new Date().toString()} {...item} />
          ))}
        </SimpleGrid>
      </Card>
    </VStack>
  );
};

export default Dashboard;
