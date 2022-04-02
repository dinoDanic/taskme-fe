import { MyProjects } from "components/pages/projects";

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
