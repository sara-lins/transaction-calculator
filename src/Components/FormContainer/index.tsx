import { Container } from "../Container";
import { ContainerDaysOptions } from "../OptionsContainer";
import { Form } from "../Form";

const containerFormsProps = {
  width: "100%",
  height: "100%",
};

export const FormContainer = () => (
  <Container objectProps={containerFormsProps}>
    <h2 className="titlePrincial">Simule sua antecipação</h2>
    <div className="ContainerInputsSelect">
      <Form />
      <ContainerDaysOptions />
    </div>
  </Container>
);
