import { Dispatch } from "react";
import client from "../../provider/githubapi";
import { GET_ISSUES_REACT, GET_ISSUE_REACT, GET_BACK_ISSUES_REACT } from "../../provider/githubquery";
import { SETTINGS } from "../../settings/settings";
import { LOAD_ISSUES, KEEP_ISSUES_OK, KEEP_ISSUES_KO, KEEP_ISSUE_KO, KEEP_ISSUE_OK } from "../types";
import IIssue from "../../interfaces/IIssue";
import IPayload from '../../interfaces/IPayload';
import IPageInfo from '../../interfaces/IPageInfo';


interface IDispatchProps {
   type: string;
}

export const loadIssuesAction = (term: string, state: string, total: number, direction: string, cursor: string | null) => {
   return async (dispatch: Dispatch<IDispatchProps>): Promise<void> => {

      dispatch(launchDispatch(LOAD_ISSUES, { loading: true }));

      try {
         const { OWNER, NAME } = SETTINGS.API_GITHUB;
         const query = state
           ? `repo:${OWNER}/${NAME} is:issue in:title ${term} in:body ${term} sort:created-desc is:${state}`
           : `repo:${OWNER}/${NAME} is:issue in:title ${term} in:body ${term} sort:created-desc`;

         const GQL = direction == 'next' ? GET_ISSUES_REACT : GET_BACK_ISSUES_REACT;
         
         const { loading, data } = await client.query({
           query: GQL,
           variables: { query, total, cursor },
         });

         const result: Array<IIssue> = data.search.nodes;
         const pageInfo: IPageInfo = data.search.pageInfo;
         dispatch(launchDispatch(KEEP_ISSUES_OK, { term, status: state, loading: loading, pageInfo: pageInfo, error: false, result }));

      } catch (error) {
         dispatch(launchDispatch(KEEP_ISSUES_KO, { loading: false, error: true }));
      }
   };
};


export const loadIssueAction = (number: number) => {
   return async (dispatch: Dispatch<IDispatchProps>): Promise<void> => {

      dispatch(launchDispatch(LOAD_ISSUES, { loading: true }));

      try {
         const { OWNER, NAME } = SETTINGS.API_GITHUB;

         const {loading, data } = await client.query({
            query: GET_ISSUE_REACT,
            variables: { number, owner: OWNER, name: NAME },
         });

         const result: Array<IIssue> = [data.repository.issue];
         dispatch(launchDispatch(KEEP_ISSUE_OK, { loading, error: false, result }));
         
      } catch (error) {
         dispatch(launchDispatch(KEEP_ISSUE_KO, { loading: false, error: true }));
      }
   };
};

const launchDispatch = (type: string, payload: IPayload) => ({ type, payload });
