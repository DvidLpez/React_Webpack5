import React, { FC, ReactElement } from "react";
import IPropsHeader from "../../interfaces/IPropsHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import "./Header.scss";

const Header: FC<IPropsHeader> = ({ title }: IPropsHeader): ReactElement => {
   return (
      <div className="wrapper_header linear_primary">
         <FontAwesomeIcon icon={faGithub} className="icon_brand" />
         <h1 className="title">{title}</h1>
      </div>
   )
}
export default Header;
