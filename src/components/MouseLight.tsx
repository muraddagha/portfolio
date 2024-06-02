'use client'
import React from 'react'

import { useEffect, useState, useRef } from 'react';

const MouseLight = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const lightRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const updateLightPosition = () => {
            if (lightRef.current) {
                const scrollX = window.scrollX;
                const scrollY = window.scrollY;
                lightRef.current.style.background = `radial-gradient(600px at ${position.x + scrollX}px ${position.y + scrollY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
            }
            requestAnimationFrame(updateLightPosition);
        };
        updateLightPosition();
    }, [position]);

    return <div className='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute' ref={lightRef} />;
};

export default MouseLight;

