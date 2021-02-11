import IComments from './IComments';

export default interface IIssue {
  state: string;
  title: string;
  body: string;
  bodyText: string;
  bodyHTML: string;
  number: number;
  url: string;
  comments: IComments;
  createdAt: string;
  author: {
    login: string;
  };
}
