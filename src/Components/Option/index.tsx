import { ISelectProps } from "../../Interfaces";

export const Option = ({ setState }: ISelectProps) => {
  let quant = [];

  for (let count = 1; count <= 100; count++) {
    quant.push(count.toString());
  }

  return (
    <select onChange={(e) => setState(e.target.value)}>
      {quant.map((num, index) => {
        return (
          <option key={index} value={num}>
            {num}
          </option>
        );
      })}
    </select>
  );
};
