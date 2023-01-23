import { Container } from "../../Components/Container";
import { FormContainer } from "../../Components/FormContainer";
import { ResultsContainer } from "../../Components/Results";
import pic from "../../Assets/pattern-randomized.svg";
import { useContext } from "react";
import { CalculatorContext } from "../../Provider/Calculator";

const pageCalculatorProps = {
  width: "100vw",
  height: "100vh",
  backgroundColor: `url(${pic})`,
};

const containerCalculatorProps = {
  width: "40rem",
  height: "25rem",
  color: "--off-yellow",
  radius: "5px",
  shadow: true,
};

export const CalculatorPage = () => {
  const { viewResults } = useContext(CalculatorContext);

  return (
    <Container objectProps={pageCalculatorProps}>
      <Container objectProps={containerCalculatorProps}>
        <FormContainer />
      </Container>
      {viewResults && <ResultsContainer />}
    </Container>
  );
};
