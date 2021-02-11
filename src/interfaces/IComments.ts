import IComment from "./IComment";

export default interface IComments {
   nodes: Array<IComment>;
   totalCount: number;
   __typename: string;
}