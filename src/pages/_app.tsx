import type { AppProps } from "next/app";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { ThemeProvider } from "styled-components";
import { MainContainer } from "components/pages";
import GlobalStyle from "styles/theme/global";
import { lightTheme } from "styles/theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL,
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("token");
    return {
      headers: {
        ...headers,
        authorization: token ? token : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <MainContainer>
            <Component {...pageProps} />
          </MainContainer>
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
