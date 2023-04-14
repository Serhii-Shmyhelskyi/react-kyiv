import React, { useState } from "react";
import styles from "./footer.module.scss";

import {
  footerItemDetal,
  footerItemBlog,
  footerItemCompani,
  footerItemKontack,
} from "./FooterArr.jsx";

const useToggle = (initialState) => {
  const [toggleValue, setToggleValue] = useState(initialState);

  const toggler = () => {
    setToggleValue(!toggleValue);
  };
  return [toggleValue, toggler];
};

const Footer = () => {
  const [toggleCompani, setToggleCompani] = useToggle();
  const [toggleDetal, setToggleDetal] = useToggle();
  const [toggleContacts, setToggleContacts] = useToggle();
  const [toggleBlog, setToggleBlog] = useToggle();

  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footer__items}>
            <div className={(styles.footer__item, styles.footer__itemCompany)}>
              <h5
                onClick={setToggleCompani}
                className={
                  (styles.footer__itemTitle, styles.footer__itemTitleCompany)
                }>
                КОМПАНІЯ
              </h5>
              <ul
                className={
                  (styles.footer__itemList, styles.footer__itemListCompany)
                }>
                {toggleCompani &&
                  footerItemCompani.map((obj) => {
                    return (
                      <li key={obj}>
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
                onClick={setToggleDetal}
                className={
                  (styles.footer__itemTitle, styles.footer__itemTitleDetal)
                }>
                ДЕТАЛІ
              </h5>
              <ul
                className={
                  (styles.footer__itemList, styles.footer__itemListDetal)
                }>
                {toggleDetal &&
                  footerItemDetal.map((obj) => {
                    return (
                      <li key={obj}>
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
                onClick={setToggleContacts}
                className={
                  (styles.footer__itemTitle, styles.footer__itemTitleContacts)
                }>
                КОНТАКТИ
              </h5>
              <ul className={styles.footer__itemList}>
                {toggleContacts &&
                  footerItemKontack.map((obj) => {
                    return (
                      <li key={obj}>
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
                onClick={setToggleBlog}
                className={
                  (styles.footer__itemTitle, styles.footer__itemTitleBlog)
                }>
                БЛОГ
              </h5>
              <ul className={styles.footer__itemList}>
                {toggleBlog &&
                  footerItemBlog.map((obj) => {
                    return (
                      <li key={obj}>
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
