import IIssue from "./IIssue";

export default interface IPayload {
   result?: Array<IIssue>;
   term?: string;
   status?: string;
   loading?: boolean;
   error?: boolean;
}
