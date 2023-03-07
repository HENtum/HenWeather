import React from "react";

export default function Form(props) {
  function App() {
    return (
      <div>
        {props.pressure > 1013 ? "Давление повышенное" : "Давление пониженное"}
      </div>
    );
  }
  return (
    <div className="form-virst">
      {props.cityName && (
        <div className="form">
          <div className="formDiv1">
            <p className="formP1">
              {"Место: " + props.cityName + " , " + props.country}
            </p>
            <p>{"Температура: " + Math.floor(props.temp - 273.15) + "°C"}</p>
            <p>{"Ветер: " + Math.floor(props.wind) + " м/с"}</p>
            <p>{"Облака: " + props.sky}</p>
            <p>{"Давление: " + props.pressure}</p>
            <p className="formP2">{App()}</p>
          </div>
          <div className="clearButton">
            <button onClick={props.clearWeather}>Убрать информацию</button>
          </div>
        </div>
      )}
      <p
        className="formErr1"
        onMouseEnter={() => {
          props.errMov();
        }}
        onMouseLeave={() => {
          props.errLeave();
        }}
      >
        {props.error}
      </p>
    </div>
  );
}
