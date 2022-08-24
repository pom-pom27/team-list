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

  const filteredList = data?.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery) ||
      user.email.toLowerCase().includes(searchQuery)
  );

  if (error) return <div>{error.message}</div>;
  if (!filteredList) return <div>Loading...</div>;
  if (filteredList?.length === 0) return <div>No match found</div>;

  return (
    <section className={styles.list}>
      {filteredList
        .filter(
          (user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((user, index) => (
          <ListItem user={user} key={index} />
        ))}
    </section>
  );
};

export default List;
