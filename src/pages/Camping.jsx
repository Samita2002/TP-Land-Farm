import React, { useEffect } from 'react';
import 'lucide'; // ต้องติดตั้งด้วย `npm install lucide`
import './CAMPING.css';

const CampingGallery = () => {
  useEffect(() => {

    window.lucide?.createIcons();
  }, []);

  return (
    <div>
      <button onClick={() => window.history.back()} className="back-button">
        <i data-lucide="arrow-left"></i>
      </button>

      <div className="container">
        <h1 className="title">ความสุขในการสัมผัสธรรมชาติแท้จริง</h1>

        <div className="image-grid">
          <img src="assets/0013.jpg" alt="บรรยากาศลานกางเต็นท์ 1" />
          <img src="assets/0014.jpg" alt="บรรยากาศลานกางเต็นท์ 2" />
          <img src="assets/0016.jpg" alt="บรรยากาศลานกางเต็นท์ 3" />
          <img src="assets/0019.jpg" alt="บรรยากาศลานกางเต็นท์ 4" />
          <img src="assets/0020.jpg" alt="บรรยากาศลานกางเต็นท์ 5" />
          <img src="assets/0022.jpg" alt="บรรยากาศลานกางเต็นท์ 6" />
        </div>

        <h2 className="title">แผนผังจุดลานกางเต็นท์</h2>
        <div className="image">
          <img src="assets/0012.jpg" alt="แผนผังจุดกางเต็นท์" />
        </div>
      </div>

      <div className="single-image">
        <img src="assets/0001.jpg" alt="ภาพบรรยากาศแคมป์ปิ้ง 1" />
        <img src="assets/0002.jpg" alt="ภาพบรรยากาศแคมป์ปิ้ง 2" />
      </div>
      
    </div>
  );
};

export default CampingGallery;
