import React from 'react';
import { Send } from 'lucide-react';

function ChatBar() {
  return (
    <>
      <div className="w-[70%] h-12 bg-white rounded-3xl text-sm flex justify-center font-poppins absolute bottom-14 left-1/2 -translate-x-1/2 pr-[7px] pl-9 max-md:bottom-3 max-md:w-[90%]">
        <div className="flex items-center justify-between w-full">
          <input
            type="text"
            placeholder="What's in your mind"
            className="outline-none w-10/12 max-sm:w-9/12"
          />
          <button className="bg-button w-10 h-10 rounded-full flex items-center justify-center">
            <Send color="#fff" size={16} strokeWidth={3} />
          </button>
        </div>
      </div>
    </>
  );
}

export default ChatBar;
