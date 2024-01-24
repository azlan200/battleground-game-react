import React, { useState, useEffect } from 'react';

const BoatGame = () => {
  const [boat1HP, setBoat1HP] = useState(100);
  const [boat2HP, setBoat2HP] = useState(100);
  const [animate, setAnimate] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  class ShipDetail {
    width = '200px';
    height = '200px';
    constructor(hp, path) {
      this.hp = hp;
      this.path = path;
    }
  }

  const ourShip = new ShipDetail(
    boat1HP,
    'https://c8.alamy.com/comp/2BTAJMA/cartoon-pirate-ship-illustration-with-skull-and-crossbones-flag-and-black-sails-cute-vector-clip-art-drawing-2BTAJMA.jpg'
  );
  const opponentShip = new ShipDetail(
    boat2HP,
    'https://www.shutterstock.com/image-vector/sea-battle-wooden-ships-sunset-260nw-2187581353.jpg'
  );

  useEffect(() => {
    setAnimate(true);
    const timeoutId = setTimeout(() => {
      setAnimate(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleAttack = (boatNumber) => {
    if (boatNumber === 1) {
      const newHP = boat1HP - 10;
      setBoat1HP(newHP < 0 ? 0 : newHP);
    } else if (boatNumber === 2) {
      const newHP = boat2HP - 10;
      setBoat2HP(newHP < 0 ? 0 : newHP);
    }

    // Show particle effect
    setShowParticles(true);
    setTimeout(() => {
      setShowParticles(false);
    }, 500);
  };

  return (
    <div style={{ backgroundColor: 'yellow', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', fontSize: '48px', fontWeight: 'bold', red: '#3498db', marginBottom: '20px', position: 'relative', textShadow: '0 0 10px rgba(52, 152, 219, 0.8)' }}>
        <span role="img" aria-label="Logo">⚓</span> Battleground <span role="img" aria-label="Logo">⚓</span>
      </h1>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Boat 1 HP: {boat1HP}</p>
        <button
          style={{
            border: 'none',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '8px',
            backgroundColor: '#3498db',
            color: '#fff',
            transition: 'background-color 0.3s, border-radius 0.3s',
          }}
          onClick={() => handleAttack(1)}
        >
          Attack Boat 1
        </button>
      </div>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Boat 2 HP: {boat2HP}</p>
        <button
          style={{
            border: 'none',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '8px',
            backgroundColor: '#3498db',
            color: '#fff',
            transition: 'background-color 0.3s, border-radius 0.3s',
          }}
          onClick={() => handleAttack(2)}
        >
          Attack Boat 2
        </button>
      </div>
      <div style={{ textAlign: 'center', position: 'relative' }}>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Our Ship HP: {ourShip.hp}</p>
        {showParticles && <div style={particleContainerStyle} />}
        <img
          src={ourShip.path}
          alt="Our Ship"
          style={{
            width: ourShip.width,
            height: ourShip.height,
            opacity: animate ? 0 : 1,
            transition: 'opacity 1s ease-in-out, box-shadow 0.3s',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          }}
        />
      </div>
      <div style={{ textAlign: 'center', position: 'relative' }}>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Opponent Ship HP: {opponentShip.hp}</p>
        {showParticles && <div style={particleContainerStyle} />}
        <img
          src={opponentShip.path}
          alt="Opponent Ship"
          style={{
            width: opponentShip.width,
            height: opponentShip.height,
            opacity: animate ? 0 : 1,
            transition: 'opacity 1s ease-in-out, box-shadow 0.3s',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          }}
        />
      </div>
    </div>
  );
};

// Inline style for the particle container
const particleContainerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, #f00 15%, transparent 30%)',
};

export default BoatGame;
