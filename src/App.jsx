import React, { useState } from 'react';
import ChatLayout from './components/Layout/ChatLayout';
import ChatBar from './components/Chat/ChatBar';

function App() {
  const [menuState, setmenuState] = useState(true);
  return (
    <>
      <div className={`h-full w-full bg-background px-7 py-6`}>
        <ChatLayout menuState={menuState} setmenuState={setmenuState}>
          <div className="w-full h-full relative">
            <ChatBar />
          </div>
        </ChatLayout>
      </div>
    </>
  );
}

export default App;
