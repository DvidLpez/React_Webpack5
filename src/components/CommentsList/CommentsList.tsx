import React, { FC, Fragment, ReactElement } from "react";
import Comment from '../Comment/Comment';
import IComment from '../../interfaces/IComment';
import IPropsCommentsList from "../../interfaces/IPropsCommentsList";
import { TitleSection } from '../StyledComponents/styledComponents';

const CommentsList: FC<IPropsCommentsList> = ({comments}: IPropsCommentsList): ReactElement => {

   return (
      <Fragment>
         {comments.nodes.length > 0 ? <TitleSection>*** Comments ***</TitleSection> : null}
         {comments.nodes.map((item: IComment) => (
            <Comment key={item.createdAt} comment={item}/>
         ))}
      </Fragment>
   )
}
export default CommentsList;
