import React from 'react';
import './Tabbed.scss';

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

    this.activateTab.bind(this);

    this.state = {
      activeTab: 0,
    };
  }

  get activeChild() {
    return this.props.tabs[this.state.activeTab].child
  }

  activateTab(tabIndex: number) {
    this.setState({ activeTab: tabIndex })
  }

  get tabBar() {
    const tabs = this.props.tabs.map((t, i) => {
      return (<div className="tab" onClick={ () => this.activateTab(i) }>
        <div className="tabName">{ t.name }</div>
      </div>);
    });
    return (<div className="tabBar">
      { tabs }
    </div>)
  }

  render() {
    return (
      <div className="tabbed-wrapper">
        { this.tabBar }
        <div className="content">
          { this.activeChild }
        </div>
      </div>
    )
  }
}

export default Tabbed;
