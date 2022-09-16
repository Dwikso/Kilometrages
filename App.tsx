import { StyleSheet, Text, View } from 'react-native';
import Dkv from './components/Dkv';

export default function App() {
  return (
    <View style={styles.container}>
      <Dkv />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
});
