import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faArrowPointer, faPeopleGroup, faSackDollar, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Analytics() {
  return (
    <div className="mainAnalytics">
      {/* Analytics 1: Today's Earnings */}
      <div className="analytics">
        <div className="analyticsText">
          <h2>Today's Earnings</h2>
          <h1>$50,000 
            <span>
              <FontAwesomeIcon icon={faAngleUp} /> 15.47%
            </span>
          </h1>
        </div>
        <div className="analyticsImage">
          <FontAwesomeIcon icon={faCoins} />
        </div>
      </div>

      {/* Analytics 2: Click-Through Rates */}
      <div className="analytics">
        <div className="analyticsText">
          <h2>Click-Through Rates</h2>
          <h1>25/hour 
            <span>
              <FontAwesomeIcon icon={faAngleDown} /> 25%
            </span>
          </h1>
        </div>
        <div className="analyticsImage">
          <FontAwesomeIcon icon={faArrowPointer} />
        </div>
      </div>

      {/* Analytics 3: Campaign Success Rate */}
      <div className="analytics">
        <div className="analyticsText">
          <h2>Campaign Success Rate</h2>
          <h1>14% 
            <span>
              <FontAwesomeIcon icon={faAngleUp} /> 3.25%
            </span>
          </h1>
        </div>
        <div className="analyticsImage">
          <FontAwesomeIcon icon={faPeopleGroup} />
        </div>
      </div>

      {/* Analytics 4: Cumulative Revenue */}
      <div className="analytics">
        <div className="analyticsText">
          <h2>Cumulative Revenue</h2>
          <h1>$275,832.05</h1>
        </div>
        <div className="analyticsImage">
          <FontAwesomeIcon icon={faSackDollar} />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
