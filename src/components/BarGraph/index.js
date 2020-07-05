import React from 'react';
import { animated, useSprings } from 'react-spring';

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
    },
    {
        key: 'bar6',
        color: 'rgba(248,80,50,1)',
        from: { width: '0px' },
        to: { width: '360px' },
        config: { mass: 25 }
    },
];

const BarGraph = ({ bars = [] }) => {
    const springs = useSprings(bars.length, bars.map(({ key, color, ...config }) => config));

    return springs.map((spring, index) => (
        <animated.div style={{
            ...spring,
            height: '50px',
            marginBottom: '10px',
            backgroundColor: bars[index].color
        }} />
    ));
}

export default BarGraph;