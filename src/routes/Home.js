import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';
// const myAudio = document.getElementById("myAudio")
// myAudio.play()
// function play(){
//   var audio = new Audio('audio_file.mp3');
//   audio.play();
// };

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    reviews: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({ movies, isLoading: false });
  };
  // getReviews = async () => {
  //   const {
  //     data: {
  //       data: { reviews },
  //     },
  //   } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=review');
  //   this.setState({ reviews, isLoading: false });
  // };

  componentDidMount() {
    this.getMovies();
    // this.getReviews();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            <div className='asd'>오늘의 볼만한 영화</div>
            {/* <button onClick='play();'>button</button> */}
            {/* <audio src="audio_file.mp3" id="myAudio">ss</audio> */}
            <div className='asd'>오늘의 좀 아쉬운 영화</div>
            
            {movies.map((movie) => 
            {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  rating={movie.rating}
                  runtime={movie.runtime}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
