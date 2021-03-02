import IIssue from "./IIssue";
import IPageInfo from './IPageInfo';

export default interface IPayload {
  result?: Array<IIssue>;
  issueCount?: number;
  term?: string;
  pageInfo?: IPageInfo;
  status?: string;
  loading?: boolean;
  error?: boolean;
}
