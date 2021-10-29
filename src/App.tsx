import { Main } from "container/main/Main";
import { MainWrapper } from "container/main/MainWrapper";
import { Layout } from "components/layout/Layout";
import { AppContextProvider } from "container/contextProvider/AppContextProvider";

function App() {
  return (
    <AppContextProvider>
      <Layout>
        <MainWrapper>
          <Main />
        </MainWrapper>
      </Layout>
    </AppContextProvider>
  );
}

export default App;
