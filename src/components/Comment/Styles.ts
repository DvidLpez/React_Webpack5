import styled from "styled-components";
import {
   Text,
   Wrapper,
} from "../../components/StyledComponents/styledComponents";

export const WrapperComment = styled(Wrapper)`
  border: 1px solid ${(props) => props.theme.colors.secondary};
  padding: 15px 20px;
  margin: 10px 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.backComment};
  border-radius: ${(props) => props.theme.spaces.borderRadius};
`;

type IProps = {
   position?: string,
}

export const TextSmall = styled(Text)<IProps>`
  font-size: ${(props) => props.theme.fonts.small};
  float: ${(props) => props.position};
`;


