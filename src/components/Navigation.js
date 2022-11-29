import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
// document.querySelector(".btn1").addEventListener("click", function () {
//   var audio1 = new Audio("FeelMyRhythm.mp3");
//   audio1.loop = false; // 반복재생하지 않음
//   audio1.volume = 0.5; // 음량 설정
//   audio1.play(); // sound1.mp3 재생
// });
function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* <button class="btn1">play sound1</button> */}
    </div>
  );
}

export default Navigation;
