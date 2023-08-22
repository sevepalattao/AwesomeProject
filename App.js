import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}> Kirk Cousins GOAT {'\n'}</Text>
      <Image
        style={{width: 500, height: 500}} 
        source={{
        uri:'https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https://thevikingage.com/wp-content/uploads/getty-images/2016/04/1015328556.jpeg'
      }}
      />
      <Text> {"\n"} Hello World! This is my favorite quarterback!</Text>
      <StatusBar style="auto" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
