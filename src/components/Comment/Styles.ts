import styled from "styled-components";
import {
   Text,
   Wrapper,
} from "../../components/StyledComponents/styledComponents";

export const WrapperComment = styled(Wrapper)`
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: ${(props) => props.theme.spaces.p1520};
  margin: ${(props) => props.theme.spaces.p100};
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.bgComment};
  border-radius: ${(props) => props.theme.spaces.borderRadius};
`;

type IProps = {
   position?: string,
}

export const TextSmall = styled(Text)<IProps>`
  font-size: ${(props) => props.theme.fonts.size.small};
  float: ${(props) => props.position};
`;


