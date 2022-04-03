import { MyProjects } from "components/pages";
import { H1, HeaderPage } from "components/ui";
import { useAppSelector } from "hooks";
import { currentUserSelector } from "redux/user";

const Home = () => {
  const currentUser = useAppSelector(currentUserSelector);

  return (
    <>
      <HeaderPage>
        <H1>Hello, {currentUser.name}</H1>
      </HeaderPage>
      <MyProjects />
    </>
  );
};

export function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}
export default Home;
