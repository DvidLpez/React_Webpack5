import { SETTINGS } from "../settings/settings";
import client from "./githubapi";
import { GET_BACK_ISSUES_REACT, GET_ISSUES_REACT, GET_ISSUE_REACT } from "./githubquery";
import { DocumentNode } from "@apollo/client";
import { dataVar, errorVar, loadingVar, paginationVar, totalVar  } from "../cache";

export const LoadIssues = async (

  term: string,
  state: string,
  total: number,
  direction: string,
  cursor: string | null

  ): Promise<void> => {
  
  try {
    loadingVar(true);
    const { OWNER, NAME } = SETTINGS.API_GITHUB;
    const query = state
      ? `repo:${OWNER}/${NAME} is:issue in:title ${term} in:body ${term} sort:created-desc is:${state}`
      : `repo:${OWNER}/${NAME} is:issue in:title ${term} in:body ${term} sort:created-desc`;

    const GQL: DocumentNode =
      direction == "next" ? GET_ISSUES_REACT : GET_BACK_ISSUES_REACT;
    const { error, loading, data } = await client.query({
      query: GQL,
      variables: { query, total, cursor },
    });

    loadingVar(false);
    errorVar(false);
    dataVar(data.search.nodes);
    totalVar(data.search.issueCount);
    paginationVar(data.search.pageInfo);
  } catch (error) {
    console.log("error");

    // paginationVar(undefined);
    dataVar([]);
    totalVar(0);
    loadingVar(false);
    errorVar(true);
  }
};


export const loadNumberIssue = async (number: number):Promise<void> => {
   
   

    try {
       loadingVar(true);
      const { OWNER, NAME } = SETTINGS.API_GITHUB;

      const { loading, data } = await client.query({
        query: GET_ISSUE_REACT,
        variables: { number, owner: OWNER, name: NAME },
      });

      loadingVar(false);
      errorVar(false);
      dataVar([data.repository.issue]);
      totalVar(1);
     
    } catch (error) {
      console.log("error");
      // paginationVar(undefined);
      dataVar([]);
      loadingVar(false);
      errorVar(true);
     
    }

};
