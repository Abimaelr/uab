import React from 'react';
import '../assets/css/horizontal.css';

function HorizontalCard() {
    return (
        <div className="hCard">
            <div className="imgCard"> 
            <i class="las la-microphone"></i>
            </div>
            <div className="textCard">
                <h3>World Class Speakers</h3>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
            </div>
        </div>
    )
}

export default HorizontalCard;