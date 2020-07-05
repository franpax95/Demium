import React, { useRef, useEffect } from 'react';

import BarGraph from '../../components/BarGraph';

import './Progress.css';

const bars = [
    {
        key: 'bar1',
        color: 'salmon',
        from: { width: '0px' },
        to: { width: '250px' },
        config: { mass: 20 }
    },
    {
        key: 'bar2',
        color: 'cornflowerblue',
        from: { width: '0px' },
        to: { width: '312px' },
        config: { mass: 10 }
    },
    {
        key: 'bar3',
        color: 'yellow',
        from: { width: '0px' },
        to: { width: '400px' },
        config: { mass: 20 }
    },
    {
        key: 'bar4',
        color: 'skyblue',
        from: { width: '0px' },
        to: { width: '450px' },
        config: { mass: 10 }
    },
    {
        key: 'bar5',
        color: 'lightgreen',
        from: { width: '0px' },
        to: { width: '325px' },
        config: { mass: 20 }
    }
];

const mediabar = [
    {
        key: 'bar6',
        color: 'rgba(248,80,50,1)',
        from: { width: '0px' },
        to: { width: '360px' },
        config: { mass: 25 }
    }
];

const Progress = () => {
    const ref = useRef();

    useEffect(() => {
        setTimeout(() => {
            ref.current.style.opacity = 1;
        }, 5000);
    }, []);

    return (
        <div className="Progress">
            <h1>
                Your progress
            </h1>

            <div className="body">
                <div className="percents" style={{ marginRight: '20px' }}>
                    <p style={{ color: 'salmon '}}>Physics</p>
                    <p style={{ color: 'cornflowerblue '}}>Language</p>
                    <p style={{ color: 'yellow '}}>Maths</p>
                    <p style={{ color: 'skyblue '}}>English</p>
                    <p style={{ color: 'lightgreen '}}>Biology</p>
                    <br /><br />
                    <p className="media">Media</p>
                </div>
                <div className="percents">
                    <p style={{ color: 'salmon '}}>50%</p>
                    <p style={{ color: 'cornflowerblue '}}>65%</p>
                    <p style={{ color: 'yellow '}}>80%</p>
                    <p style={{ color: 'skyblue '}}>90%</p>
                    <p style={{ color: 'lightgreen '}}>75%</p>
                    <br /><br />
                    <p className="media">72%</p>
                </div>
                <div className="bar-graph-wrapper">
                    <BarGraph bars={bars} />
                    <br /><br />
                    <BarGraph bars={mediabar} />
                </div>
            </div>

            <h2 className="result" ref={ref} style={{ opacity: 0 }}>
                <img src="favicon.jpeg" alt="Boosted" />
                You're doing well! A little more and you will get it 
            </h2>
        </div>
    )
}

export default Progress;