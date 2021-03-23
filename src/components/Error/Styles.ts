import styled from "styled-components";
import { Wrapper } from "../../components/StyledComponents/styledComponents";

export const WrapperError = styled(Wrapper)`
  border: 1px solid ${(props) => props.theme.colors.title};
  color: ${(props) => props.theme.colors.title};
  margin: ${(props) => props.theme.spaces.none} auto;
  margin-top: ${(props) => props.theme.spaces.s30};
  background-color: ${(props) => props.theme.colors.danger};
  border-radius: ${(props) => props.theme.spaces.s5};
  padding: ${(props) => props.theme.spaces.s15};
  text-align: center;
  font-weight: 600;
  width: 90%;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;
