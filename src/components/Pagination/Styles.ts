import styled from "styled-components";
import {
  Wrapper,
} from "../../components/StyledComponents/styledComponents";


export const WrapperPaginate = styled(Wrapper)`
  text-align: ${(props) => props.theme.spaces.center};
`;


type Props = {
  previous?: boolean;
  next?: boolean;
};
export const ButtonPaginate = styled.button<Props>`
  width: 170px;
  margin: 5px 10px;
  padding: 8px 10px 5px;
  font-size: ${(props) => props.theme.fonts.size.small};
  cursor: pointer;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.spaces.borderRadius};
  background-color: ${(props) => props.theme.colors.white};

  &:hover {
    background-color: ${(props) => props.theme.colors.bgButtons};
    color: ${(props) => props.theme.colors.white};
  }
  &:disabled {
    background-color: ${(props) => props.theme.colors.white};
    color: rgb(223, 223, 223);
  }
  &::before {
    content: ${(props) => (props.previous ? "<" : null)};
    font-size: ${(props) => props.theme.fonts.size.medium};
    vertical-align: middle;
    margin: 0 5px;
  }
  &::after {
    content: ${(props) => (props.next ? ">" : null)};
    font-size: ${(props) => props.theme.fonts.size.medium};
    vertical-align: middle;
    margin: 0 5px;
  }
`;
