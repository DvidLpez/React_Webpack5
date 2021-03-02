import React, {  FC, ReactElement } from "react";
import { Link } from 'react-router-dom';
import moment from "moment";
import { faComments, faUser, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IPropsIssue from '../../interfaces/IPropsIssue';
import './Issue.scss';

const cutString = (string:string, limit: number): string => {
   return string = (string.length > limit) ? `${string.substr(0, (limit-4))} ...` : string;
} 

const Item: FC<IPropsIssue> = (props: IPropsIssue): ReactElement => {

   const { number, title, bodyText, comments, state, author, createdAt } = props.data;

   return (
      <div className="box-issue-middle box-issue-short">
         <Link to={`/issue/${number}`} >
            <div className="wrapper_issue">
               <div className="card_header">
                  <div className="box">
                     <div className="box-title-large box-title-short">
                        <b className="title">{cutString(title, 55)}</b>
                     </div>
                     <div className=" box-comment-short box-comment-large">
                        <div className="total_comments">
                           <FontAwesomeIcon icon={faComments} className="icon_comments" />
                           {comments?.totalCount}
                           <b className={state.toLowerCase()}>{state}</b>
                        </div>
                     </div>
                  </div>
               </div>
               <hr />
               <div className="card_body">
                  <p>{cutString(bodyText, 500)}</p>
                  <div className="opacity_text"></div>
               </div>
               <div className="card_footer">
                  <div className="box">
                     <div className="box-middle">
                        <p className="author"><FontAwesomeIcon icon={faUser} /> { author?.login }</p>
                     </div>
                     <div className="box-middle">
                        <p className="date"><FontAwesomeIcon icon={faCalendarAlt} /> {moment(createdAt).format('DD/MM/YYYY HH:mm')}</p>
                     </div>
                  </div>
               </div>
            </div>
         </Link>
      </div>
   )
}
export default Item;
