import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken
  }
`;

export const getAccessToken = async () => {
  try {
    const graphQLClient = new GraphQLClient(
      "http://happyholidays-server.site:3000/graphql",
      {
        credentials: "include",
      }
    );
    const result = await graphQLClient.request<{ restoreAccessToken: string }>(
      RESTORE_ACCESS_TOKEN
    );
    const newAccessToken = result.restoreAccessToken;

    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
