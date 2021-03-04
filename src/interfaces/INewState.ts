import IIssue from "./IIssue";
import IPageInfo from "./IPageInfo";

export default interface INewState {
  data: Array<IIssue> | undefined;
  issueCount: number;
  term: string;
  pageInfo: IPageInfo;
  status: string;
  error: boolean | undefined;
  loading: boolean | undefined;
}
