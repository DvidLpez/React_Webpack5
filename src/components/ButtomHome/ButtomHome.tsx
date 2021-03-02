import React, { FC, ReactElement } from "react";
import { Link } from 'react-router-dom';
import './ButtomHome.scss';

const ButtomHome: FC = (): ReactElement => {

   return (
      <div className="wrapper wrapper_link">
         <Link className="link" to="/">
            Go Home
         </Link>
      </div> 
   )
}
export default ButtomHome;
