import axios, { AxiosResponse } from "axios";
import { createContext, useEffect } from "react";
import { useState, ReactNode } from "react";
import { ToastPending, ToastResponse } from "../../Components/Toast";
import { ITransactionData } from "../../Interfaces";

export const CalculatorContext = createContext<IProviderProps>(
  {} as IProviderProps
);

interface ICalculatorContextProps {
  children: ReactNode;
}

interface IProviderProps {
  valueInput: string;
  installmentsInput: string;
  percentageInput: string;
  keyDataRequest: string[];
  valueDataRequest: string[];
  viewResults: boolean;
  valueSelect: string;
  valueOptionOne: string;
  valueOptionTwo: string;
  valueOptionThree: string;
  valueOptionFour: string;
  isYesValue: string;
  isNoValue: string;
  setValueInput: React.Dispatch<React.SetStateAction<string>>;
  setinstallmentsInput: React.Dispatch<React.SetStateAction<string>>;
  setpercentageInput: React.Dispatch<React.SetStateAction<string>>;
  setValueDataRequest: React.Dispatch<React.SetStateAction<string[]>>;
  setKeyDataRequest: React.Dispatch<React.SetStateAction<string[]>>;
  setViewResults: React.Dispatch<React.SetStateAction<boolean>>;
  setValueSelect: React.Dispatch<React.SetStateAction<string>>;
  setValueOptionOne: React.Dispatch<React.SetStateAction<string>>;
  setValueOptionTwo: React.Dispatch<React.SetStateAction<string>>;
  setValueOptionThree: React.Dispatch<React.SetStateAction<string>>;
  setValueOptionFour: React.Dispatch<React.SetStateAction<string>>;
  setYesValue: React.Dispatch<React.SetStateAction<string>>;
  setNoValue: React.Dispatch<React.SetStateAction<string>>;
  verifyEmptiesInputs: () => boolean;
  verifyValuesInputs: () => boolean;
  verifyOptions: () => boolean;
  clearInputs: () => void;
  convertDatas: () => ITransactionData;
  updateValues: (data: number[]) => string[];
  submitInputs: () => void;
}

export const CalculatorProvider = ({ children }: ICalculatorContextProps) => {
  const [valueInput, setValueInput] = useState("");
  const [installmentsInput, setinstallmentsInput] = useState("");
  const [percentageInput, setpercentageInput] = useState("");
  const [valueDataRequest, setValueDataRequest] = useState<string[]>([]);
  const [keyDataRequest, setKeyDataRequest] = useState<string[]>([]);
  const [viewResults, setViewResults] = useState(false);
  const [valueSelect, setValueSelect] = useState<string>("false");
  const [valueOptionOne, setValueOptionOne] = useState<string>("1");
  const [valueOptionTwo, setValueOptionTwo] = useState<string>("1");
  const [valueOptionThree, setValueOptionThree] = useState<string>("1");
  const [valueOptionFour, setValueOptionFour] = useState<string>("1");
  const [isYesValue, setYesValue] = useState("true");
  const [isNoValue, setNoValue] = useState("false");

  const verifyEmptiesInputs = (): boolean => {
    if (!valueInput || !installmentsInput || !percentageInput) {
      setViewResults(false);
      ToastResponse("Preencha todos os campos", "error");
      return false;
    }
    return true;
  };

  const verifyValuesInputs = (): boolean => {
    const value = parseInt(valueInput);
    const installments = parseInt(installmentsInput);
    const percentage = parseInt(percentageInput);

    if (value < 1000) {
      setViewResults(false);
      ToastResponse("O valor da venda deve ser acima de 1000", "error");
      return false;
    }

    if (installments > 12 || installments === 0) {
      setViewResults(false);
      ToastResponse("Só é possível parcelar de 1 à 12 vezes", "error");
      return false;
    }

    if (percentage > 100 || percentage === 0) {
      setViewResults(false);
      ToastResponse("Porcentagem somente de 1 à 100", "error");
      return false;
    }

    return true;
  };

  const verifyOptions = (): boolean => {
    if (valueSelect === "true") {
      return true;
    }

    return true;
  };

  const clearInputs = (): void => {
    setValueInput("");
    setinstallmentsInput("");
    setpercentageInput("");
    setValueOptionOne("1");
    setValueOptionTwo("1");
    setValueOptionThree("1");
    setValueOptionFour("1");
    setValueSelect("false");

    setViewResults(false);
  };

  const convertDatas = (): ITransactionData => {
    const newAmount = parseInt(valueInput) * 100;

    const transactionData = {
      amount: newAmount,
      installments: parseInt(installmentsInput),
      mdr: parseInt(percentageInput),
    };

    if (valueSelect === "true") {
      const newtransactionData = {
        ...transactionData,
        days: [
          valueOptionOne,
          valueOptionTwo,
          valueOptionThree,
          valueOptionFour,
        ],
      };
      return newtransactionData;
    }

    return transactionData;
  };

  const updateValues = (data: number[]): string[] => {
    let newData: string[] = [];

    for (const key in data) {
      newData.push(
        data[key].toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
        })
      );
    }

    return newData;
  };

  const convertKeyDataResponse = (data: {}): void => {
    let newArr: string[] = [];

    for (const key in data) {
      newArr.push(key);
    }
    setKeyDataRequest(newArr);
  };

  const submitInputs = () => {
    const permissionRequestEmptiesInputs = verifyEmptiesInputs();
    const permissionRequestValuesInputs = verifyValuesInputs();
    const permissionRequestValuesOptions = verifyOptions();

    const data = convertDatas();
    const url = "https://frontend-challenge-7bu3nxh76a-uc.a.run.app";

    if (
      permissionRequestEmptiesInputs &&
      permissionRequestValuesInputs &&
      permissionRequestValuesOptions
    ) {
      axios
        .post(url, data)
        .then((res) => {
          const newData = updateValues(res.data);
          setTimeout(() => {
            setValueDataRequest(newData);
            convertKeyDataResponse(res.data);
            setViewResults(true);
            ToastResponse("Simulação realizada", "success");
          }, 2000);
        })
        .catch((err) => {
          setTimeout(() => {
            setViewResults(false);
            err.message === "Network Error"
              ? ToastResponse("Você está sem conexão", "error")
              : ToastResponse("Houve algum problema, tente de novo!", "error");
          }, 2000);
        })
        .finally(() => ToastPending("Aguarde um momento"));
    }
  };

  return (
    <CalculatorContext.Provider
      value={{
        installmentsInput,
        keyDataRequest,
        percentageInput,
        valueDataRequest,
        valueInput,
        valueOptionFour,
        valueOptionOne,
        valueOptionThree,
        valueOptionTwo,
        valueSelect,
        viewResults,
        isYesValue,
        isNoValue,
        setinstallmentsInput,
        setKeyDataRequest,
        setpercentageInput,
        setValueDataRequest,
        setValueInput,
        setValueOptionFour,
        setValueOptionOne,
        setValueOptionThree,
        setValueOptionTwo,
        setValueSelect,
        setNoValue,
        setYesValue,
        setViewResults,
        clearInputs,
        convertDatas,
        updateValues,
        verifyEmptiesInputs,
        verifyOptions,
        verifyValuesInputs,
        submitInputs,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
