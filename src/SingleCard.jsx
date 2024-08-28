import React from 'react'

function SingleCard({card, handleChoice}) {

    const handleClick = () => {
        handleChoice(card);
    }
    return (
        <div className="card">
            <div>
                <img src={card.src} className='front' alt={card.src} />
                <img src='/img/cover.png' className='back' onClick={handleClick} alt='back card' />
            </div>
        </div>
    )
}

export default SingleCard
