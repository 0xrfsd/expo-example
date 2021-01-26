import React from 'react';
import { StatusBar } from 'react-native';

import Navigation from './screens/Home';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Navigation />
    </>
  );
}
