import { SETTINGS } from "../settings/settings";
import { GET_BACK_ISSUES_REACT, GET_ISSUES_REACT, GET_ISSUE_REACT } from "./githubquery";
import { DocumentNode } from "@apollo/client";
import client from "./githubapi";
import { dataVar, errorVar, loadingVar, paginationVar, totalVar  } from "../cache";
/**
 * Load Issues by term and status
 *  
 * @param term term to search
 * @param state state of issue
 * @param total total paginate
 * @param direction after or before the cursor
 * @param cursor String ID
 */
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
    const { data } = await client.query({
      query: GQL,
      variables: { query, total, cursor },
    });

    setTimeout(() => {
      loadingVar(false);
    }, 200);
    
    errorVar(false);
    dataVar(data.search.nodes);
    totalVar(data.search.issueCount);
    paginationVar(data.search.pageInfo);
  } catch (error) {
    console.log("error");
    setErrorState();
  }
};

/**
 * Search issue number in github
 * 
 * @param number Number of issue
 */
export const loadNumberIssue = async (number: number):Promise<void> => {
   
  try {
    loadingVar(true);
    const { OWNER, NAME } = SETTINGS.API_GITHUB;

    const { data } = await client.query({
      query: GET_ISSUE_REACT,
      variables: { number, owner: OWNER, name: NAME },
    });

    loadingVar(false);
    errorVar(false);
    dataVar([data.repository.issue]);
    totalVar(1);
    
  } catch (error) {
    console.log("error");
    setErrorState();
  }

};

/**
 * Set error local state
 */
const setErrorState = () => {
  paginationVar({
    endCursor: null,
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: null,
  });
  dataVar([]);
  totalVar(0);
  loadingVar(false);
  errorVar(true);
}
