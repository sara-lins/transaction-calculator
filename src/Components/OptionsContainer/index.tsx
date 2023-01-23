import { LabelTransaction, SelectTransaction } from "../FormContainer/style";
import { Option } from "../Option";
import { useContext } from "react";
import { CalculatorContext } from "../../Provider/Calculator";

export const ContainerDaysOptions = () => {
  const { valueSelect, isYesValue, isNoValue } = useContext(CalculatorContext);

  const {
    setValueSelect,
    setValueOptionOne,
    setValueOptionTwo,
    setValueOptionThree,
    setValueOptionFour,
  } = useContext(CalculatorContext);

  const { clearInputs, submitInputs } = useContext(CalculatorContext);

  return (
    <div className="ContainerSelectDays">
      <LabelTransaction>
        Selecionar os dias?
        <SelectTransaction
          onChange={(e) => {
            setValueOptionOne("1");
            setValueOptionTwo("1");
            setValueOptionThree("1");
            setValueOptionFour("1");
            setValueSelect(e.target.value);
          }}
          value={valueSelect}
        >
          <option value={isNoValue}>Não</option>
          <option value={isYesValue}>Sim</option>
        </SelectTransaction>
      </LabelTransaction>
      {valueSelect === "true" && (
        <div className="ContainerDaysOptions">
          <label>
            1ª opção:
            <br />
            <Option setState={setValueOptionOne} />
          </label>
          <label>
            2ª opção:
            <br />
            <Option setState={setValueOptionTwo} />
          </label>
          <label>
            3ª opção:
            <br />
            <Option setState={setValueOptionThree} />
          </label>
          <label>
            4ª opção:
            <br />
            <Option setState={setValueOptionFour} />
          </label>
        </div>
      )}
      <button
        type="button"
        className="buttonSubmitForm"
        onClick={() => submitInputs()}
      >
        Enviar
      </button>
      <button type="button" onClick={() => clearInputs()}>
        Clear
      </button>
    </div>
  );
};
