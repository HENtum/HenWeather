import React, { useState } from "react";

export default function Weath(props) {
  let [change, setChange] = useState("");

  return (
    <div>
      <form className="weathForm1" onSubmit={props.qetWeather}>
        <div className="weathDiv1">Узнайте погоду в вашем городе</div>
        <div className="input">
          <input
            name="city"
            className="weathInp1"
            onChange={(e) => {
              setChange(e.target.value);
            }}
            value={change}
            maxLength="32"
            placeholder="введите в каком городе"
          />
          {change.length > 0 && <p onClick={() => setChange("")}>X</p>}
        </div>
        <br></br>
        <button className="weathBt1">Узнать погоду {"в " + change} </button>
      </form>
    </div>
  );
}
