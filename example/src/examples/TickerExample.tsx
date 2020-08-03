import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Ticker, useColors } from 'viserion';
import { SafeAreaView } from 'react-native-safe-area-context';

const TickerExample = () => {
  const [number, setNumber] = useState(0);
  // just a function to mock continous update of
  // ticker component,so that we can see the animation
  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => prevNumber + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const Colors = useColors();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Ticker text={number.toString()} />
    </SafeAreaView>
  );
};

export default TickerExample;
