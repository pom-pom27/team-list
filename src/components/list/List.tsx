import { User } from "../../util/dataType";
import useFetch from "../../util/hooks/useFetch";
import ListItem from "../list-item/ListItem";
import styles from "./list.module.scss";
interface IList {
  searchQuery: string;
}

const List = ({ searchQuery }: IList) => {
  const { data, error } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;
  if (data.length === 0) return <div>No match found</div>;

  return (
    <section className={styles.list}>
      {data
        .filter(
          (user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((user, index) =>
          user ? (
            <ListItem user={user} key={index} />
          ) : (
            <div>No match found</div>
          )
        )}
    </section>
  );
};

export default List;