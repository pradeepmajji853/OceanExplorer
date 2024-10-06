import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const BackgroundAudio = () => {
    const audioRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/interactive-learning') {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [location.pathname]);

    return (
        <audio ref={audioRef} loop preload="auto">
            <source src="/sound.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    );
};

export default BackgroundAudio;
