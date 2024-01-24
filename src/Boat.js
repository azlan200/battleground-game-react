import React from 'react';



const Boat = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="Boat.css" />
      <title>Boat Game</title>
      <div id="root"></div>
      <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
      <script src="BoatGame.js" type="module"></script>
    </div>
  );
};

export default Boat;
