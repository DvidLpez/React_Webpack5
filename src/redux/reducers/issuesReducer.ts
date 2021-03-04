import { LOAD_ISSUES, KEEP_ISSUES_OK, KEEP_ISSUES_KO, KEEP_ISSUE_KO, KEEP_ISSUE_OK } from '../types';
// Interfaces
import IAction from '../../interfaces/IAction';
import IIssuesState from '../../interfaces/IIsueState';
import INewState from '../../interfaces/INewState';

const initialState: IIssuesState = {
   data: [],
   issueCount: 0,
   pageInfo: {
     endCursor: null,
     hasNextPage: false,
     hasPreviousPage: false,
     startCursor: null
   },
   term: '',
   status: '',
   error: false,
   loading: false
}

export default (state = initialState, action: IAction): INewState => {
  switch (action.type) {
    case LOAD_ISSUES:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case KEEP_ISSUES_OK:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
        data: action.payload.result,
        issueCount: action.payload.issueCount,
        term: action.payload.term,
        pageInfo: action.payload.pageInfo,
        status: action.payload.status,
      };
    case KEEP_ISSUE_OK:
      return {
        ...state,
        loading: action.payload.loading,
        issueCount: action.payload.issueCount,
        data: action.payload.result,
      };
    case KEEP_ISSUES_KO:
    case KEEP_ISSUE_KO:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
