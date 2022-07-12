import { TokenRefreshLink } from "apollo-link-token-refresh";
import * as jwt from "jsonwebtoken";
import { render } from "react-dom";
import "./index.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/react-hooks";
import { setContext } from "@apollo/client/link/context";
import { getAccessToken, setAccessToken } from "./accessToken";
import App from "./App";

const authLink = setContext((_, { headers }) => {
  const token = getAccessToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(
    new TokenRefreshLink({
      accessTokenField: "accessToken",
      isTokenValidOrUndefined: () => {
        const token = getAccessToken();

        if (!token) {
          return true;
        }

        try {
          const { exp } = jwt.decode(token) as {
            exp: number;
          };
          if (Date.now() >= exp * 1000) {
            return false;
          }
          return true;
        } catch (err) {
          console.error(err);
          return false;
        }
      },
      //https://stg-kpop.herokuapp.com/
      fetchAccessToken: () => {
        return fetch("/refresh_token", {
          method: "POST",
          credentials: "include",
        });
      },
      handleFetch: (accessToken: any) => {
        setAccessToken(accessToken);
      },
      handleError: (err: any) => {
        console.warn("Your refresh token is invalid. Try to relogin");
        console.error(err);
      },
    })
  ),
  credentials: "include",
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
