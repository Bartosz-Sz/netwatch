import React from 'react';
import styles from './Monitor.module.scss';
import TopBar from '../TopBar';
import Sidebar from '../Sidebar';
import Tabbed from '../Tabbed';
import NetView from '../NetView';

const Monitor: React.FunctionComponent = () => {
  // const testChild = (<div>Test tab content</div>)

  return (
    <div className={styles.frame}>
      <TopBar/>
      <div className={styles.main}>
        <NetView/>
        <Sidebar>
          <Tabbed
            tabs={[
              { name: 'testTab1', child: 'Test tab 1 content' },
              { name: 'testTab2', child: 'Test tab 2 content' }
            ]}
          />
        </Sidebar>
      </div>
    </div>
  )
}

export default Monitor;
