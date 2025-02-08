import React from 'react';
import Logo from'./images/aimeTech.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGauge, faUserGroup, faRobot, faInbox, faCircleInfo, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className="sidebar" data-aos="fade-right">
      <div className="sidebarContent">
        <div className="logo">
          <img src={Logo}/>
        </div>

        <div className="content dashboardContent">
          <div className="contentIcon dashboardIcon">
            <FontAwesomeIcon icon={faGauge} />
          </div>
          <h1>Dashboard</h1>
        </div>

        <div className="content">
          <div className="contentIcon">
            <FontAwesomeIcon icon={faUserGroup} />
          </div>
          <h1>Campaigns</h1>
        </div>

        <div className="content">
          <div className="contentIcon">
            <FontAwesomeIcon icon={faRobot} />
          </div>
          <h1>myAI</h1>
        </div>

        <hr />

        <div className="content">
          <div className="contentIcon">
            <FontAwesomeIcon icon={faInbox} />
          </div>
          <h1>Inbox</h1>
        </div>
      </div>

      <div className="sidebarExtra">
        <div className="sidebarExtraIcon">
          <FontAwesomeIcon icon={faCircleInfo} />
        </div>
        <div className="sidebarExtraText">
          <h1>Need help?</h1>
          <h2>Eiusmod tempor incididunt ut labore</h2>
        </div>

        <div className="sidebarButton">
          <button>Click here for a Demo
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;