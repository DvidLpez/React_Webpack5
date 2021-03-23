import React, { FC, ReactElement } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb } from "@fortawesome/free-solid-svg-icons";
import { WrapperError } from "./Styles";

const Error: FC = (): ReactElement => {

   return (
      <WrapperError>
         <FontAwesomeIcon icon={faBomb} className="icon_error"/>
         <p>Opps!! We have an error. Try again!!</p>
      </WrapperError>
   )
}
export default Error;
