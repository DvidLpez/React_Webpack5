import { Dispatch } from "react";
import client from "../../provider/githubapi";
import { GET_ISSUES_REACT, GET_ISSUE_REACT } from "../../provider/githubquery";
import { SETTINGS } from "../../settings/settings";
import { LOAD_ISSUES, KEEP_ISSUES_OK, KEEP_ISSUES_KO, KEEP_ISSUE_KO, KEEP_ISSUE_OK } from "../types";
import IIssue from "../../interfaces/IIssue";
import IPayload from '../../interfaces/IPayload';


interface IDispatchProps {
   type: string;
}

export const loadIssuesAction = (term: string, state: string, total: number) => {
   return async (dispatch: Dispatch<IDispatchProps>): Promise<void> => {

      dispatch(launchDispatch(LOAD_ISSUES, { loading: true }));

      try {
         const { OWNER, NAME } = SETTINGS.API_GITHUB;
         const query = state
           ? `repo:${OWNER}/${NAME} is:issue in:title ${term} in:body ${term} sort:created-desc is:${state}`
           : `repo:${OWNER}/${NAME} is:issue in:title ${term} in:body ${term} sort:created-desc`;

         const { loading, data } = await client.query({
            query: GET_ISSUES_REACT,
            variables: { query, total },
         });
         // console.log(data);
         const result: Array<IIssue> = data.search.nodes;
         dispatch(launchDispatch(KEEP_ISSUES_OK, { term, status: state, loading, error: false, result }));
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
