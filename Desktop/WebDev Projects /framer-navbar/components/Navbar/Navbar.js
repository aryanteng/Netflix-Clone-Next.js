import React, { useState } from "react";
import styles from "./styles.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { menuItems } from "./NavbarElements";
import { Example } from "../FramerNav/Example";

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLinks}>
        {/* <Example /> */}
        <div className={styles.navbarLinksLogo}>
          <h1>
            <a href="/">Logo</a>
          </h1>
        </div>
        <div className={styles.navbarLinksContainer}>
          {menuItems.map((item, i) => {
            return (
              <p key={i}>
                <a href={item.url}>{item.name}</a>
              </p>
            );
          })}
        </div>
      </div>
      <div className={styles.navbarSign}>
        <p>
          <a>Sign in</a>
        </p>
        <button className={styles.signupButton}>Sign Up</button>
      </div>
      <div className={styles.navbarMenu}>
        {click ? (
          <CloseIcon
            sx={{ color: "#000", fontSize: "1.8rem" }}
            onClick={() => setClick(!click)}
          />
        ) : (
          <MenuIcon
            sx={{ color: "#000", fontSize: "1.8rem" }}
            onClick={() => setClick(!click)}
          />
        )}
        {click && (
          <div className={styles.navbarMenuContainer}>
            {menuItems.map((item, i) => {
              return (
                <p key={i}>
                  <a href={item.url}>{item.name}</a>
                </p>
              );
            })}
            <div className={styles.navbarMenuSign}>
              <p>
                <a href="/">Sign in</a>
              </p>
              <button className={styles.signupButton}>Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
