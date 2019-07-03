import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Character from "./components/ImageCard";
import Header from "./components/Header";
import cards from "./cards.json";


class App extends React.Component {
  
  state = {
    cards,
    score: 0,
    highscore: 0,
    clickedArray: []
  };

  handleClick = id => {
    // console.log("click");
    const shuffledArray = this.shuffleArray(cards);
    // console.log(shuffledArray);
    this.setState({cards: shuffledArray});

    if (this.state.clickedArray.includes(id)) {
      this.setState({score: 0, clickedArray: []})
      alert("You already clicked that picture! Try again")
    } else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        score: this.state.score + 1,
      });

      if (this.state.score === cards.length - 1) {
        alert("You win!")
        this.setState({ score: 0, clickedArray: [], highscore: 12 })
      }
      // console.log(this.state.clickedArray.concat([id]))
    }

    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score });
    }
  }

  shuffleArray = (cardsArray) => {
    for (let i = cardsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
    }
    return cardsArray;
}

  render() {
    return (
      <div>
        <Header score={this.state.score} highscore={this.state.highscore}>React Clicky Game!</Header>
          <Wrapper>
            <Title>Click any flower to start the game</Title>
              {cards.map((value) => {
                return <Character id={value.id} image={value.image} handleClick={this.handleClick}/>
              })}
  
          </Wrapper>
      </div>
    );
  }
}

export default App;
