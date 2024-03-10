export const MainWeatherInfo = (props) => {
  return (
    <div className="flex items-center absolute bottom-32">
      <h1 className="text-10xl mr-4">
        {props.dataList?.main.temp ? props.dataList?.main.temp : "0"}°
      </h1>
      <h2 className="text-7xl mr-4">
        {props.dataList?.name ? props.dataList?.name : "City"}
      </h2>
      <img src="mainCloud.svg" className="h-20 w-20" alt="cloud" />
    </div>
  );
};
