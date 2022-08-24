import { ChangeEvent, useState } from "react";
import List from "../list/List";
import Search from "../search/Search";
import styles from "./body.module.scss";
interface IBody {}

const Body = ({}: IBody) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <main className={styles.body}>
      <Search onChange={onChange} />
      <List searchQuery={searchQuery} />
    </main>
  );
};

export default Body;
