import IComment from './IComment';

export default interface IPropsCommentsList {
   comments: {
      nodes: Array<IComment>;
      totalCount: number;
      _typeName?: string;
   }
}