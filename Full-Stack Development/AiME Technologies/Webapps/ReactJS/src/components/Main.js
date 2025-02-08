import React from 'react';
import Analytics from '../Analytics';
import Alerts from '../Alerts';
import AdvancedAnalytics from '../AdvancedAnalytics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGauge, faUserGroup, faRobot, faInbox, faCircleInfo, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Main() {
  return (
    <div className="main">
      <div className="mainHeader">
        <div className="headerDirectory">
          <div className="headerDirectoryMain">
            <h2>Pages <i><FontAwesomeIcon icon={faAngleRight}/></i></h2>
            <h2 className="directoryIndex">Home</h2>
          </div>
          <h1>Dashboard</h1>
        </div>

        <div className="headerContents">
          <input type="text" minLength="4" maxLength="25" placeholder="Search" />
          <button className="userLogin"><i className="fa-solid fa-user"></i>Sign In</button>
          <button className="userSettings"><i className="fa-solid fa-gear"></i></button>
          <button className="userNotifications"><i className="fa-solid fa-bell"></i></button>
        </div>
      </div>

      <Analytics />
      <Alerts />
      <AdvancedAnalytics />
    </div>
  );
}

export default Main;
