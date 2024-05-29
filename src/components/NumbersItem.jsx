import { Card, CardBody, HStack, Text, VStack } from "@chakra-ui/react";
import { colors } from "../constants/constants";

const NumbersItem = (props) => {
  console.log(props);
  return (
    <VStack justifyContent="space-between">
      <Card textAlign="center" w="100%">
        <CardBody>
          <Text color={colors.black}>{props.title1}</Text>
          <HStack justifyContent="space-around">
            <div>
              <Text fontWeight="bold" fontSize="3xl" color={colors.red}>
                {props.data1[0]}
              </Text>
              <Text color={colors.red}>OVERDUE</Text>
            </div>
            <div>
              <Text fontWeight="bold" fontSize="3xl" color={colors.red}>
                {props.data1[0]}
              </Text>
              <Text color={colors.red}>OPEN</Text>
            </div>
          </HStack>
        </CardBody>
      </Card>
      <Card textAlign="center" w="100%">
        <CardBody>
          <Text color={colors.black}>{props.title2}</Text>
          <HStack justifyContent="space-around">
            <div>
              <Text fontWeight="bold" fontSize="3xl" color={colors.red}>
                {props.data2[0]}
              </Text>
              <Text color={colors.red}>OVERDUE</Text>
            </div>
            <div>
              <Text fontWeight="bold" fontSize="3xl" color={colors.red}>
                {props.data2[0]}
              </Text>
              <Text color={colors.red}>OPEN</Text>
            </div>
          </HStack>
        </CardBody>
      </Card>
    </VStack>
  );
};

export default NumbersItem;
