import styled from "styled-components";

export const FormTransaction = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 43%;
`;

export const InputTransaction = styled.input`
  width: 95%;
  height: 2rem;
  margin-top: 8px;
  padding-left: 8px;

  border-radius: 5px;

  &:focus {
    outline-color: var(--blue);
  }
`;

export const LabelTransaction = styled.label`
  p {
    margin-top: 8px;
    font-size: 0.8rem;
    color: var(--grey);
  }
`;

export const SelectTransaction = styled.select`
  width: 100%;
  height: 2rem;
  text-align: center;
  margin-top: 8px;
  border-radius: 5px;

  &:focus {
    outline-color: var(--blue);
  }
`;
