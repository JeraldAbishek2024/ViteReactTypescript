// import React from "react";
import styles from "../css/style.module.css";
import viteLogo from "/vite.svg";

export default function Header() {
  return (
    <div className={styles.navBar}>
      {/* <img src="" alt="" srcset="" /> */}
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>
      <div>
        <a href="http://" className={styles.navLink}>
          Discover
        </a>
        <a href="http://" className={styles.navLink}>
          Institutions
        </a>
        <a href="http://" className={styles.navLink}>
          FAQ
        </a>
        <a href="http://" className={styles.navLink}>
          Contact
        </a>
        <a href="http://" className={styles.navLink}>
          Help
        </a>
      </div>
      <div>
        <button type="button" className={styles.btn}>
          <p className={styles.btn_label}>Log in</p>
          <img
            className={styles.btn_arrow}
            src="https://cdn.prod.website-files.com/67779eba7fda397cbeb2065e/67779eba7fda397cbeb206f8_cta-arrow-black.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
