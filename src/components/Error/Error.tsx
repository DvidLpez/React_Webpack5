import React, { FC, ReactElement } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb } from "@fortawesome/free-solid-svg-icons";
import './Error.scss';

const Error: FC = (): ReactElement => {

   return (
      <div className="wrapper_error">
         <FontAwesomeIcon icon={faBomb} className="error_icon"/>
         <p>Opps!! We have an error. Try again!!</p>
      </div>
   )
}
export default Error;
