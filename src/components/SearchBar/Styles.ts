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
    font-size: ${(props) => props.theme.fonts.medium};
    font-weight: ${(props) => props.theme.fonts.bold};
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
      font-size: ${(props) => props.theme.fonts.large};
    }
  }
`;



export const InputSearch = styled.input`
  border: 1px solid #838383;
  border-radius: ${(props) => props.theme.spaces.s30};
  color: #2e2e2e;
  font-size: ${(props) => props.theme.fonts.default};
  font-style: italic;
  outline: none;
  padding: 7px 10px 7px 10px;
  width: 100%;
  -webkit-box-shadow: 0 0 20px 5px rgb(163, 163, 163);
  -moz-box-shadow: 0 0 20px 5px rgba(163, 163, 163, 1);
  box-shadow: 0 0 20px 5px rgba(163, 163, 163, 1);
  text-indent: 55px;
  transition: all 0.3s ease-in-out;

  &::-webkit-input-placeholder {
    color: #cccccc;
    text-indent: 50px;
    font-weight: 300;
  }

  &:focus,
  &:active {
    text-indent: ${(props) => props.theme.spaces.none};
    background: #fff;
    &::-webkit-input-placeholder {
      color: #aaa;
      text-indent: 3px;
    }
    + label {
      transform: rotate(-66deg);
      border-radius: 30px;

      &:before {
        transform: rotate(10deg);
      }
    }
  }

  + label {
    display: inline-block;
    position: absolute;
    top: 30px;
    left: 30px;
    width: 65px;
    height: 50px;
    font-size: ${(props) => props.theme.fonts.medium};
    padding: 10px 15px;
    text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
    color: white;

    transition: all 0.4s ease-in-out;
    border-radius: 30px;
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
      border-radius: 30px;
      border-top-right-radius: ${(props) => props.theme.spaces.none};
      border-bottom-right-radius: ${(props) => props.theme.spaces.none};
      background: #377d6a;
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
    font-size: ${(props) => props.theme.fonts.medium};
    padding: 15px 20px 15px 40px;
    text-indent: 90px;
    &::-webkit-input-placeholder {
      text-indent: 90px;
    }
    + label {
      top: 9px;
      left: 30px;
      width: 65px;
      height: 50px;
      font-size: ${(props) => props.theme.fonts.medium};
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

