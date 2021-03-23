import styled from "styled-components";
import { Title, Wrapper } from "../../components/StyledComponents/styledComponents";

export const TitleHeader = styled(Title)`
  font-size: ${(props) => props.theme.fonts.medium};
  display: inline-block;

  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fonts.big};
  }
`;

export const WrapperHeader = styled(Wrapper)`
  color: ${(props) => props.theme.colors.title};
  background: ${(props) => props.theme.colors.gradient};
  padding: ${(props) => props.theme.spaces.p2525};
  margin-bottom: ${(props) => props.theme.spaces.s5};
  max-width: 100%;

  @media screen and (min-width: 768px) {
    margin-bottom: ${(props) => props.theme.spaces.s30};
  }
`;
