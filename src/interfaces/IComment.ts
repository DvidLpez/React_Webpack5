export default interface IComment {
   body: string;
   bodyHTML: string;
   author: {
      login: string;
   }
   createdAt: string;
   __typename?: string;
}