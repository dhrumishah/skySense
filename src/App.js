import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
} from "react-icons/io";
import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from "react-icons/bs";
import { TbTemperatureCelsius } from "react-icons/tb";
import { ImSpinner8 } from "react-icons/im";

const APIkey = "ffe4b455b1c1270a987e703ee648c365";

const App = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("Ahmedabad");

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`;
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [location]);
  console.log(data);

  if (!data) {
    return (
      <div>
        <div>
          <ImSpinner8 className="text-5xl animate-spin" />
        </div>
      </div>
    );
  }
  return <div>react app</div>;
};

export default App;
