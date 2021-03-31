import styled, { keyframes } from "styled-components";
import {
  Text,
  Wrapper,
} from "../../components/StyledComponents/styledComponents";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const WrapperLoading = styled(Wrapper)`
  position: absolute;
  top: ${(props) => props.theme.spaces.none};
  left: ${(props) => props.theme.spaces.none};
  padding: ${(props) => props.theme.spaces.none};
  margin: ${(props) => props.theme.spaces.none};
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  max-width: 100%;
  text-align: ${(props) => props.theme.spaces.center};
  padding-top: 330px;
  @media screen and (min-width: 768px) {
    padding-top: 450px;
  }
`;

export const Rotate = styled.div`
  position: relative;
  text-align: ${(props) => props.theme.spaces.center};
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  font-size: ${(props) => props.theme.fonts.size.extra};
`;

export const TextLoading = styled(Text)`
  font-size: ${(props) => props.theme.fonts.size.medium};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
`;
