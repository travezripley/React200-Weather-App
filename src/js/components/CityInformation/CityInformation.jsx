import React from "react";

export default class CityInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      lon,
      lat,
      icon,
      temp,
      pressure,
      humidity,
      temp_min,
      temp_max,
      windSpeed,
      name,
      noResult
    } = this.props;
    let toDisplay;

    if (noResult === true) {
      toDisplay = (
        <div className="card mb-3 display-background">
          <div className="card=header text-white">City Information</div>

          <div className="card-body">
            <div className="row">
              <div className="col-12 col-lg-12">
                <div className="card text-center">
                  <h2 className="card-text mt-3">
                    <span>
                      <img
                        height="50px"
                        width="50px"
                        src="http://openweathermap.org/img/w/01d.png"
                        alt="weather graphic"
                      />
                    </span>
                    Make a Search Above!
                  </h2>

                  <p className="card-text">
                    <small>Lat/Long:</small>
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card text-center">
                        <p className="card-text font-weight-bold text-center">
                          Temperature
                        </p>
                        <p className="card-text tect-center text-success text-bold mb-3">
                          Fahrenheit
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card text-center">
                        <p className="card-text font-weight-bold text-center">
                          Pressure
                        </p>
                        <p className="card-text tect-center text-success text-bold mb-3">
                          Millibars
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card text-center">
                        <p className="card-text font-weight-bold text-center">
                          Humidity
                        </p>
                        <p className="card-text tect-center text-success text-bold mb-3">
                          {" "}
                          %{" "}
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card text-center">
                        <p className="card-text font-weight-bold text-center">
                          Low Temp
                        </p>
                        <p className="card-text tect-center text-success text-bold mb-3">
                          Fahrenheit
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card text-center">
                        <p className="card-text font-weight-bold text-center">
                          High Temp
                        </p>
                        <p className="card-text tect-center text-success text-bold mb-3">
                          Fahrenheit
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card text-center">
                        <p className="card-text font-weight-bold text-center">
                          Wind Speed
                        </p>
                        <p className="card-text tect-center text-success text-bold mb-3">
                          Mph
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      toDisplay = (
        <div className="card mb-3 display-background">
          <div className="card=header text-white">City Information</div>
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-lg-12">
                <div className="card text-center">
                  <h2 className="card-text mt-3">
                    <span>
                      <img
                        height="50px"
                        width="50px"
                        src={"http://openweathermap.org/img/w/'+icon+'.png"}
                        alt="weather graphic"
                      />
                    </span>
                    {name}
                  </h2>
                  <p className="card-text">
                    <small>
                      Lat/Long:{lat}, {lon}
                    </small>
                  </p>
                  <hr />

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card text-center">
                        <p className="card-text font-weight-bold text-center">
                          Temperature
                        </p>
                        <p className="card-text tect-center text-success text-bold mb-3">
                          {parseInt(temp)}F
                        </p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-4">
                        <div className="card text-center">
                          <p className="card-text font-weight-bold text-center">
                            Pressure
                          </p>
                          <p className="card-text tect-center text-success text-bold mb-3">
                            {pressure}mb
                          </p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-4">
                          <div className="card text-center">
                            <p className="card-text font-weight-bold text-center">
                              Humidity
                            </p>
                            <p className="card-text tect-center text-success text-bold mb-3">
                              {humidity}%
                            </p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-4">
                            <div className="card text-center">
                              <p className="card-text font-weight-bold text-center">
                                Low Temp
                              </p>
                              <p className="card-text tect-center text-success text-bold mb-3">
                                {parseInt(temp_min)}F
                              </p>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-4">
                              <div className="card text-center">
                                <p className="card-text font-weight-bold text-center">
                                  High Temp
                                </p>
                                <p className="card-text tect-center text-success text-bold mb-3">
                                  {parseInt(temp_max)}F
                                </p>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-4">
                                <div className="card text-center">
                                  <p className="card-text font-weight-bold text-center">
                                    Wind Speed
                                  </p>
                                  <p className="card-text tect-center text-success text-bold mb-3">
                                    {parseInt(windSpeed)}mph
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return toDisplay;
  }
}
