export const WeatherDetail = (props) => {
  return (
    <div>
      <div className="flex items-center mt-8 mr-7 justify-between">
        <p className="text-lg">Temp max</p>
        <div className="flex items-center">
          <p className="text-lg mr-6">{props.dataList?.main.temp_max} °</p>
          <img src="red.svg" />
        </div>
      </div>
      <div className="flex items-center mt-8 mr-7 justify-between">
        <p className="text-lg">Temp min</p>
        <div className="flex items-center">
          <p className="text-lg mr-6">{props.dataList?.main.temp_min} °</p>
          <img src="blue.svg" />
        </div>
      </div>
      <div className="flex items-center mt-8 mr-7 justify-between">
        <p className="text-lg">Humadity</p>
        <div className="flex items-center">
          <p className="text-lg mr-6">{props.dataList?.main.humidity}%</p>
          <img src="water.svg" />
        </div>
      </div>
      <div className="flex items-center mt-8 mr-7 justify-between">
        <p className="text-lg">Cloudy</p>
        <div className="flex items-center">
          <p className="text-lg mr-6">{props.dataList?.clouds.all}%</p>
          <img src="cloud.svg" />
        </div>
      </div>
      <div className="flex items-center mt-8 mr-7 justify-between">
        <p className="text-lg">Wind</p>
        <div className="flex items-center">
          <p className="text-lg mr-6">{props.dataList?.wind.speed}km/h</p>
          <img src="wind.svg" />
        </div>
      </div>
    </div>
  );
};
