import Body from "../../components/body/Body";
import Header from "../../components/header/Header";
import List from "../../components/list/List";
import Search from "../../components/search/Search";
import styles from "./homepage.module.scss";
interface IHomepage {}

const Homepage = ({}: IHomepage) => {
  return (
    <div className={styles.homepage}>
      <Header />
      <Body />
    </div>
  );
};

export default Homepage;
