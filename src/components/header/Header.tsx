import styles from "./header.module.scss";
interface IHeader {}

const Header = ({}: IHeader) => {
  return <header className={styles.header}>Team List</header>;
};

export default Header;
