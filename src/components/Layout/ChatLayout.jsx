import React, { useState } from 'react';
import { Menu, Plus, Settings, User, X } from 'lucide-react';
import SettingsCompo from '../Settings/SettingsCompo';

function ChatLayout({ children, menuState, setmenuState }) {
  return (
    <>
      <div className="flex h-full">
        <div
          className="absolute hidden cursor-pointer max-md:block z-50"
          onClick={() => setmenuState((prev) => !prev)}
        >
          {menuState ? <Menu /> : <X />}
        </div>
        <div
          className={`h-full flex z-40 max-md:absolute max-md:inset-0 ${
            menuState ? 'max-md:-translate-x-full' : ''
          } transition-transform ease-in-out duration-1000`}
        >
          <div className="w-80 bg-white h-full rounded-[56px] max-md:rounded-none max-md:h-10/12">
            <div className="h-full w-full flex items-center justify-between flex-col py-6">
              <div className="w-full">
                <h1 className="text-4xl text-center mb-6 font-nunito font-bold">
                  JAAGR
                </h1>
                <button className="flex justify-center items-center bg-button h-10 w-48 rounded-3xl mx-auto mb-9">
                  <div className="flex gap-1 items-center py-4">
                    <Plus color="#fff" size={20} className="h-min" />
                    <span className="text-sm text-white h-min font-poppins">
                      New Chat
                    </span>
                  </div>
                </button>
                <div className="py-4 w-full border-t-2 border-b-2">
                  <div className="w-max mx-auto">
                    <span className="text-sm mr-20 font-poppins">
                      Your conversations
                    </span>
                    <span className="text-button text-sm cursor-pointer font-poppins font-semibold">
                      Clear All
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <SettingsCompo text="Settings" icon={<Settings size={18} />} />
                <SettingsCompo text="User Id" icon={<User size={18} />} />
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}

export default ChatLayout;
