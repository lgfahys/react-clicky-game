import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Character from "./components/ImageCard";
import Header from "./components/Header";
import friends from "./friends.json";

function App() {
  return (
    <div>
      <Header></Header>
        <Wrapper>
          <Title>Clicky Game</Title>

            {friends.map((value) => {
              return <Character image={value.image} />
            })}

        </Wrapper>
    </div>
  );
}

export default App;
