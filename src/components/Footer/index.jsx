import React, { useState } from "react";
import styles from "./footer.module.scss";

import {
  footerItemDetal,
  footerItemBlog,
  footerItemCompani,
  footerItemKontack,
} from "./FooterArr.jsx";

const Footer = () => {
  const [toggleCompani, setToggleCompani] = useState();
  const [toggleDetal, setToggleDetal] = useState();
  const [toggleContacts, setToggleContacts] = useState();
  const [toggleBlog, setToggleBlog] = useState();

  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footer__items}>
            <div className={(styles.footer__item, styles.footer__itemCompany)}>
              <h5
                onClick={() => setToggleCompani(!toggleCompani)}
                className={
                  (styles.footer__itemTitle, styles.footer__itemTitleCompany)
                }>
                КОМПАНІЯ
              </h5>
              <ul
                className={
                  (styles.footer__itemList, styles.footer__itemListCompany)
                }>
                {footerItemCompani.map((obj) => {
                  return (
                    <li
                      key={obj}
                      className={
                        toggleCompani
                          ? styles.footer__toggleDown
                          : styles.footer__togleUp
                      }>
                      <a className={styles.footer__itemLink} href="#">
                        {obj}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.footer__item}>
              <h5
                onClick={() => setToggleDetal(!toggleDetal)}
                className={
                  (styles.footer__itemTitle, styles.footer__itemTitleDetal)
                }>
                ДЕТАЛІ
              </h5>
              <ul
                className={
                  (styles.footer__itemList, styles.footer__itemListDetal)
                }>
                {footerItemDetal.map((obj) => {
                  return (
                    <li
                      key={obj}
                      className={
                        toggleDetal
                          ? styles.footer__toggleDown
                          : styles.footer__togleUp
                      }>
                      <a className={styles.footer__itemLink} href="#">
                        {obj}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.footer__item}>
              <h5
                onClick={() => setToggleContacts(!toggleContacts)}
                className={
                  (styles.footer__itemTitle, styles.footer__itemTitleContacts)
                }>
                КОНТАКТИ
              </h5>
              <ul className={styles.footer__itemList}>
                {footerItemKontack.map((obj) => {
                  return (
                    <li
                      key={obj}
                      className={
                        toggleContacts
                          ? styles.footer__toggleDown
                          : styles.footer__togleUp
                      }>
                      <a className={styles.footer__itemLink} href="#">
                        {obj}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={(styles.footer__item, styles.footer__itemBlog)}>
              <h5
                onClick={() => setToggleBlog(!toggleBlog)}
                className={
                  (styles.footer__itemTitle, styles.footer__itemTitleBlog)
                }>
                БЛОГ
              </h5>
              <ul className={styles.footer__itemList}>
                {footerItemBlog.map((obj) => {
                  return (
                    <li
                      key={obj}
                      className={
                        toggleBlog
                          ? styles.footer__toggleDown
                          : styles.footer__togleUp
                      }>
                      <a className={styles.footer__itemLink} href="#">
                        {obj}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={styles.footer__copy}>© 2020 Всі права захищені</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

// {toggleCompani
//   ? footerItemCompani.map((obj) => {
//       return (
//         <li key={obj} className={styles.toggle}>
//           <a className={styles.footer__itemLink} href="#">
//             {obj}
//           </a>
//         </li>
//       );
//     })
//   : footerItemCompani.map((obj) => {
//       return (
//         <li key={obj} className={styles.antitogle}>
//           <a className={styles.footer__itemLink} href="#">
//             {obj}
//           </a>
//         </li>
//       );
//     })}
