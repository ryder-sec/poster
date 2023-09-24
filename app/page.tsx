import styles from "../styles/Home.module.css";

export const metadata = {
  title: "Coming Soon",
  description:
    "The simplest blue bird social media clone, for free, and open source.",
};

function Home() {
  return (
    <div className={styles.container}>
      <h1>Coming Soon</h1>
      <p>
        The simplest blue bird social media clone, <u>free</u> and{" "}
        <u>open source</u>.
      </p>
    </div>
  );
}

export default Home;
