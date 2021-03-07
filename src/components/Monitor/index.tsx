import React from 'react';
import styles from './Monitor.module.scss';
import TopBar from '../TopBar';
import NetView from '../NetView';
import Sidebar from '../Sidebar';
import Tabbed from '../Tabbed';
import Statistics from '../Statistics';
import Storage from '../Storage';
import TrafficGen from '../TrafficGen';
import NetSelector from '../NetSelector';

const Monitor: React.FunctionComponent = () => {
  return (
    <div className={styles.frame}>
      <TopBar/>
      <div className={styles.main}>
        <NetView/>
        <Sidebar>
          <Tabbed
            tabs={[
              { name: 'Stats', child: <Statistics /> },
              { name: 'Storage', child: <Storage /> },
              { name: 'Traffic Gen.', child: <TrafficGen /> },
              { name: 'Networks', child: <NetSelector /> },
            ]}
          />
        </Sidebar>
      </div>
    </div>
  )
}

export default Monitor;
