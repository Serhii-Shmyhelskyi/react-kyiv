import React, { FC, useState } from "react";

import { useSelector } from "react-redux";

import styles from "./footer.module.scss";
import { RootState } from "../../redux/store";

const Footer: FC = () => {
  const footerItemDetal = useSelector(
    (state: RootState) => state.footer.footerItemDetal
  );
  const footerItemBlog = useSelector(
    (state: RootState) => state.footer.footerItemBlog
  );
  const footerItemCompani = useSelector(
    (state: RootState) => state.footer.footerItemCompani
  );
  const footerItemKontack = useSelector(
    (state: RootState) => state.footer.footerItemKontack
  );

  const [toggleCompani, setToggleCompani] = useState(false);
  const [toggleDetal, setToggleDetal] = useState(false);
  const [toggleContacts, setToggleContacts] = useState(false);
  const [toggleBlog, setToggleBlog] = useState(false);

  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footer__items}>
            <div className={styles.footer__item}>
              <h5
                onClick={() => setToggleDetal(!toggleDetal)}
                className={
                  styles.footer__itemTitle + " " + styles.footer__itemTitleDetal
                }>
                ДЕТАЛІ
              </h5>
              <ul
                className={
                  styles.footer__itemList + " " + styles.footer__itemListDetal
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
                  styles.footer__itemTitle +
                  " " +
                  styles.footer__itemTitleContacts
                }>
                КОНТАКТИ
              </h5>
              <ul className={styles.footer__itemList}>
                {footerItemKontack.map((obj) => {
                  return (
                    <li
                      key={obj.name}
                      className={
                        toggleContacts
                          ? styles.footer__toggleDown
                          : styles.footer__togleUp
                      }>
                      <a className={styles.footer__itemLink} href="#">
                        <img
                          src={obj.imageUrlFooter}
                          alt="FooterIcon"
                          className={styles.footer__icon}
                        />
                        {obj.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div
              className={styles.footer__item + " " + styles.footer__itemBlog}>
              <h5
                onClick={() => setToggleBlog(!toggleBlog)}
                className={
                  styles.footer__itemTitle + " " + styles.footer__itemTitleBlog
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
            <div
              className={
                styles.footer__item + " " + styles.footer__itemCompany
              }>
              <h5
                onClick={() => setToggleCompani(!toggleCompani)}
                className={
                  styles.footer__itemTitle +
                  " " +
                  styles.footer__itemTitleCompany
                }>
                КОМПАНІЯ
              </h5>
              <ul
                className={
                  styles.footer__itemList + " " + styles.footer__itemListCompany
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
          </div>
          <div className={styles.footer__copy}>© 2023 Всі права захищені</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
