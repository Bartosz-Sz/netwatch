import React from 'react';
import styles from './Monitor.module.scss';
import TopBar from '../TopBar';
import Sidebar from '../Sidebar';
import NetView from '../NetView';

function Monitor() {
  return (
    <div className={styles.frame}>
      <TopBar/>
      <div className={styles.main}>
        <NetView/>
        <Sidebar/>
      </div>
    </div>
  )
}

export default Monitor;
