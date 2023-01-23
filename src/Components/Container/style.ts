import styled from "styled-components";
import { IContainerProps } from "../../Interfaces";

export const ContainerBackground = styled.div<IContainerProps>`
  width: ${(props) => props.objectProps.width};
  height: ${(props) => props.objectProps.height};
  background-color: var(${(props) => props.objectProps.color});
  border-radius: ${(props) => props.objectProps.radius};

  background-image: ${(props) => props.objectProps.backgroundColor};
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  color: var(--black);
  font-size: 1rem;
  box-shadow: ${(props) => props.objectProps.shadow && "6px 5px 0px 0px black"};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;

  .ContainerInputsSelect {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 18rem;
  }

  .ContainerSelectDays {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 30%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2rem;

    background-color: var(--blue);
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    box-shadow: 3px 3px 0px 0px black;
  }

  .ContainerDaysOptions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;

    label {
      font-size: 0.8rem;
    }

    select {
      width: 5rem;
      height: 1.5rem;
      margin-top: 5px;
      border-radius: 5px;

      &:focus {
        outline-color: var(--blue);
      }
    }
  }

  .ContainerResults {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    height: 50%;
  }

  .ContainerDaysResults {
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  .CardDaysTransactions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    background-color: var(--blue);
    border-radius: 5px;
    box-shadow: 6px 5px 0px 0px black;

    width: 20rem;
    height: 9rem;

    animation: fadeInUp;

    &:hover {
      transform: scale(1.1);
      transition: all ease-out 0.3s;
    }
  }

  .card-1 {
    animation-duration: 1.2s;
  }

  .card-2 {
    animation-duration: 1.3s;
  }

  .card-3 {
    animation-duration: 1.4s;
  }

  .card-4 {
    animation-duration: 1.5s;
  }
`;
