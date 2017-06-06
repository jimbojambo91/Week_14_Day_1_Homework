import React from 'react';
import FilmList from './FilmList.jsx'

class FilmBox extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        data: [
          {
            id: 1,
            title: "Sausage Party",
            link: "/"
          },
          {
            id: 2,
            title: "Cafe Society",
            link: "/"
          }
        ]
      }
  }
  render(){
    return(
      <div className="film-box">
        <h1>UK OPENING THIS WEEK</h1>
        <FilmList data={this.state.data}/>
        <button>GET SHOWTIMES</button>
      </div>
    )
  }
}

export default FilmBox