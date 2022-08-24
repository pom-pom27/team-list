import { ChangeEvent, SyntheticEvent } from "react";
import styles from "./search.module.scss";
interface ISearch {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ onChange }: ISearch) => {
  const handleForm = (e: SyntheticEvent) => {
    //disable refresh on submit/enter
    e.preventDefault();
  };

  return (
    <section>
      <form onSubmit={handleForm} className={styles.search}>
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
