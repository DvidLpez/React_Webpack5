import React, {  FC, ReactElement } from "react";
import { Link } from 'react-router-dom';
import moment from "moment";
import { faComments, faUser, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IPropsIssue from '../../interfaces/IPropsIssue';
import { LineHr, Text } from '../StyledComponents/styledComponents';
import { TextSmall } from "../Comment/Styles";
import { Card, InfoBody, InfoComments, InfoHeader, StateIssue, TitleIssue, WrapperIssue, WrapperOpacity } from './Styles';

const cutString = (string:string, limit: number): string => {
   return string = (string.length > limit) ? `${string.substr(0, (limit-4))} ...` : string;
} 

const Item: FC<IPropsIssue> = (props: IPropsIssue): ReactElement => {

   const { number, title, bodyText, comments, state, author, createdAt } = props.data;

   return (
      <WrapperIssue>
         <Link to={`/issue/${number}`} >
            <Card>
               <InfoHeader>
                  <TitleIssue>{cutString(title, 70)}</TitleIssue>
                  <InfoComments>
                     <FontAwesomeIcon icon={faComments} /> {comments?.totalCount}
                  </InfoComments>
                  <StateIssue state={state.toLowerCase()}>{state}</StateIssue>
               </InfoHeader>
               <LineHr />
               <InfoBody>
                  <Text>{cutString(bodyText, 470)}</Text>
                  <WrapperOpacity />
               </InfoBody>
               <LineHr />
               <TextSmall position={"left"} ><FontAwesomeIcon icon={faUser} /> { author?.login }</TextSmall>
               <TextSmall position={"right"}><FontAwesomeIcon icon={faCalendarAlt} /> {moment(createdAt).format('DD/MM/YYYY HH:mm')}</TextSmall>  
            </Card>
         </Link>
      </WrapperIssue>
   )
}
export default Item;
