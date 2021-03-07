import React from 'react';
import logo from '../../logo.svg';
import styles from './TopBar.module.scss';

function TopBar() {
  return (
    <div className={styles.wrapper}>
      <img src={logo} className={styles.logo} alt="logo" />
      <div>Hello from TopBar!</div>
    </div>
  )
}

export default TopBar;
