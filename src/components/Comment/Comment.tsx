import React, { FC, Fragment, ReactElement } from "react";
import IPropsComment from "../../interfaces/IPropsComment";
import { faComments, faUser, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Comment.scss';
import moment from "moment";

const Comment: FC<IPropsComment> = ({comment} : IPropsComment): ReactElement => {

  const {body, bodyHTML, author, createdAt} = comment;
   
   return (
      <Fragment>
         <div className="wrapper_comment">
            <div className="row">
               <div className="col-12">
                  <div className="comment_card">
                     <div className="comment_body">
                        <p>{body}</p>
                        <div className="comment_html" dangerouslySetInnerHTML={{ __html: bodyHTML }} />
                     </div>
                     <hr/>
                     <div className="comment_footer">
                        <div className="row">
                           <div className="col-6">
                              <p className="date"><FontAwesomeIcon icon={faCalendarAlt} className="icon_user" /> {moment(createdAt).format('L, LT')}</p>
                           </div>
                           <div className="col-6">
                              <p className="author"><FontAwesomeIcon icon={faUser} className="icon_user" /> {author.login}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>  
         </div>
      </Fragment>
   )
}
export default Comment;
