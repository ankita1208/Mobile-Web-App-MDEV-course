// pages/greeting_page.dart
import 'package:flutter/material.dart';

// Represents the GreetingPage widget, which displays a welcome message and image.
class GreetingPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Greeting')),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Card(
            elevation: 4,
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  // Displays the welcome message with specified styles.
                  Text(
                    'Welcome to Daily Inspiration!',
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  SizedBox(height: 16), // Adds a vertical space of 16 pixels.
                  // Displays an image with the specified path and height.
                  Image.asset(
                    'assets/image.jpeg', // Replace with the correct path
                    height: 200,
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
