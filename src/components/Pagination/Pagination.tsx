import React, { FC, Fragment, ReactElement } from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { loadIssuesAction } from "../../redux/actions/issuesAction";
import IAppState from "../../interfaces/IAppState";
import { WrapperPaginate, ButtonPaginate } from './Styles';

const Pagination: FC = (): ReactElement => {

   const { term, status, pageInfo, data, loading } = useSelector((state: IAppState) => state.issues);
   const { hasPreviousPage, hasNextPage } = pageInfo;

   const dispatch = useDispatch();

   // Funtion to paginate issues
   const moreItems = (e: string) => {
      if (e === 'prev') {
         dispatch(loadIssuesAction(term, status, 9, 'prev', pageInfo.startCursor));
      } else {
         dispatch(loadIssuesAction(term, status, 9, 'next', pageInfo.endCursor));
      }
   }

   return (
      <Fragment>
         { data.length > 0 && loading == false
            ?
            <WrapperPaginate>
               {hasPreviousPage
                  ? <ButtonPaginate disabled={!hasPreviousPage} onClick={() => moreItems('prev')}>
                        <FontAwesomeIcon icon={faAngleLeft} /> Previous page
                     </ButtonPaginate>
                  : null
               }
               {hasNextPage
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
