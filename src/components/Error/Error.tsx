import React, { FC, Fragment, ReactElement } from "react";
import './Error.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb } from "@fortawesome/free-solid-svg-icons";

const Error: FC = (): ReactElement => {

   return (
      <Fragment>
         <div className="wrapper_error">
            <FontAwesomeIcon icon={faBomb} className="error_icon"/>
            <p>Opps!! We have an error. Try again!!</p>
         </div>
      </Fragment>
   )
}
export default Error;
