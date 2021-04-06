import styled from "styled-components";
import {
  Wrapper,
  Text
} from "../../components/StyledComponents/styledComponents";

export const WrapperIssue = styled(Wrapper)`
  flex-grow: 2;
  text-align: left;
  padding: ${(props) => props.theme.spaces.s10};
  max-width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 50%;
  }
  @media screen and (min-width: 1250px) {
    max-width: 33.3%;
  }
`;

export const Card = styled(Wrapper)`
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.spaces.borderRadius};
  overflow: hidden;
  padding: ${(props) => props.theme.spaces.s15};
  &:hover {
    box-shadow: ${(props) => props.theme.colors.shadow.card};
  }
`;

export const TitleIssue = styled(Text)`
  font-size: ${(props) => props.theme.fonts.size.medium};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
`;
export const InfoComments = styled(Text)`
  float: left;
  margin: ${(props) => props.theme.spaces.none};
`;

type IProps = {
   state: string;
}

export const StateIssue = styled(Text)<IProps>`
  float: right;
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spaces.s5};
  border-radius: ${(props) => props.theme.spaces.borderRadius};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  margin: ${(props) => props.theme.spaces.none};
  background-color: ${(props) =>
    props.state == "closed"
      ? props.theme.colors.closed
      : props.theme.colors.success};
`;

export const InfoBody = styled.div`
  position: relative;
  min-height: 215px;
  overflow: hidden;
`;
export const InfoHeader = styled.div`
  position: relative;
  overflow: hidden;
`;

export const WrapperOpacity = styled.div`
  position: absolute;
  top: ${(props) => props.theme.spaces.none};
  left: ${(props) => props.theme.spaces.none};
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.gradient.opacityBox};
`;


