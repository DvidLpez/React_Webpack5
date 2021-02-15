import IAction from '../../interfaces/IAction';
import IIssuesState from '../../interfaces/IIsueState';
import { LOAD_ISSUES, KEEP_ISSUES_OK, KEEP_ISSUES_KO, KEEP_ISSUE_KO, KEEP_ISSUE_OK } from '../types';
import IIssue from '../../interfaces/IIssue';

const initialState: IIssuesState = {
   data: [],
   term: '',
   status: '',
   error: false,
   loading: false
}

interface INewState {
   data?: Array<IIssue>;
   term: string;
   status: string;
   error?: boolean;
   loading?: boolean;
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
        data: action.payload.result,
        term: action.payload.term,
        status: action.payload.status,
      };
    case KEEP_ISSUE_OK:
      return {
        ...state,
        loading: action.payload.loading,
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
