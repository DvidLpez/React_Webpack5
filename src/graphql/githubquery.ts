import { DocumentNode, gql } from "@apollo/client";

/**
 * GQL to search issues since cursor if is available
 */
export const GET_ISSUES_REACT: DocumentNode = gql`
  query($query: String!, $total: Int!, $cursor: String) {
    search(query: $query, type: ISSUE, last: $total, after: $cursor) {
      issueCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      nodes {
        ... on Issue {
          number
          title
          body
          bodyText
          bodyHTML
          url
          state
          author {
            login
          }
          createdAt
          comments(last: 30) {
            nodes {
              body
              bodyHTML
              author {
                login
              }
              createdAt
            }
            totalCount
          }
        }
      }
    }
  }
`;

/**
 * GQL to search issues before  cursor
 */
export const GET_BACK_ISSUES_REACT: DocumentNode = gql`
  query($query: String!, $total: Int!, $cursor: String) {
    search(query: $query, type: ISSUE, last: $total, before: $cursor) {
      issueCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      nodes {
        ... on Issue {
          number
          title
          body
          bodyText
          bodyHTML
          url
          state
          author {
            login
          }
          createdAt
          comments(last: 30) {
            nodes {
              body
              bodyHTML
              author {
                login
              }
              createdAt
            }
            totalCount
          }
        }
      }
    }
  }
`;

/**
 * GQL to search issues number
 */
export const GET_ISSUE_REACT: DocumentNode = gql`
  query($number: Int!, $owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      issue(number: $number) {
        number
        title
        body
        bodyText
        bodyHTML
        url
        state
        author {
          login
        }
        createdAt
        comments(last: 30) {
          nodes {
            body
            bodyHTML
            author {
              login
            }
            createdAt
          }
          totalCount
        }
      }
    }
  }
`;
