import styled from "styled-components";
import {
  Text,
  Wrapper,
} from "../../components/StyledComponents/styledComponents";


export const WrapperProblem = styled(Wrapper)`
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  padding: 10px 20px;
  overflow: hidden;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    
      flex-direction: row;
      flex-flow: row wrap;
    
  }
`;
export const WrapperInfo = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
  margin: 10px 0;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-flow: row wrap;
  }
`;
export const Info = styled(Wrapper)`
  flex-grow: 2;
  text-align: center;
  padding: 4px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-flow: row wrap;
  }
`;

type IProps = {
  state: string
}

export const TextState = styled(Text)<IProps>`
  background-color: ${(props) => props.state == "closed" ? "#c60404" : "#007800"};
  color: ${(props) => props.theme.colors.title};
  font-weight: 600;
  padding: 10px;
  border-radius: ${(props) => props.theme.spaces.borderRadius};
`;


