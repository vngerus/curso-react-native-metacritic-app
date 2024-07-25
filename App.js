import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={{ uri: "https://www.metacritic.com/a/img/catalog/provider/6/3/6-1-4763-13.jpg" }} style={{ width: 215, height: 294 }} />
      <Text>Testing app</Text>
      <Button
        title='Pulsa aquí'
        onPress={() => alert('Hola')} />
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
