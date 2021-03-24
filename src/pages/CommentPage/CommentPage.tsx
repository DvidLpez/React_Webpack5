import React, { FC, Fragment, ReactElement, useEffect } from "react";
import { RouteComponentProps, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComments, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { loadIssueAction } from "../../redux/actions/issuesAction";
import ButtomHome from "../../components/ButtomHome/ButtomHome";
import CommentsList from "../../components/CommentsList/CommentsList";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import IAppState  from "../../interfaces/IAppState";
import IIssue from '../../interfaces/IIssue';
import { Wrapper, Span, Text, Subtitle, LineHr } from "../../components/StyledComponents/styledComponents";
import { Info, WrapperInfo, WrapperProblem, TextState} from "./Styles";

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
               <Wrapper>
                  <WrapperProblem>
                     <WrapperInfo>
                        <Info>
                           <TextState state={issue.state.toLocaleLowerCase()}>{issue.state}</TextState>
                        </Info>
                        <Info>
                           <FontAwesomeIcon icon={faUser} /> <Text>{issue.author?.login}</Text>
                        </Info>
                        <Info>
                           <FontAwesomeIcon icon={faCalendarAlt} /><Text> {moment(issue.createdAt).format('DD/MM/YYYY HH:mm')}</Text>
                        </Info>
                        <Info>
                           <FontAwesomeIcon icon={faComments} /><Text> {issue.comments.totalCount} </Text>
                        </Info>
                        <Info>
                           <a href={issue.url} target="_blank" rel="noreferrer">
                           <FontAwesomeIcon icon={faExternalLinkAlt} /> <Text>See in Github</Text> 
                           </a>
                        </Info>
                     </WrapperInfo>
                     <LineHr />
                     <Subtitle>{issue.title} <Span>#{issue.number}</Span></Subtitle>
                     <div className="comment_html" dangerouslySetInnerHTML={{ __html: issue.bodyHTML }} />
                  </WrapperProblem>
                  <CommentsList comments={issue.comments}/>
               </Wrapper>
         : null}
      </Fragment>
   )
}
export default CommentPage;
