import React, { FC, Fragment, ReactElement } from "react";
import IPropsComment from "../../interfaces/IPropsComment";
import './Comment.scss';

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
                              <p className="date">{createdAt}</p>
                           </div>
                           <div className="col-6">
                              <p className="author">{author.login}</p>
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
