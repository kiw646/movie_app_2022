import React from 'react';
const body = document.querySelector("body");
 
const IMG_NUMBER = 5;
 
function paintImage(imgNumber) {
  const image = new Image();
  image.src = 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/7CwD/image/Y3bGm6odEhgKZoOweqX00E-NzQY.jpg' // 가져올 image경로 지정
  // image.src = 'images/${imgNumber + 1}.jpg'; // 가져올 image경로 지정
  image.classList.add("bgImage"); // image에 bgImage 클래스 추가 
  body.appendChild(image); // body의 자식에 image추가
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
 
function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
 
init();
class Detail extends React.Component {
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state == undefined){
            history.push('/');
        }
    }
/* eslint eqeqeq: 0 */
    render(){
        const {location} = this.props;
        var url = 'https://www.youtube.com/results?search_query=';
        url += location.state.title;
        if(location.state){
            return <div><button onClick={() => window.open(url, '_blank')}>{location.state.title}</button></div> ;
        }else{
            return null;
        }
        
        // return <span>Hello</span>;
    }
}

export default Detail;
