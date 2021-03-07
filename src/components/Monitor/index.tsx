import React from 'react';
import styles from './Monitor.module.scss';
import TopBar from '../TopBar';
import Sidebar from '../Sidebar';
import NetView from '../NetView';

function Monitor() {
  return (
    <div className={styles.frame}>
      <div className="topBar">
        <TopBar/>
      </div>
      <div>
        <NetView/>
        <Sidebar/>
      </div>
    </div>
  )
}

export default Monitor;
