import React from "react";
import PropTypes from "prop-types";
import styles from "./index.scss";

export default function Navigation({ links }) {
  return (
    <div className={styles.header}>
      <img src="https://acc.maimai.cn/images/logo_new.png" alt="logo" />
      <ul>
        {links.map(item => (
          <li key={item.href}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

Navigation.propTypes = {
  links: PropTypes.array
};

Navigation.defaultProps = {
  links: []
};
