import { InMemoryCache, makeVar, ReactiveVar } from "@apollo/client";
import IInputSearch  from "./interfaces/IInputSearch";
import IIssue from "./interfaces/IIssue";
import IPageInfo from './interfaces/IPageInfo';



// Set initial local state
export const loadingVar: ReactiveVar<boolean> = makeVar<boolean>(false);
export const errorVar: ReactiveVar<boolean> = makeVar<boolean>(false);
export const dataVar: ReactiveVar<IIssue[]> = makeVar<IIssue[]>([]);
export const totalVar: ReactiveVar<number> = makeVar<number>(0);
export const paginationVar: ReactiveVar<IPageInfo> = makeVar<IPageInfo>({
  endCursor: null,
  hasNextPage: false,
  hasPreviousPage: false,
  startCursor: null,
});

export const inputVar: ReactiveVar<IInputSearch> = makeVar<IInputSearch>({
  term: "",
  status: "",
});


// Set local state in cache (NOT FINISH YET) 
export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getinputVar: {
          read() {
            return inputVar();
          },
        },
        getLoadingVar: {
          read() {
            return loadingVar();
          },
        },
        getErrorVar: {
          read() {
            return errorVar();
          },
        },
        getDataVar: {
          read() {
            return dataVar();
          },
        },
        getPaginationVar: {
          read() {
            return paginationVar();
          },
        },
      },
    },
  },
});
