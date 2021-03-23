import React, { FC } from "react";
import IPropsHeader from "../../interfaces/IPropsHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { TitleHeader, WrapperHeader } from "./Styles";

const Header: FC<IPropsHeader> = ({ title }) => {
   return (
      <WrapperHeader>
         <FontAwesomeIcon icon={faGithub} className="icon_brand" />
         <TitleHeader>{title}</TitleHeader>
      </WrapperHeader>
   )
}
export default Header;
