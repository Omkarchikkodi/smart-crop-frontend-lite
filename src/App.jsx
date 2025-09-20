import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WeatherCard from "./components/WeatherCard";
import CropRecommendation from "./components/CropRecommendation";
import NpkRecommendation from "./components/NpkRecommendation";
import Alerts from "./components/Alerts";
import MarketIntelligence from "./components/MarketIntelligence";
import Body from "./components/Body";
import Voice from "./components/VoiceAssistant";

function App() {
  const [lang, setLang] = useState("en");

  return (
    <div className="flex flex-col min-h-screen bg-green-100">
      {/* Header */}
      <Header  />

      {/* Body */}
      <main className="flex-grow container mx-0">
        <div className="grid m-0 pb-4">
          <Body />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-2">🌍 Hubli</h2>
            <p>🌡️ 26.7°C</p>
            <p>☁️ overcast clouds</p>
            <p>💧 Humidity: 78%</p>
          </div>
          <CropRecommendation />
          <NpkRecommendation />
          <Alerts />
          <MarketIntelligence/>
        </div>
        {/* need a div which is for voice assistance
        it should be a small sticky image at the right bottom */}
        
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
