import { User } from "../../util/dataType";
import styles from "./list-item.module.scss";
interface IListItem {
  user: User;
}

const ListItem = ({ user }: IListItem) => {
  return (
    <div tabIndex={0} className={styles["list-item"]}>
      <div className={styles.name}>{user.name}</div>
      <div>
        <div>
          Telp: <a href={`tel:${user.phone}`}>{user.phone}</a>
        </div>
      </div>
      <div>
        <div>
          Email: <a href={`mailto:${user.email}`}>{user.email}</a>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
