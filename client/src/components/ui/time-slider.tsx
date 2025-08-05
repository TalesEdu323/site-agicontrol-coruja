import { useState } from "react";
import { Slider } from "@/components/ui/slider";

export default function TimeSlider() {
  const [screenTime, setScreenTime] = useState([4]);

  const handleTimeChange = (value: number[]) => {
    setScreenTime(value);
  };

  const formatTime = (hours: number) => {
    return `${hours}h 00m`;
  };

  const getClockRotation = (hours: number) => {
    return (hours / 12) * 360;
  };

  return (
    <div className="bg-gray-50 p-8 rounded-2xl mb-12" data-testid="time-slider-container">
      <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center" data-testid="text-time-control-title">
        Controle de Tempo de Tela
      </h3>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2" data-testid="label-daily-time">
              Tempo Diário Permitido
            </label>
            <Slider
              value={screenTime}
              onValueChange={handleTimeChange}
              max={12}
              min={0}
              step={1}
              className="w-full"
              data-testid="slider-screen-time"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>0h</span>
              <span>6h</span>
              <span>12h</span>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl" data-testid="current-time-display">
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-700">Tempo Atual:</span>
              <span className="text-2xl font-bold text-blue-900" data-testid="text-current-time">
                {formatTime(screenTime[0])}
              </span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg" data-testid="usage-games">
              <span className="font-medium text-gray-700">Jogos</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">1h 30m</span>
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg" data-testid="usage-social">
              <span className="font-medium text-gray-700">Redes Sociais</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">2h 15m</span>
                <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg" data-testid="usage-education">
              <span className="font-medium text-gray-700">Educativo</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">15m</span>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 3D Clock Visualization */}
        <div className="flex justify-center">
          <div className="relative">
            <div 
              className="w-64 h-64 bg-gradient-to-br from-white to-gray-200 rounded-full border-8 border-blue-900 flex items-center justify-center shadow-xl"
              data-testid="clock-3d"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2" data-testid="clock-display">
                  {screenTime[0]}:00
                </div>
                <div className="text-sm text-gray-700">Horas Restantes</div>
              </div>
              
              {/* Clock Hands */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-1 h-16 bg-red-500 rounded-full transform origin-bottom absolute"
                  style={{ transform: `rotate(${getClockRotation(screenTime[0])}deg)` }}
                  data-testid="hour-hand"
                ></div>
                <div 
                  className="w-0.5 h-20 bg-blue-900 rounded-full transform origin-bottom absolute"
                  style={{ transform: 'rotate(90deg)' }}
                  data-testid="minute-hand"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
