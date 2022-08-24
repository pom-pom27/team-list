import { ChangeEvent } from "react";
import styles from "./search.module.scss";
interface ISearch {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ onChange }: ISearch) => {
  return (
    <section>
      <form action="#" className={styles.search}>
        <input
          onChange={onChange}
          type="text"
          tabIndex={0}
          placeholder="Search by names or email"
        />
      </form>
    </section>
  );
};

export default Search;
