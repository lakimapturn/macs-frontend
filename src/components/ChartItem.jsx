import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import { colors } from "../constants/constants";

const ChartItem = (props) => {
  console.log(props);
  return (
    <Card {...props}>
      <CardBody>
        <Text marginBottom={2} textAlign={"center"} color={colors.black}>
          {props.title}
        </Text>
        <Chart
          series={props.series}
          options={props.options}
          type={props.options.chart.type}
        />
      </CardBody>
    </Card>
  );
};

export default ChartItem;
