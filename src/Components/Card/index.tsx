import { useContext } from "react";
import { ICardProps } from "../../Interfaces";
import { CalculatorContext } from "../../Provider/Calculator";

export const Card = ({ classname, state, index }: ICardProps): JSX.Element => {
  const { keyDataRequest } = useContext(CalculatorContext);

  let isTrue = false;
  let title = "";

  if (index === 0) {
    keyDataRequest.forEach((elem, index) => {
      if (elem === "1") {
        isTrue = true;
      }
    });
  }
  if (index === 0) {
    keyDataRequest.forEach((elem, index) => {
      if (index === 0) {
        title = elem;
      }
    });
  }
  if (index === 1) {
    keyDataRequest.forEach((elem, index) => {
      if (index === 1) {
        title = elem;
      }
    });
  }
  if (index === 2) {
    keyDataRequest.forEach((elem, index) => {
      if (index === 2) {
        title = elem;
      }
    });
  }
  if (index === 3) {
    keyDataRequest.forEach((elem, index) => {
      if (index === 3) {
        title = elem;
      }
    });
  }

  return (
    <>
      {isTrue ? (
        <li className={classname}>
          <p>Amanhã:</p>
          <p>
            <b>{state}</b>
          </p>
        </li>
      ) : (
        <li className={classname}>
          <p>Em {title} dias:</p>
          <p>
            <b>{state}</b>
          </p>
        </li>
      )}
    </>
  );
};
