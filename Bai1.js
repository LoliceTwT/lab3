import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Text style={styles.heading}>
      GROW{"\n"}
        YOUR BUSINESS
        </Text>
      <Text style={styles.subtitle}>
        We will help you to grow your business using online server
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCF9', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    position: 'absolute',
    width: 140, 
    height: 140, 
    top: 67, 
    left: 110, 
    borderRadius: 100, 
    borderWidth: 15, 
    borderColor: 'black', 
    backgroundColor: '#00CCF9', 
  },
  heading: {
    fontSize: 25,
    fontWeight: 700,
    color: 'black',
    marginTop: 240, 
    marginBottom: 10,
    textAlign: 'center',
    bottom:58,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 700,
    color: 'black',
    marginBottom: 50,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'gold',
    paddingVertical: 10,
    paddingHorizontal: 20, 
    marginHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
