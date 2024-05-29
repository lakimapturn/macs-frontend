import { dashboardTypes } from "../constants/constants";
import ChartItem from "./ChartItem";
import NumbersItem from "./NumbersItem";

const DashboardItem = ({ type, data }) => {
  console.log(type, data);
  if (type === dashboardTypes.chart) {
    return <ChartItem {...data} />;
  }
  if (type === dashboardTypes.numbers) {
    return <NumbersItem {...data} />;
  }
  return null;
};

export default DashboardItem;
