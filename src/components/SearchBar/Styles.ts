import styled from "styled-components";
import {
  Wrapper,
} from "../../components/StyledComponents/styledComponents";

export const WrapperSearch = styled(Wrapper)`
  position: relative;
  padding: ${(props) => props.theme.spaces.s30};

  @media screen and (min-width: 768px) {
    padding: 10px 30px;
  }
`;

export const WrapperStates = styled(Wrapper)`
  text-align: ${(props) => props.theme.spaces.center};
  label {
    font-size: ${(props) => props.theme.fonts.size.medium};
    font-weight: ${(props) => props.theme.fonts.weight.bold};
    margin: 0 6%;
    cursor: pointer;
  }
  label.open {
    color: ${(props) => props.theme.colors.success};
  }
  label.closed {
    color: ${(props) => props.theme.colors.closed};
  }

  @media screen and (min-width: 768px) {
    padding: ${(props) => props.theme.spaces.s15};
    label {
      font-size: ${(props) => props.theme.fonts.size.large};
    }
  }
`;

export const InputSearch = styled.input`
  border: 1px solid ${(props) => props.theme.colors.lightgrey};
  border-radius: ${(props) => props.theme.spaces.s30};
  color: #2e2e2e;
  font-size: ${(props) => props.theme.fonts.size.default};
  font-style: italic;
  outline: none;
  padding: 7px 10px 7px 10px;
  width: 100%;
  -webkit-box-shadow: ${(props) => props.theme.colors.shadow.inputSearch};
  -moz-box-shadow: ${(props) => props.theme.colors.shadow.inputSearch};
  box-shadow: ${(props) => props.theme.colors.shadow.inputSearch};
  text-indent: 55px;
  transition: all 0.3s ease-in-out;

  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.placeholder};
    text-indent: 50px;
  }

  &:focus,
  &:active {
    text-indent: ${(props) => props.theme.spaces.none};
    background: ${(props) => props.theme.colors.white};
    &::-webkit-input-placeholder {
      color: ${(props) => props.theme.colors.placeholder};
      text-indent: 3px;
    }
    + label {
      transform: rotate(-66deg);
      border-radius: ${(props) => props.theme.spaces.s30};

      &:before {
        transform: rotate(10deg);
      }
    }
  }

  + label {
    display: inline-block;
    position: absolute;
    top: ${(props) => props.theme.spaces.s30};
    left: ${(props) => props.theme.spaces.s30};
    width: 65px;
    height: 50px;
    font-size: ${(props) => props.theme.fonts.size.medium};
    padding: 10px 15px;
    text-shadow: ${(props) => props.theme.colors.shadow.labelSearch};
    color: ${(props) => props.theme.colors.white};

    transition: all 0.4s ease-in-out;
    border-radius: ${(props) => props.theme.spaces.s30};
    transform-origin: left bottom;
    z-index: 99;

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: ${(props) => props.theme.spaces.none};
      right: ${(props) => props.theme.spaces.none};
      bottom: ${(props) => props.theme.spaces.none};
      left: ${(props) => props.theme.spaces.none};
      width: 55px;
      height: 35px;
      border-radius: ${(props) => props.theme.spaces.s30};
      border-top-right-radius: ${(props) => props.theme.spaces.none};
      border-bottom-right-radius: ${(props) => props.theme.spaces.none};
      background: ${(props) => props.theme.colors.labelSearch};
      transform-origin: left bottom;
      transition: all 0.4s ease-in-out;
      pointer-events: none;
      z-index: -1;
    }

    &:before {
      background: rgba(3, 36, 41, 0.2);
      z-index: -2;
      right: 20%;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fonts.size.medium};
    padding: 15px 20px 15px 40px;
    text-indent: 90px;
    &::-webkit-input-placeholder {
      text-indent: 90px;
    }
    + label {
      top: 9px;
      left: ${(props) => props.theme.spaces.s30};
      width: 65px;
      height: 50px;
      font-size: ${(props) => props.theme.fonts.size.medium};
      padding: 10px 15px;
      transition: all 0.4s ease-in-out;
      transform-origin: left bottom;
      &:before,
      &:after {
        width: 100px;
        height: 55px;
      }
    }
  }
`;
