import React, { FC, ReactElement } from "react";
import { faUser, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import IPropsComment from "../../interfaces/IPropsComment";
import { WrapperComment, TextSmall } from "./Styles";
import { LineHr } from "../StyledComponents/styledComponents";

const Comment: FC<IPropsComment> = ({comment} : IPropsComment): ReactElement => {

  const {bodyHTML, author, createdAt} = comment;
   
   return (
      <WrapperComment>
         <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
         <LineHr/>
         <TextSmall position={"left"}>
            <FontAwesomeIcon icon={faUser} /> {author.login}
         </TextSmall> 
         <TextSmall position={"right"}>
            <FontAwesomeIcon icon={faCalendarAlt} /> {moment(createdAt).format('DD/MM/YYYY HH:mm')}
         </TextSmall>
      </WrapperComment>
   )
}
export default Comment;
