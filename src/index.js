import React from "react";
import { choice, remove } from "./helpers";
import foods from "./foods";

function App() {
  let randFruit = choice(foods);
  let removeFruit = remove(randFruit, foods);
  return (
    <>
      <p>I'd like one ${randFruit}, please</p>
      <p>Here you go: {randFruit}</p>
      <p>Delicious! May I have another?</p>
      <p>I’m sorry, we’re all out. We have {removeFruit.length} left</p>
    </>
  );
}

export default App;
