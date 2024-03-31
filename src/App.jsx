import  { useState } from 'react';
import './App.css';

function App() {
  const [memeText, setMemeText] = useState('');

  const handleGenerateMeme = () => {
    // โค้ดสำหรับสร้าง meme
  };

  return (
    <div className="App">

      <div className="meme-container">
        <img src="https://cdn.discordapp.com/attachments/976776712908066819/1223278821780750376/image-removebg-preview_2.png?ex=6619462e&is=6606d12e&hm=c1c77216a922922c896b39ef6b766bd6a58cdb290782b1390f42957c064ef193&" alt="meme" />
        <p className="meme-text">{memeText}</p>
      </div>
      <input
        className="meme-input"
        type="text"
        placeholder="ใส่ข้อความของคุณ"
        value={memeText}
        onChange={(e) => setMemeText(e.target.value)}
      />
      {/* <button className="meme-button" onClick={handleGenerateMeme}>สร้าง Meme</button> */}
    </div>
  );
};

export default App;
