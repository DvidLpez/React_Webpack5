import React, { FC, Fragment, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentsList from "../../components/CommentsList/CommentsList";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import IAppState  from "../../interfaces/IAppState";
import IIssue from '../../interfaces/IIssue';
import { loadIssueAction } from "../../redux/actions/issuesAction";
import { RouteComponentProps, useLocation } from "react-router-dom";
import ButtomHome from "../../components/ButtomHome/ButtomHome";
import './CommentPage.scss';

type TCommentsParams = {
   number: string;
}

const CommentPage: FC<RouteComponentProps<TCommentsParams>> = ({ match }: RouteComponentProps<TCommentsParams>): ReactElement => {
   
   const { pathname } = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   const number = match.params.number;
   const { data, error, loading } = useSelector((state: IAppState) => state.issues);
   const issue: IIssue = data.filter((issue: IIssue) => issue.number == parseInt(number) )[0];
   
   const dispatch = useDispatch();

   useEffect(() => {

      if (!issue) {
         const loadIssueAPI = () => dispatch(loadIssueAction(parseInt(number)));
         loadIssueAPI();
      }

   }, [dispatch, issue, number]);

   return (
      <Fragment>
         <Header title="Issue comments"/>
         <ButtomHome />
         { error ? <Error />: null }
         { loading ? <Loading /> : null }
         { issue ?
            <div className="wrapper wrapper_comments">
               <div className="problem">
                  <h2>{issue.title}</h2>
                  <h3>Issue description</h3>
                  <div className="comment_html" dangerouslySetInnerHTML={{ __html: issue.bodyHTML }} />
               </div>
               <h3 className="comment_section">Issue comments</h3>
               <CommentsList comments={issue.comments}/>
            </div>
         : null}
      </Fragment>
   )
}
export default CommentPage;
