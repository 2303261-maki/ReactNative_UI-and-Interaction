import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const handlePress1 = () => {
    alert("Button 1 clicked!");
  };

  const handlePress2 = () => {
    alert("Button 2 clicked!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textBlack}>Ako Si Maki!</Text>
      <Text style={styles.textBlue}>wowow!</Text>

      {/* Text Input */}
      <TextInput
        style={styles.input}
        placeholder="Type something..."
      />

      {/* Buttons aligned horizontally */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePress1}>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handlePress2}>
          <Text style={styles.buttonText}>Another Button</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Use flex:1 for the main container
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  textBlack: {
    margin: 10,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
  },
  textBlue: {
    margin: 10,
    borderWidth: 2,
    borderColor: 'blue',
    padding: 10,
  },
  input: {
    width: '80%', // wider input
    height: 50,
    borderWidth: 2,
    borderColor: '#007BFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  buttonContainer: {
    flexDirection: 'row', // Horizontal alignment
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    flex: 1,
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#0056b3',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
