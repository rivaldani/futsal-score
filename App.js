import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, ImageBackground } from 'react-native';

const App = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const increaseScore = (team) => {
    if (team === 'A') {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) {
        Alert.alert('Hasil', 'Tim A Menang!');
      }
    } else if (team === 'B') {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) {
        Alert.alert('Hasil', 'Tim B Menang!');
      }
    }
  };

  const decreaseScore = (team) => {
    if (team === 'A' && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === 'B' && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <ImageBackground
      source={require('./assets/futsal-background.jpg')} // Tambahkan gambar latar di folder assets
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Pengaturan Skor Futsal</Text>

        <View style={styles.scoreContainer}>
          <View style={styles.teamContainer}>
            <Text style={styles.teamName}>Tim A</Text>
            <Text style={styles.score}>{scoreA}</Text>
            <View style={styles.buttonRow}>
              <Button title="+" onPress={() => increaseScore('A')} />
              <Button title="-" onPress={() => decreaseScore('A')} />
            </View>
          </View>

          <View style={styles.teamContainer}>
            <Text style={styles.teamName}>Tim B</Text>
            <Text style={styles.score}>{scoreB}</Text>
            <View style={styles.buttonRow}>
              <Button title="+" onPress={() => increaseScore('B')} />
              <Button title="-" onPress={() => decreaseScore('B')} />
            </View>
          </View>
        </View>

        <View style={styles.resetContainer}>
          <Button title="Reset" onPress={resetScores} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  teamContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 10,
  },
  teamName: {
    fontSize: 20,
    marginBottom: 10,
    color: '#fff',
  },
  score: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  resetContainer: {
    marginTop: 20,
  },
});

export default App;
