import React, { FC, Fragment, ReactElement } from "react";
import { useSelector } from "react-redux";
import IAppState from "../../interfaces/IAppState";
import IIssue from '../../interfaces/IIssue';
import IPropsIssueList from "../../interfaces/IPropsIssueList";
import Issue from "../Issue/Issue";
import './IssuesList.scss';

const IssuesList: FC<IPropsIssueList> = ({data}: IPropsIssueList): ReactElement => {

   const items:Array<IIssue> = data;
   const term = useSelector( (state:IAppState) => state.issues.term);
   
   return (
      <Fragment>
         { items.length == 0 && term.length > 0 
            ? 
               <div className="no_results">
                  <p>Not found results to {term}</p>
               </div> 
            : (
               <div className="box">
                  {items.map((item: IIssue) => (
   
                     <Issue key={item.number} data={item}/>   
                  ))}
               </div>
            )}
      </Fragment>
   )
}
export default IssuesList;
