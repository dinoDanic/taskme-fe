import { MyProjects } from "components/pages";

const Home = () => {
  return (
    <>
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
