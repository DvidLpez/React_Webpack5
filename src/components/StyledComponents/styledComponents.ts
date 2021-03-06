import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: left;
  margin: ${(props) => props.theme.spaces.none} auto;
  max-width: 1500px;
  padding: ${(props) => props.theme.spaces.s5};

  @media screen and (min-width: 768px) {
    padding: ${(props) => props.theme.spaces.s30};
  }
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fonts.size.big};
  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fonts.size.extraBig};
  }
`;

export const Subtitle = styled.h2`
  font-size: ${(props) => props.theme.fonts.size.large};
  margin-bottom: ${(props) => props.theme.spaces.s50};
  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fonts.size.big};
  }
`;

export const TitleSection = styled.h3`
  font-size: ${(props) => props.theme.fonts.size.large};
  margin-top: ${(props) => props.theme.spaces.s50};
  margin-bottom: ${(props) => props.theme.spaces.s30};
`;


export const Text = styled.p`
  font-size: ${(props) => props.theme.fonts.size.default};
`;

export const Span = styled.span`
  font-size: ${(props) => props.theme.fonts.size.default};
  color: ${(props) => props.theme.colors.lightgrey};
`;

export const LinkHome = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.bgButtons};
  border-radius: ${(props) => props.theme.spaces.s5};
  margin-top: ${(props) => props.theme.spaces.s10};
  padding: ${(props) => props.theme.spaces.button};
  text-decoration: none;
  &:hover {
    -webkit-box-shadow: ${(props) => props.theme.colors.shadow.linkHome};
    -moz-box-shadow: ${(props) => props.theme.colors.shadow.linkHome};
    box-shadow: ${(props) => props.theme.colors.shadow.linkHome};
  }
`;

export const LineHr = styled.hr`
  border: none;
  border-bottom: solid 1px ${(props) => props.theme.colors.border};
`;
