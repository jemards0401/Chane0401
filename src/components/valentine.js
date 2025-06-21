import React, { useState } from 'react';
import Img from '../photos/love.jpg';

function Valentine() {
    const [isFlapOpen, setFlapOpen] = useState(false);

    const handleEnvelopeClick = () => {
        setFlapOpen(!isFlapOpen);
    };

  return (
    <div>
        <div className="container">
            <div 
                className={`envelope-wrapper ${isFlapOpen ? 'flap' : ''}`} 
                onClick={handleEnvelopeClick}
            >
                <div className="envelope">
                    <div className="letter">
                        <div className="text">
                            <strong>Dear Chane Kyler L. Ferraren,</strong>
                            <p>
                            I don't just want to hear you, I want to understand you fully 
                            and be by your side through everything, always. 

                            <br />
                            <br />
                            -Your Loveeey, Jemards.

                            <br />
                            <br />
                            <img src={Img} alt="Love" />
                            <br />
                            <br />

                            </p>
                        </div>
                    </div>
                </div>
                <div className="heart"></div>
            </div>
        </div>
        {isFlapOpen && (
            <div className="hearts-container">
                <div className="heart-animation"></div>
                <div className="heart-animation"></div>
                <div className="heart-animation"></div>
                <div className="heart-animation"></div>
                <div className="heart-animation"></div>
                <div className="heart-animation"></div>
                <div className="heart-animation"></div>
                <div className="heart-animation"></div>
                <div className="heart-animation"></div>
            </div>
        )}
    </div>
  );
}

export default Valentine;