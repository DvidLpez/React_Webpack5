import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, ReactElement } from "react";
import './Loading.scss';

const Loading: FC = (): ReactElement => {

   return (
      <div className="wrapper_loading">
         <div className="content">
            <FontAwesomeIcon icon={faSpinner} className="icon_spinner" />
            <p className="loading_text">Loading</p>
         </div>
      </div>
      
   )
}
export default Loading;
