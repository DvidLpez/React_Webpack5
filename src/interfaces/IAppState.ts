import IIssuesState from './IIsueState';

export default interface IAppState {
  issues: IIssuesState,
  loading: boolean;
  error: boolean;
}
