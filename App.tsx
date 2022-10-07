import React from 'react'
import Dkv from './src/components/Dkv';
import ApContainer from './src/components/app-container'
import Navigator from './src/'


export default function App() {
  return (
    <AppContainer>
      <Navigator/>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
});
