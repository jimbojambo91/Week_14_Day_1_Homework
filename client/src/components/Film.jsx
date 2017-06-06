import React from 'react';

class Film extends React.Component{
  render(){
    return(
      <div className ="film">
        <h4 className ="filmTitle">
         {this.props.title}
        </h4>
        <a href={this.props.link}>Showtimes</a>
      </div>
    )
  }
}

export default Film