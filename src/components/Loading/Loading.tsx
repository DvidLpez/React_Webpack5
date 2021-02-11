import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, Fragment, ReactElement } from "react";
faSpinner
import './Loading.scss';

const Loading: FC = (): ReactElement => {

   return (
      <Fragment>
         <div className="wrapper_loading">
            <div className="content">
               <FontAwesomeIcon icon={faSpinner} className="icon_spinner" />
               <p className="loading_text">Loading</p>
            </div>
         </div>
      </Fragment>
   )
}
export default Loading;
