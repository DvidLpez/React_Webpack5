import React, { FC, Fragment, ReactElement } from "react";
import Comment from '../Comment/Comment';
import IComment from '../../interfaces/IComment';
import './CommentsList.scss';
import IPropsCommentsList from "../../interfaces/IPropsCommentsList";

const CommentsList: FC<IPropsCommentsList> = ({comments}: IPropsCommentsList): ReactElement => {

   return (
      <Fragment>
         {comments.nodes.map((item: IComment) => (
            <Comment key={item.createdAt} comment={item}/>
         ))}
      </Fragment>
   )
}
export default CommentsList;
