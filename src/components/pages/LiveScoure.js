import React, { Component } from 'react'
import '../../App.css';
import axios from 'axios';
export class LiveScoure extends Component {
  constructor(){
    super()
    this.state = {
      liveMatchArr:[],

    }
  }

  liveScore = async (e) => {
    
        
      e.preventDefault();
      await axios.get(`${process.env.REACT_APP_SERVER_URL}/live`).then((res) => {
        this.setState({
          liveMatchArr: res.data.liveMatchArr,
        });
        console.log(this.state.liveMatchArr);
        console.log(this);
      });
    };

  render() {
    return (

       <>
       <h2> hi seseqwe</h2>
       <button onClick={this.addFavTeam}>Click</button>
      {this.state.liveMatchArr.map(match => {
                return liveMatchArr.match.map(item => {
                  console.log(match.league);
                  return <>
                  
                      <li>league: {item.league}</li>
                      
                  </>
                })
              })
            }
       </>
    
    )
  }
}

export default LiveScoure


//   this.state.listBooks.map(book => {
//     console.log(book.books);
//     return book.books.map(item => {
//       console.log(item.name);
//       return <>
//         <ListGroup horizontal={item} className="my-2" >
//           <ListGroup.Item variant="dark">name: {item.name}</ListGroup.Item>
//           <ListGroup.Item variant="dark">decription:{item.decription}</ListGroup.Item>
//           <ListGroup.Item variant="dark">status: {item.status}</ListGroup.Item>
//         </ListGroup>
//       </>
//     })
//   })
// }
// <h1> "half": "First Half",
// "elapsed": 2,
// "league": "C-League",
// "home": "Asia Euro United",
// "away": "NagaWorld",
// "homeGoals": 0,
//  "awayGoals": 0
//  </h1>
// 
    
  // getUserInput = (e) => {
  //   console.log(e.target.value);
  //   this.setState({
  //     name: e.target.value
  //   })
  //   console.log(this.state.name);
  // }
  
  
  // addFavTeam = async (e) => {
  //   e.preventDefault();
  //   await axios.post(`${process.env.REACT_APP_SERVER_URL}/favteam?name=${this.state.name}`).then((res) => {
  //     this.setState({
  //       name: res.data.name,
  //     });
  //   });
  // };