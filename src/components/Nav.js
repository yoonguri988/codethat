import Container from "./Container";
import UserMenu from "./UserMenu";
import logoImg from "../assets/logo.svg";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <img src={logoImg} alt="Codethat Logo" />
        </Link>
        <ul className={styles.menu}>
          <Link to="/courses">
            <li>카탈로그</li>
          </Link>
          <li>커뮤니티</li>
          <li>
            <UserMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
