/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import './animation.css'

const useAnimation = (_className, duration = 300) => {
    const [phase, setPhase] = useState(0);
    const [className, setClassName] = useState(_className)

    const play = () => {
        setPhase(1)
    }

    useEffect(() => {
        if (phase === 1) {
            setClassName(className + ' ' + _className + '-start')
            setTimeout(() => {
                setClassName(className + ' ' + _className + '-end')
                setTimeout(() => {
                    setClassName(_className);
                    setPhase(0);
                })
            }, duration);
        }

    }, [phase, duration])

    return [
        className,
        play
    ]
}

const Animation = () => {
    const [className, playAnimation] = useAnimation('box', 300)
    return <div>
        <div className={className}>
        </div>
        <button onClick={playAnimation}>play</button>
    </div>
}

export default Animation;