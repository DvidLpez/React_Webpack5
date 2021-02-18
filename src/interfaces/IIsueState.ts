import IIssue from "./IIssue";
import IPageInfo from './IPageInfo';

export default interface IIssuesState {
  data: Array<IIssue>;
  pageInfo: IPageInfo;
  term: string;
  status: string;
  loading: boolean;
  error: boolean;
}
