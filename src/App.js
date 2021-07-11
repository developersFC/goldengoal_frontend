import React, { Component } from 'react'
import FavForm from './component/FavTeam'
import SlideShow from './component/SlideShow'
export class App extends Component {
  render() {
    return (
      <div>
        <SlideShow/>

        <FavForm/>
      </div>
    )
  }
}

export default App

