import React from 'react';
import styles from './Tabbed.module.scss';

interface Props {
  tabs: Array<{
    name: string,
    child: React.ReactNode
  }>
}

interface State {
  activeTab: number,
}

class Tabbed extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      activeTab: 0,
    };
  }

  get tabBar() {
    const tabs = this.props.tabs.map((t) => {
      return (<div className={styles.tab}>
        { t.name }
      </div>);
    });
    return (<div className={styles.tabBar}>
      { tabs }
    </div>)
  }

  get activeChild() {
    return this.props.tabs[this.state.activeTab].child
  }

  render() {
    return (
      <div className={styles.wrapper}>
        { this.tabBar }
        <div className={styles.content}>
          { this.activeChild }
        </div>
      </div>
    )
  }
}

export default Tabbed;
