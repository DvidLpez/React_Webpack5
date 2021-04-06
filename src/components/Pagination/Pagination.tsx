import React, { FC, Fragment, ReactElement } from "react";
import { faAngleLeft , faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WrapperPaginate, ButtonPaginate } from './Styles';
import { inputVar, loadingVar, dataVar, paginationVar } from '../../cache';
import { useReactiveVar } from "@apollo/client";
import { LoadIssues } from "../../graphql/manage";

const Pagination: FC = (): ReactElement => {
   
   const data = useReactiveVar(dataVar);
   const loading = useReactiveVar(loadingVar);
   const { term, status } = useReactiveVar(inputVar);
   const { hasPreviousPage, hasNextPage, startCursor, endCursor} = useReactiveVar(paginationVar);
  
   const moreItems = (e: string) => {
      if (e === 'prev') {
         LoadIssues(term, status, 9, 'prev', startCursor);
      } else {
         LoadIssues(term, status, 9, 'next', endCursor);
      }
   }
   return (
      <Fragment>
         { data.length > 0 && loading == false 
            ? 
            <WrapperPaginate>
                  {  hasPreviousPage 
                  ? <ButtonPaginate disabled={!hasPreviousPage} onClick={() => moreItems('prev')}>
                        <FontAwesomeIcon icon={faAngleLeft} /> Previous page
                     </ButtonPaginate>
                        : null
                  }
                  {  hasNextPage 
                        ? <ButtonPaginate disabled={!hasNextPage} onClick={() => moreItems('next')}> 
                        Next page <FontAwesomeIcon icon={faAngleRight} />
                           </ButtonPaginate>
                        : null
                  }
            </WrapperPaginate> 
            : 
               null
         }
      </Fragment>
   )
}
export default Pagination;
