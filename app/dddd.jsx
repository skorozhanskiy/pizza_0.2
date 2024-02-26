import React, { useState } from 'react';

interface Card {
    id: number;
    title: string;
    description: string;
}

const cards: Card[] = [
    { id: 1, title: 'Card 1', description: 'Description for Card 1' },
    { id: 2, title: 'Card 2', description: 'Description for Card 2' },
    { id: 3, title: 'Card 3', description: 'Description for Card 3' }
];

const App: React.FC = () => {
    const [openCardId, setOpenCardId] = useState<number | null>(null);

    const handleCardClick = (id: number) => {
        setOpenCardId(id);
    }

    return (
        <div>
            {cards.map(card => (
                <div key={card.id} onClick={() => handleCardClick(card.id)}>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                </div>
            ))}

            {openCardId && (
                <div>
                    <h3>{cards.find(card => card.id === openCardId)!.title}</h3>
                    <p>{cards.find(card => card.id === openCardId)!.description}</p>
                </div>
            )}
        </div>
    );
}

export default App;