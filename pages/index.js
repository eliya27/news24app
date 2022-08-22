import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Toolbar from "../components/toolbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="pageContainer">
      <Toolbar />
      <div className={styles.main}>
        <h1>News24 web</h1>
        <p>
          We got you covered for all the latest News around the globe, we have
          an API that fetch data from all over the world spanning from Sports,
          Entertainment, Politics, Culture..
        </p>
        <h2>
          <Link href="/feed/1">Feeds</Link>
        </h2>
      </div>
    </div>
  );
}
