import React from 'react';

function AdvancedAnalytics() {
  return (
    <div className="mainAdvancedAnalytics">

      {/* Advanced Analytic 1 */}
      <div className="advAnalytics analytic-1">
        <div className="visual"></div>
        <div className="activeUsers">
          <div className="activeUsersText">
            <h1>Active Users</h1>
            <h2>Eiusmod tempor incididunt</h2>
          </div>
        </div>

        <div className="activeUsersImpressions">
          <div className="impression">
            <div className="impressionHeader">
              <div className="impressionHeaderImage">
                <i></i>
              </div>

              <h2>Responses</h2>
            </div>

            <h1>36K</h1>

            <div className="progressBar">
              <div className="progressBarPercentage one"></div>
            </div>
          </div>

          <div className="impression">
              <div className="impressionHeader">
                <div className="impressionHeaderImage">
                    <i></i>
                </div>
                                    
                <h2>Leads</h2>
              </div>

              <h1>5m</h1>

              <div className="progressBar">
                <div className="progressBarPercentage two"></div>
              </div>
          </div>

          <div className="impression">
                                <div className="impressionHeader">
                                    <div className="impressionHeaderImage">
                                        <i></i>
                                    </div>
                                    
                                    <h2>Revenue
                                        <p>per 1000 clicks</p>
                                    </h2>
                                </div>

                                <h1>$782</h1>

                                <div className="progressBar">
                                    <div className="progressBarPercentage"></div>
                                </div>
                            </div>

                            <div className="impression">
                                <div className="impressionHeader">
                                    <div className="impressionHeaderImage">
                                        <i></i>
                                    </div>
                                    
                                    <h2>CTR</h2>
                                </div>

                                <h1>97%</h1>

                                <div className="progressBar">
                                    <div className="progressBarPercentage"></div>
                                </div>
                            </div>
                        </div>
      </div>

      {/* Advanced Analytic 2 */}
      <div className="advAnalytics analytic-2">
                    
      </div>
    </div>
  );
}

export default AdvancedAnalytics;
