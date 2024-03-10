export const Forecast = (props) => {
  return (
    <div className="flex items-center mt-14">
      <img
        className="max-w-12 max-h-8 w-full h-full mr-9"
        src={`https://openweathermap.org/img/wn/${props.item.weather[0].icon}@2x.png`}
        alt="icon"
      />
      <time className="mr-32 text-lg">{props.item.dt_txt}</time>
      <p className="text-2xl">{props.item.main.temp} °</p>
    </div>
  );
};
