import React, { Component } from 'react'
import "./TeamUserFav.css";
export class TeamUserFav extends Component {
  render() {
    return (
      <div>
        <form className="FormFAV">
          <h1>Favourite Team</h1>
          <label for="favTeam" id="favTeam">
            Pick your Favourite Team ⚽️<br></br>
          </label>
          <br />
          <input
            type="text"
            name="favTeam"
            placeholder="please Enter fav Team"
          />
          <br />
          <button type="submit" id="btnSubmit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default TeamUserFav

