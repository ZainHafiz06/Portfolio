import React from 'react';

function Alerts() {
  return (
    <div className="mainAlerts">
      {/* Alert 1 */}
      <div className="alerts alert-1">
        <div className="alertsText">
          <h2>Built through Slave Labor</h2>
          <h1>Soft UI Dashboard</h1>
          <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation dolor ullamco</p>
          <span>Learn More <i className="fa-solid fa-arrow-right-long"></i></span>
        </div>

        <div className="alertsImage"></div>
      </div>

      {/* Alert 2 */}
      <div className="alerts alert-2">
          <div className="alertsContainer">
            <div className="alertsText">
              <h1>Turn your ideas into unicorns</h1>
              <h2>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation dolor ullamco</h2>
              <span>Read More <i className="fa-solid fa-arrow-right-long"></i></span>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Alerts;
