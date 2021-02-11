import IIssue from './IIssue';

export default interface IAction {
   type: string;
   payload: {
      result?: Array<IIssue>;
      term: string;
      status: string;
      loading?: boolean;
      error?: boolean;
   }
}
