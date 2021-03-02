import React, { FC, Fragment, ReactElement } from "react";
import { useSelector } from "react-redux";
import IAppState from "../../interfaces/IAppState";
import IIssue from '../../interfaces/IIssue';
import IPropsIssueList from "../../interfaces/IPropsIssueList";
import Issue from "../Issue/Issue";
import { faGrinBeamSweat } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './IssuesList.scss';

const IssuesList: FC<IPropsIssueList> = ({data}: IPropsIssueList): ReactElement => {

   const items:Array<IIssue> = data;
   const {term, issueCount} = useSelector( (state:IAppState) => state.issues);
   
   return (
      <Fragment>
         { items.length == 0 && term.length > 0 
            ? 
               <div className="no_results">
                  <FontAwesomeIcon icon={faGrinBeamSweat} className="icon_sweat" />
                  <p>Not found results to {term}</p>
               </div> 
            : (
               <Fragment>
               { items.length > 0 ? <h3>Total issues: {issueCount}</h3> : null }
               <div className="box">
                  {items.map((item: IIssue) => (
                     <Issue key={item.number} data={item}/>   
                  ))}
               </div>
               </Fragment>
            )}
      </Fragment>
   )
}
export default IssuesList;
