import React from 'react';

function SettingsCompo({ text, icon }) {
  return (
    <>
      <div className="w-72 h-12 border-2 rounded-3xl flex items-center px-2 py-3 cursor-pointer">
        <div className="flex gap-4 items-center">
          <button className="h-9 w-9 bg-button-sec rounded-full flex justify-center items-center">
            {icon}
          </button>
          <span className="text-sm font-normal font-poppins">{text}</span>
        </div>
      </div>
    </>
  );
}

export default SettingsCompo;
