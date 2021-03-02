import React, { FC, Fragment, ReactElement, useEffect } from "react";
import { RouteComponentProps, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { loadIssueAction } from "../../redux/actions/issuesAction";
import ButtomHome from "../../components/ButtomHome/ButtomHome";
import CommentsList from "../../components/CommentsList/CommentsList";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import IAppState  from "../../interfaces/IAppState";
import IIssue from '../../interfaces/IIssue';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComments, faCalendarAlt, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
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
         dispatch(loadIssueAction(parseInt(number)));
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
                  <div className="box_info">
                     <div className="info">
                        <p className={issue.state.toLocaleLowerCase()}>{issue.state}</p>
                     </div>
                     <div className="info">
                        <FontAwesomeIcon icon={faUser} /> <p>{issue.author?.login}</p>
                     </div>
                     <div className="info">
                        <FontAwesomeIcon icon={faCalendarAlt} /><p> {moment(issue.createdAt).format('DD/MM/YYYY HH:mm')}</p>
                     </div>
                     <div className="info">
                        <FontAwesomeIcon icon={faComments} className="icon_comments" /><p> {issue.comments.totalCount} </p>
                     </div>
                     <div className="info">
                        <a href={issue.url} target="_blank" rel="noopener noreferrer">
                           <p>See in Github</p> <FontAwesomeIcon icon={faExternalLinkAlt} className="icon_brand" />
                        </a>
                     </div>
                  </div>
                  <h2>{issue.title} <span className="issue_number">#{issue.number}</span></h2>
                  <div className="comment_html" dangerouslySetInnerHTML={{ __html: issue.bodyHTML }} />
               </div>
               <h3 className="comment_section">*** Comments ***</h3>
               <CommentsList comments={issue.comments}/>
            </div>
         : null}
      </Fragment>
   )
}
export default CommentPage;
