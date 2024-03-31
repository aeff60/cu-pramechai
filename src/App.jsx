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
        <img src="./img.png" alt="meme" />
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
