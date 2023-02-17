import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState([]);

  const handleRowPress = (rowNumber) => {
    console.log(`Row ${rowNumber} pressed!`);
    // Do something when the row is pressed, such as navigating to a new screen or updating the state of the component
  };

  const handleAddNote = () => {
    console.log(`Note added: ${noteText}`);
    if (noteText) {
      const newNote = {
        id: notes.length + 1,
        title: `Note ${notes.length + 1}`,
        text: noteText
      };
      setNotes([...notes, newNote]);
      setNoteText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headline1}>Note app</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your note here"
        value={noteText}
        onChangeText={setNoteText}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddNote}>
        <Text style={styles.buttonText}>Add new note</Text>
      </TouchableOpacity>
      {notes.map((note) => (
        <TouchableOpacity
          style={styles.row}
          onPress={() => handleRowPress(note.id)}
          key={note.id}
        >
          <Text style={styles.headline}>{note.title}</Text>
          <Text>{note.text}</Text>
        </TouchableOpacity>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 35
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  headline: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  headline1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 200,
    textAlign: 'center',
    color: '#93adbf'
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#93adbf',
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  }
});
