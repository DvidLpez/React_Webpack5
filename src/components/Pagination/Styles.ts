import styled from "styled-components";
import {
  Wrapper,
} from "../../components/StyledComponents/styledComponents";


export const WrapperPaginate = styled(Wrapper)`
   text-align: center;
`;


type Props = {
  previous?: boolean;
  next?: boolean;
};
export const ButtonPaginate = styled.button<Props>`
  width: 170px;
  margin: 5px 10px;
  padding: 8px 10px 5px;
  font-size: ${(props) => props.theme.fonts.small};
  cursor: pointer;
  outline: none;
  border: 1px solid #e4e4e4;
  border-radius: ${(props) => props.theme.spaces.borderRadius};
  background-color: ${(props) => props.theme.colors.title};

  &:hover {
    background-color: ${(props) => props.theme.colors.grey};
    color: ${(props) => props.theme.colors.title};
  }
  &:disabled {
    background-color: ${(props) => props.theme.colors.title};
    color: rgb(223, 223, 223);
  }
  &::before {
    content: ${(props) => (props.previous ? "<" : null)};
    font-size: ${(props) => props.theme.fonts.medium};
    vertical-align: middle;
    margin: 0 5px;
  }
  &::after {
    content: ${(props) => (props.next ? ">" : null)};
    font-size: ${(props) => props.theme.fonts.medium};
    vertical-align: middle;
    margin: 0 5px;
  }
`;
