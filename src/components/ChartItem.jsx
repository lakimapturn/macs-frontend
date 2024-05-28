import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import { Chart } from "react-google-charts";
import { colors } from "../constants/constants";

const ChartItem = (props) => {
  const top = new Set(["BarChart", "ColumnChart", "LineChart"]);
  const options = {
    legend: { position: top.has(props.chartType) ? "top" : "right" },
  };
  return (
    <Card {...props}>
      <CardBody>
        <Text marginBottom={2} textAlign={"center"} color={colors.black}>
          {props.title}
        </Text>
        <Chart
          chartType={props.chartType}
          data={props.data}
          options={options}
          width="100%"
          height="13rem"
        />
      </CardBody>
    </Card>
  );
};

export default ChartItem;
