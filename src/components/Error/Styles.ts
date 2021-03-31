import styled from "styled-components";
import { Wrapper } from "../../components/StyledComponents/styledComponents";

export const WrapperError = styled(Wrapper)`
  border: 1px solid ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.white};
  margin: ${(props) => props.theme.spaces.none} auto;
  margin-top: ${(props) => props.theme.spaces.s30};
  background-color: ${(props) => props.theme.colors.danger};
  border-radius: ${(props) => props.theme.spaces.s5};
  padding: ${(props) => props.theme.spaces.s15};
  text-align: ${(props) => props.theme.spaces.center};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  width: 90%;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;
