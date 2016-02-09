import React from 'react';
import classNames from 'classnames';
import { Tabs } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

class Dashboard extends React.Component {
  constructor(){
    super();
    this.state = {
      opened: false
    };
    this.update = this.update.bind(this);
  }

  update(e){
    // Set state calls render so necessary changes need to go before setState is called
    this.setState({opened: !this.state.opened})
  }
//onSelect={this.handleSelect}
  render(){
    let dashboardClass = classNames({'dashboard-opened': this.state.opened})
    let dashboardTabClass = classNames({
      'dashboard-opened-tabs': this.state.opened,
      'dashboard-closed-tabs': !this.state.opened
    })
    let dashboardGlyphClass = classNames({
      'glyphicon': true,
      'glyphicon-chevron-right': !this.state.opened,
      'glyphicon-remove': this.state.opened,
      'dashboard-opened-glyph': this.state.opened});

    return(
      <div id="mapDashboard" className={dashboardClass}>
        <span id="dashboardToggle" className={dashboardGlyphClass} onClick={this.update}></span>
        <Tabs bsStyle="tabs" defaultActiveKey={2} className={dashboardTabClass} id="tab-container">
          <Tab className="dashboard-tab" eventKey={1} title='Tab 1'>Testing</Tab>
          <Tab className="dashboard-tab" eventKey={2} title='Tab 2'>Tab 2 content</Tab>
          <Tab className="dashboard-tab" eventKey={3} title='Tab 3'>Tab 3 content</Tab>
          <Tab className="dashboard-tab" eventKey={4} title='Tab 4'>Tab 4 content</Tab>
          <Tab className="dashboard-tab" eventKey={5} title='Tab 5'>Tab 5 content</Tab>
        </Tabs>
      </div>
    )
  }
}

export default Dashboard
