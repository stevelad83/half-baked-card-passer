import React from 'react';
import { useGameContext } from '../context/GameContext.js';
import Card from './Card';

export default function ExecutePassButton({ passCard, from, selectedCard }) {
  const { to } = useGameContext();
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} /> from {from} to {to}
    </div>
  );
}
