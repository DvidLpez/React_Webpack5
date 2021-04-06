import React, { FC, Fragment, ReactElement } from "react";
import IIssue from '../../interfaces/IIssue';
import IPropsIssueList from "../../interfaces/IPropsIssueList";
import Issue from "../Issue/Issue";
import { faGrinBeamSweat } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Text } from "../StyledComponents/styledComponents";
import { WrapperNoResult, WrapperIssues, TextCount } from "./Styles";
import { inputVar, totalVar } from "../../cache";
import { useReactiveVar } from "@apollo/client";

const IssuesList: FC<IPropsIssueList> = ({data}: IPropsIssueList): ReactElement => {


   const { term } = useReactiveVar(inputVar);
   const  issueCount  = useReactiveVar(totalVar);
   const items: Array<IIssue> = data;

   return (
      <Fragment>
         { items.length == 0 && term.length > 0 
            ? 
               <WrapperNoResult>
                  <FontAwesomeIcon icon={faGrinBeamSweat} className="icon_sweat" />
                  <Text>Not found results to {term}</Text>
               </WrapperNoResult> 
            : (
               <Fragment>
                  <WrapperIssues>
                     {items.length > 0 ? <TextCount>Total issues: {issueCount}</TextCount> : null}
                     {items.map((item: IIssue) => (
                        <Issue key={item.number} data={item}/>   
                     ))}
                  </WrapperIssues>
               </Fragment>
            )}
      </Fragment>
   )
}
export default IssuesList;
