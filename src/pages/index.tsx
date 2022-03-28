import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "modules/api";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => {
  // const { data, loading } = useQuery(GET_PROJECTS);
  // if (loading) return "loading";
  // console.log(data);

  return (
    <>
      <h1>My projects</h1>
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
