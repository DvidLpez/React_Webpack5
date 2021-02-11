import IIssue from "./IIssue";

export default interface IIssuesState {
  data: Array<IIssue>;
  term: string;
  status: string;
  loading: boolean;
  error: boolean;
}
