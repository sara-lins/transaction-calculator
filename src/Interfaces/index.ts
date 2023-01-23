import { ReactNode } from "react";

export interface IContainerProps {
  objectProps: {
    width: string;
    height: string;
    color?: string;
    shadow?: boolean;
    backgroundColor?: string;
    radius?: string;
  };
  children: ReactNode;
}

export interface ISelectProps {
  setState: React.Dispatch<React.SetStateAction<string>>;
}

export interface ITransactionData {
  amount: number;
  installments: number;
  mdr: number;
  days?: string[];
}

export interface ICardProps {
  classname: string;
  state: string;
  index: number;
}
