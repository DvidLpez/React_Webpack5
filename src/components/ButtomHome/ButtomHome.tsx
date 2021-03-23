import React, { FC, ReactElement } from "react";
import { LinkHome } from "../StyledComponents/styledComponents";
import { WrapperLink } from "./Styles";


const ButtomHome: FC = (): ReactElement => {

   return (
      <WrapperLink>
         <LinkHome  to="/">
            Go Home
         </LinkHome>
      </WrapperLink> 
   )
}
export default ButtomHome;
