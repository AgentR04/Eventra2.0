import React from 'react';

const ColorPalette = () => {
  const colors = [
    { name: 'Light Cyan', hex: '#A1F0F2', tailwind: 'bg-light-cyan' },
    { name: 'Teal', hex: '#008A90', tailwind: 'bg-teal text-white' },
    { name: 'White', hex: '#FFFFFF', tailwind: 'bg-white border border-gray-200' }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Color Palette</h2>
      
      {/* Main color blocks */}
      <div className="grid grid-cols-3 gap-6 mb-12">
        {colors.map((color) => (
          <div key={color.hex} className="flex flex-col">
            <div 
              className={`${color.tailwind} h-40 rounded-lg shadow-md flex items-end justify-center p-4`}
            ></div>
            <div className="mt-3 text-center">
              <p className="font-medium">{color.name}</p>
              <p className="text-gray-500 text-sm">{color.hex}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Example UI elements with the color scheme */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6 text-center">UI Elements</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Buttons */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold mb-4">Buttons</h4>
            <div className="space-y-4">
              <button className="w-full py-2 px-4 bg-teal text-white rounded-md hover:bg-primary-dark transition-colors">
                Primary Button
              </button>
              <button className="w-full py-2 px-4 bg-light-cyan text-teal rounded-md hover:bg-primary-200 transition-colors">
                Secondary Button
              </button>
              <button className="w-full py-2 px-4 border border-teal text-teal rounded-md hover:bg-primary-50 transition-colors">
                Outline Button
              </button>
            </div>
          </div>
          
          {/* Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="font-semibold mb-4">Cards</h4>
            <div className="space-y-4">
              <div className="bg-teal text-white p-4 rounded-md">
                <h5 className="font-medium">Teal Card</h5>
                <p className="text-sm opacity-80">This card uses the teal background</p>
              </div>
              <div className="bg-light-cyan p-4 rounded-md">
                <h5 className="font-medium text-teal">Light Cyan Card</h5>
                <p className="text-sm text-teal opacity-80">This card uses the light cyan background</p>
              </div>
              <div className="border border-teal p-4 rounded-md">
                <h5 className="font-medium text-teal">Outlined Card</h5>
                <p className="text-sm text-gray-600">This card has a teal border</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Example section with the color scheme */}
      <div className="mt-12 bg-light-cyan rounded-lg p-8">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-teal mb-4">Start Planning Your Event Today</h3>
          <p className="text-gray-700 mb-6">
            Get your event planning process streamlined in just a few simple steps with our powerful platform.
          </p>
          <button className="py-3 px-6 bg-teal text-white rounded-md hover:bg-primary-dark transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
