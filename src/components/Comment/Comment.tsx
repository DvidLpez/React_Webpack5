import React, { FC, ReactElement } from "react";
import IPropsComment from "../../interfaces/IPropsComment";
import { faUser, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import './Comment.scss';

const Comment: FC<IPropsComment> = ({comment} : IPropsComment): ReactElement => {

  const {body, bodyHTML, author, createdAt} = comment;
   
   return (
      <div className="wrapper_comment">
         <div className="box">
            <div className="comment_card">
               <div className="comment_body">
                  <p>{body}</p>
                  <div className="comment_html" dangerouslySetInnerHTML={{ __html: bodyHTML }} />
               </div>
               <hr/>
               <div className="comment_footer">
                  <div className="box">
                     <div className="box-middle">
                        <p className="date"><FontAwesomeIcon icon={faCalendarAlt} className="icon_user" /> {moment(createdAt).format('DD/MM/YYYY HH:mm')}</p>
                     </div>
                     <div className="box-middle">
                        <p className="author"><FontAwesomeIcon icon={faUser} className="icon_user" /> {author.login}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>  
      </div>
   )
}
export default Comment;
