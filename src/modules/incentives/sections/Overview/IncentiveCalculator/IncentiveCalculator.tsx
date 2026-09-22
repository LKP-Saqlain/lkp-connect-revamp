import CalculatorLayout from "./CalculatorLayout";

interface Props {
  employeeType: string;
}

const IncentiveCalculator = ({ employeeType }: Props) => {
  return <CalculatorLayout employeeType={employeeType} />;
};

export default IncentiveCalculator;
