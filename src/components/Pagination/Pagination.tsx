import React, { FC, Fragment, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadIssuesAction } from "../../redux/actions/issuesAction";
import IAppState from "../../interfaces/IAppState";

import "./Pagination.scss";


const Pagination: FC = (): ReactElement => {

   const { term, status, pageInfo, data, loading } = useSelector((state: IAppState) => state.issues);
   const {hasPreviousPage, hasNextPage} = pageInfo;

   const dispatch = useDispatch();
   const moreItems = (e: string) => {
      if (e === 'prev') {
         const loadIssuesAPI = () => dispatch(loadIssuesAction(term, status, 9, 'prev', pageInfo.startCursor));
         loadIssuesAPI();
      } else {
         const loadIssuesAPI = () => dispatch(loadIssuesAction(term, status, 9, 'next', pageInfo.endCursor));
         loadIssuesAPI();
      }
   }

   return (
      <Fragment>
         { data.length > 0 && loading == false 
            ? 
               <div className="paginate">
                  {  hasPreviousPage 
                        ? <button className="prev_button" disabled={!hasPreviousPage} onClick={() => moreItems('prev')}>Previous page</button>
                        : null
                  }
                  {  hasNextPage 
                        ? <button className="next_button" disabled={!hasNextPage} onClick={() => moreItems('next')}> Next page</button>
                        : null
                  }
               </div> 
            : 
               null
         }
      </Fragment>
   )
}
export default Pagination;
