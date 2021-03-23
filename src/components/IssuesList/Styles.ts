import styled from "styled-components";
import {
  Text,
  Wrapper,
} from "../../components/StyledComponents/styledComponents";


export const WrapperNoResult = styled(Wrapper)`
  text-align: center;
  color: ${(props) => props.theme.colors.lightgrey};
  width: 50%;
  margin: ${(props) => props.theme.spaces.none} auto;
  margin-top: ${(props) => props.theme.spaces.s30};
  font-weight: 600;
`;

export const WrapperIssues = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
  margin: 10px 0;
  padding: ${(props) => props.theme.spaces.none};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-flow: row wrap;
  }
`;

export const TextCount = styled(Text)`
  width: 100%;
  font-weight: 600;
  padding: 0 10px;
`;
