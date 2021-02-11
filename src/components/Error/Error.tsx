import React, { FC, Fragment, ReactElement } from "react";
import './Error.scss';

const Error: FC = (): ReactElement => {

   return (
      <Fragment>
         <div className="wrapper_error">
            <p>We have an error. Check the issue number!</p>
         </div>
      </Fragment>
   )
}
export default Error;
