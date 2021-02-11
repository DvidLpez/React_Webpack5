import { gql } from "@apollo/client";

export const GET_ISSUES_REACT = gql`
  query($query: String!, $total: Int!) {
    search(query: $query, type: ISSUE, last: $total) {
      pageInfo {
        endCursor,
        hasNextPage,
        hasPreviousPage,
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

export const GET_ISSUE_REACT = gql`
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
