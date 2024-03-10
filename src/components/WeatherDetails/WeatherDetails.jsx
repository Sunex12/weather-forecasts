import { useState } from "react";
import { WeatherDetail } from "../WeatherDetail/WeatherDetail";
import { MainWeatherInfo } from "../../components/MainWeatherInfo/MainWeatherInfo";
import { currentData } from "../../api";
import { currentTime } from "../../api";
import { Forecast } from "../Forecast/Forecast";

export const WeatherDetails = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState();
  const [time, setTime] = useState();

  const createData = async () => {
    const timeoutData = await currentData(search);
    setData(timeoutData);
    createTime(search);
  };

  const createTime = async () => {
    const timeoutTime = await currentTime(search);
    setTime(timeoutTime);
  };

  return (
    <div>
      <div className="absolute top-0 right-0 h-full p-8 w-1/3 backdrop-blur overflow-y-auto">
        <div className="flex items-center justify-between border-b border-white p-2.5 max-w-md z-10">
          <input
            type="text"
            placeholder="Search Location..."
            className="bg-transparent text-xl w-full placeholder:text-white placeholder:opacity-70 placeholder:text-xl"
            onChange={(e) => setSearch(e.target.value)}
          />
          <img
            src="loop.svg"
            alt="loop"
            className="cursor-pointer ml-4"
            onClick={createData}
          />
        </div>
        <h2 className="text-lg mt-10 mb-14">Weather Details...</h2>
        <p className="text-lg font-medium">THUNDERSTORM WITH LIGHT DRIZZLE</p>
        <div className="border-b border-white pb-24 max-w-md">
          <WeatherDetail dataList={data} />
        </div>
        <h2 className="mt-10 text-lg">Weather Forecast...</h2>
        <div>
          {time?.list &&
            time?.list.map((item) => <Forecast key={item.dt} item={item} />)}
        </div>
      </div>
      <MainWeatherInfo dataList={data} />
    </div>
  );
};
