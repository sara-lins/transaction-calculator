import { IContainerProps } from "../../Interfaces";
import { ContainerBackground } from "./style";

export const Container = ({ objectProps, children }: IContainerProps) => {
  return (
    <ContainerBackground objectProps={objectProps}>
      {children}
    </ContainerBackground>
  );
};
