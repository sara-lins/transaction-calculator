import { useContext } from "react";
import { CalculatorContext } from "../../Provider/Calculator";
import { Card } from "../Card";
import { Container } from "../Container";

const containerResultsProps = {
  width: "40rem",
  height: "15rem",
  color: "transparent",
};

export const ResultsContainer = () => {
  const { valueDataRequest } = useContext(CalculatorContext);

  return (
    <Container objectProps={containerResultsProps}>
      <div className="ContainerResults">
        <h2>Você receberá:</h2>
        <ul className="ContainerDaysResults">
          {valueDataRequest.map((elem, index) => (
            <Card
              classname={`CardDaysTransactions card-${index + 1}`}
              key={index}
              state={elem}
              index={index}
            />
          ))}
        </ul>
      </div>
    </Container>
  );
};
