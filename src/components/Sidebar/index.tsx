import React from 'react';
import styles from './Sidebar.module.scss';

const Sidebar: React.FunctionComponent = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      { children }
    </div>
  )
}

export default Sidebar;
