import React, { FC, Fragment, ReactElement } from "react";
import Comment from '../Comment/Comment';
import IComment from '../../interfaces/IComment';
import IPropsCommentsList from "../../interfaces/IPropsCommentsList";
import './CommentsList.scss';

const CommentsList: FC<IPropsCommentsList> = ({comments}: IPropsCommentsList): ReactElement => {

   return (
      <Fragment>


         {comments.nodes.length > 0 ? <h3 className="comment_section">*** Comments ***</h3> : null}
         {comments.nodes.map((item: IComment) => (
            <Comment key={item.createdAt} comment={item}/>
         ))}
      </Fragment>
   )
}
export default CommentsList;
