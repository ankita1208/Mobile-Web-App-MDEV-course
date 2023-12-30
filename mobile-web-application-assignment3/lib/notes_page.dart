// main.dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

// The main application widget. It sets up the MaterialApp, which is the root
// widget for the Flutter application.
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // Title of the app.
      title: 'Notes App',

      // Theme data that defines the overall visual styling of the app.
      theme: ThemeData(
        primarySwatch: Colors.blue, // Set the primary color swatch to blue.
      ),

      // The home page of the app, which is an instance of the NotesPage widget.
      home: NotesPage(),
    );
  }
}

// NotesPage class
class NotesPage extends StatefulWidget {
  @override
  _NotesPageState createState() => _NotesPageState();
}

// State class for the NotesPage widget
class _NotesPageState extends State<NotesPage> {
  List<String> notes = []; // List to store the user's notes
  TextEditingController noteController = TextEditingController(); // Controller for the note text field

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // Scaffold widget that provides the basic structure of the page.
      appBar: AppBar(
        // AppBar at the top of the page with the title 'Notes'.
        title: Text('Notes'),
      ),
      body: Column(
        children: [
          Expanded(
            // Expanded widget to take remaining vertical space for the list of notes.
            child: ListView.builder(
              // ListView.builder for efficiently building a scrolling list of notes.
              itemCount: notes.length, // Number of items in the list.
              itemBuilder: (context, index) {
                // Builder function for each item in the list.
                return ListTile(
                  // ListTile to display each note in the list.
                  title: Text(notes[index]), // Text widget displaying the note text.
                  onTap: () {
                    _showNoteDetails(notes[index]); // Show note details when tapped.
                  },
                );
              },
            ),
          ),
          Padding(
            // Padding widget to add space around the text field and button.
            padding: const EdgeInsets.all(16.0),
            child: Row(
              // Row widget to display the text field and button in a horizontal layout.
              children: [
                Expanded(
                  // Expanded widget to allow the text field to take available horizontal space.
                  child: TextField(
                    // TextField widget for entering new notes.
                    controller: noteController, // Assign the controller for managing text input.
                    decoration: InputDecoration(
                      hintText: 'Enter your note', // Hint text in the text field.
                    ),
                    onChanged: (value) {
                      // Callback function called when the text in the field changes.
                      // Here, the note can be updated as the user types (not utilized in this code).
                    },
                    onSubmitted: (value) {
                      // Callback function called when the user submits the text field.
                      // Add the note to the list when submitted.
                      if (value.isNotEmpty) {
                        setState(() {
                          notes.add(value); // Add the note to the list.
                          noteController.clear(); // Clear the text field.
                        });
                      }
                    },
                  ),
                ),
                SizedBox(width: 16),
                ElevatedButton(
                  // ElevatedButton widget for adding a new note.
                  onPressed: () {
                    // Callback function called when the button is pressed.
                    // Add the note to the list when the button is pressed.
                    final String value = noteController.text;
                    if (value.isNotEmpty) {
                      setState(() {
                        notes.add(value); // Add the note to the list.
                        noteController.clear(); // Clear the text field.
                      });
                    }
                  },
                  child: Text('Add Note'), // Text on the button.
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  // Function to show the details of a selected note in an AlertDialog.
  void _showNoteDetails(String note) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Note Details'), // Title of the AlertDialog.
          content: Text(note), // Content of the AlertDialog displaying the note text.
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop(); // Close the AlertDialog when the button is pressed.
              },
              child: Text('Close'), // Text on the button to close the AlertDialog.
            ),
          ],
        );
      },
    );
  }
}
