import { Header } from "../../components/Header/Header";
import { WeatherDetails } from "../../components/WeatherDetails/WeatherDetails";

export const App = () => {
  return (
    <div className="bg-cover bg-center w-full h-full" style={{backgroundImage: "url('bg-weather-winter.png')"}}>
      <div className="container">
        <Header />
        <WeatherDetails />
      </div>
    </div>
  );
};

