import React, { useState, useEffect } from 'react';
import './PreLoader.css';

const PreLoader = () => {
  const [displayTitle, setDisplayTitle] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [displaySubtitle, setDisplaySubtitle] = useState('');
  const [currentPhase, setCurrentPhase] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);
  
  const titleText = "Hello";
  const nameText = "My name is Ngô Quý Long Nhật";
  const subtitleText = "Đang chuẩn bị show kỹ năng… bug thì chắc giấu kỹ lắm rồi :))";//Đang tải… mong là nhanh hơn deadline của mình

  useEffect(() => {
    const getCurrentText = () => {
      switch(currentPhase) {
        case 0: return titleText;
        case 1: return nameText;
        case 2: return subtitleText;
        default: return "";
      }
    };

    const getCurrentDisplay = () => {
      switch(currentPhase) {
        case 0: return displayTitle;
        case 1: return displayName;
        case 2: return displaySubtitle;
        default: return "";
      }
    };

    const setCurrentDisplay = (text) => {
      switch(currentPhase) {
        case 0: setDisplayTitle(text); break;
        case 1: setDisplayName(text); break;
        case 2: setDisplaySubtitle(text); break;
        default: break;
      }
    };

    const currentText = getCurrentText();
    const currentDisplay = getCurrentDisplay();
    
    if (currentIndex < currentText.length) {
      const timer = setTimeout(() => {
        setCurrentDisplay(currentDisplay + currentText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else if (currentPhase < 1) {
      // Move to next phase (name)
      const timer = setTimeout(() => {
        setCurrentPhase(prev => prev + 1);
        setCurrentIndex(0);
      }, 300);
      return () => clearTimeout(timer);
    } else if (currentPhase === 1) {
      // Name typed, show subtitle and finalize typing state
      const timer = setTimeout(() => {
        setShowSubtitle(true);
        setCurrentPhase(2);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, currentPhase, displayTitle, displayName, displaySubtitle, titleText, nameText, subtitleText]);

  return (
    <div className="preloader">
      <div className="preloader-content">
        {/* Loading text */}
        <h2 className="preloader-title">
          {displayTitle}
          {currentPhase === 0 && <span className="cursor">|</span>}
        </h2>
        <h3 className="preloader-name">
          {displayName}
          {currentPhase === 1 && <span className="cursor">|</span>}
        </h3>
        <p className="preloader-subtitle">
          {showSubtitle ? subtitleText : ''}
        </p>
        
        
        {/* Loading dots */}
        <div className="loading-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      
      {/* Background animation */}
      <div className="preloader-bg">
        {/* Floating bubbles */}
        <div className="tech-icon tech-9">
          <img src={process.env.PUBLIC_URL + '/tool/js.png'} alt="JavaScript" />
        </div>
        <div className="tech-icon tech-10">
          <img src={process.env.PUBLIC_URL + '/tool/python.png'} alt="Python" />
        </div>
        <div className="tech-icon tech-11">
          <img src={process.env.PUBLIC_URL + '/tool/reactjs.png'} alt="React" />
        </div>
        <div className="tech-icon tech-12">
          <img src={process.env.PUBLIC_URL + '/tool/java.png'} alt="Java" />
        </div>
        <div className="tech-icon tech-13">
          <img src={process.env.PUBLIC_URL + '/tool/html.png'} alt="HTML" />
        </div>
        <div className="tech-icon tech-14">
          <img src={process.env.PUBLIC_URL + '/tool/css.png'} alt="CSS" />
        </div>
        <div className="tech-icon tech-15">
          <img src={process.env.PUBLIC_URL + '/tool/C++.png'} alt="C++" />
        </div>
        <div className="tech-icon tech-16">
          <img src={process.env.PUBLIC_URL + '/tool/SQLServer.png'} alt="SQL Server" />
        </div>
        
        {/* More bubbles with different sizes */}
        <div className="tech-icon tech-17 small-bubble">
          <img src={process.env.PUBLIC_URL + '/tool/js.png'} alt="JavaScript" />
        </div>
        <div className="tech-icon tech-18 small-bubble">
          <img src={process.env.PUBLIC_URL + '/tool/python.png'} alt="Python" />
        </div>
        <div className="tech-icon tech-19 small-bubble">
          <img src={process.env.PUBLIC_URL + '/tool/reactjs.png'} alt="React" />
        </div>
        <div className="tech-icon tech-20 medium-bubble">
          <img src={process.env.PUBLIC_URL + '/tool/java.png'} alt="Java" />
        </div>
        <div className="tech-icon tech-21 small-bubble">
          <img src={process.env.PUBLIC_URL + '/tool/html.png'} alt="HTML" />
        </div>
        <div className="tech-icon tech-22 small-bubble">
          <img src={process.env.PUBLIC_URL + '/tool/css.png'} alt="CSS" />
        </div>
        <div className="tech-icon tech-23 medium-bubble">
          <img src={process.env.PUBLIC_URL + '/tool/C++.png'} alt="C++" />
        </div>
        <div className="tech-icon tech-24 small-bubble">
          <img src={process.env.PUBLIC_URL + '/tool/SQLServer.png'} alt="SQL Server" />
        </div>
        <div className="tech-icon tech-25 small-bubble">
          <img src={process.env.PUBLIC_URL + '/tool/js.png'} alt="JavaScript" />
        </div>
        <div className="tech-icon tech-26 small-bubble">
          <img src={process.env.PUBLIC_URL + '/tool/python.png'} alt="Python" />
        </div>
        
        {/* Center bubbles */}
        <div className="tech-icon tech-27 medium-bubble">
          <img src={process.env.PUBLIC_URL + '/tool/reactjs.png'} alt="React" />
        </div>
        <div className="tech-icon tech-28 small-bubble">
          <img src={process.env.PUBLIC_URL + '/tool/java.png'} alt="Java" />
        </div>
        <div className="tech-icon tech-29 medium-bubble">
          <img src={process.env.PUBLIC_URL + '/tool/html.png'} alt="HTML" />
        </div>
        <div className="tech-icon tech-30 small-bubble">
          <img src={process.env.PUBLIC_URL + '/tool/css.png'} alt="CSS" />
        </div>
        <div className="tech-icon tech-31 medium-bubble">
          <img src={process.env.PUBLIC_URL + '/tool/C++.png'} alt="C++" />
        </div>
        <div className="tech-icon tech-32 small-bubble">
          <img src={process.env.PUBLIC_URL + '/tool/SQLServer.png'} alt="SQL Server" />
        </div>
        
      </div>
    </div>
  );
};

export default PreLoader;
