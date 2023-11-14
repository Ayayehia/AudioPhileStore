import styles from "../assets/Css/Footer.module.css";
import Logo from "/Images/audiophileLogo.png";
import facebook from "/home/desktop/facebook.svg";
import twitter from "/home/desktop/Twitter.svg";
import instgram from "/home/desktop/instgram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <section>
        <img className={styles.img} src={Logo} />
        <nav className={styles.navList}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category/headPhones">HeadPhones</Link>
            </li>
            <li>
              <Link to="/category/speakers">Speakers</Link>
            </li>
            <li>
              <Link to="/category/earphones">EarPHones</Link>
            </li>
          </ul>
        </nav>
        <p className={styles.describtion}>
          Audiophile is an all in one stop to fulfill your audio needs. Were a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className={styles.copyright}>Copyright 2021. All Rights Reserved</p>
      </section>

      <nav className={styles.logoList}>
        <ul className={styles.logoList}>
          <li>
            <img src={facebook} />
          </li>
          <li>
            <img src={twitter} />
          </li>
          <li>
            <img src={instgram} />
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
