import { useContext } from "react";
import { CalculatorContext } from "../../Provider/Calculator";
import {
  FormTransaction,
  InputTransaction,
  LabelTransaction,
} from "../FormContainer/style";

export const Form = () => {
  const { setValueInput, setinstallmentsInput, setpercentageInput } =
    useContext(CalculatorContext);
  const { valueInput, installmentsInput, percentageInput } =
    useContext(CalculatorContext);

  return (
    <>
      <FormTransaction>
        <LabelTransaction htmlFor="valueInput">
          Informe o valor da venda *
          <InputTransaction
            type="string"
            id="valueInput"
            min={1000}
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
        </LabelTransaction>
        <LabelTransaction htmlFor="installmentsInput">
          Em quantas parcelas *
          <InputTransaction
            type="string"
            id="installmentsInput"
            min={1}
            max={12}
            value={installmentsInput}
            onChange={(e) => setinstallmentsInput(e.target.value)}
          />
          <p>Máximo de 12 parcelas</p>
        </LabelTransaction>
        <LabelTransaction htmlFor="percentageInput">
          Informe o percentual de MDR *
          <InputTransaction
            type="string"
            id="percentageInput"
            min={1}
            max={100}
            value={percentageInput}
            onChange={(e) => setpercentageInput(e.target.value)}
          />
        </LabelTransaction>
      </FormTransaction>
    </>
  );
};
