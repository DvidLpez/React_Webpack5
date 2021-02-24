import React, { FC, Fragment, ReactElement } from "react";
import './ButtomHome.scss';
import { Link } from 'react-router-dom';

const ButtomHome: FC = (): ReactElement => {

   return (
      <Fragment>
         <div className="wrapper wrapper_link">
            <Link className="link" to="/">
               Go Home
          </Link>
         </div>
      </Fragment>
   )
}
export default ButtomHome;
