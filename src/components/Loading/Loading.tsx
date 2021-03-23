import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, ReactElement } from "react";
import { Rotate, TextLoading, WrapperLoading } from "./Styles";

const Loading: FC = (): ReactElement => {

   return (
      <WrapperLoading>
         <Rotate>
            <FontAwesomeIcon icon={faSpinner} />
         </Rotate>
         <TextLoading>Loading</TextLoading>
      </WrapperLoading>
   )
}
export default Loading;
