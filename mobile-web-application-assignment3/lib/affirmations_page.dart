// pages/affirmations_page.dart
import 'package:flutter/material.dart';

// Class representing the Affirmations Page
class AffirmationsPage extends StatelessWidget {
  // Define a list of affirmation data (image path and text)
  final List<Map<String, String>> affirmations = [
    {'imagePath': 'assets/affirmation1.jpeg', 'text': 'I am powerful and resilient.'},
    {'imagePath': 'assets/affirmation2.jpeg', 'text': 'I radiate confidence and grace.'},
    {'imagePath': 'assets/affirmation3.jpeg', 'text': 'I attract positive energy into my life.'},
    {'imagePath': 'assets/affirmation4.jpeg', 'text': 'I am surrounded by love and abundance.'},
    {'imagePath': 'assets/affirmation5.jpeg', 'text': 'I am capable of achieving my goals.'},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Affirmations'),
      ),
      body: GridView.builder(
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2, // Two items in each row
          crossAxisSpacing: 16.0,
          mainAxisSpacing: 16.0,
        ),
        itemCount: affirmations.length,
        padding: EdgeInsets.all(16.0),
        itemBuilder: (context, index) {
          // Return an AffirmationCard for each item in the list
          return AffirmationCard(
            imagePath: affirmations[index]['imagePath']!,
            text: affirmations[index]['text']!,
          );
        },
      ),
    );
  }
}

// Widget representing an Affirmation Card
class AffirmationCard extends StatelessWidget {
  final String imagePath;
  final String text;

  // Constructor to initialize the AffirmationCard
  const AffirmationCard({
    required this.imagePath,
    required this.text,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 4,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Image.asset(
            imagePath,
            height: 150, // Adjust the height as needed
          ),
          SizedBox(height: 8),
          Text(
            'Affirmation:',
            style: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.bold,
            ),
          ),
          SizedBox(height: 4),
          Text(
            '"$text"',
            style: TextStyle(
              fontSize: 14,
            ),
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }
}
