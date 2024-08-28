import React from 'react'
import './singleCard.css';


function SingleCard({card, handleChoice, flipped, disabled}) {

    const handleClick = () => {
        if(!disabled){
            handleChoice(card);
        }
        
    }
    return (
        <div className="card">
            <div className={flipped ? 'flipped' : ""}>
                <img src={card.src} className='front' alt={card.src} />
                <img src='/img/cover.png' className='back' onClick={handleClick} alt='back card' />
            </div>
        </div>
    )
}

export default SingleCard
