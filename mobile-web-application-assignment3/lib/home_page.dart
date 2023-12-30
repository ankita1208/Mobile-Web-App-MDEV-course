// pages/home_page.dart
import 'package:flutter/material.dart';
import 'app_router.dart';
import 'greeting_page.dart';
import 'quotes_page.dart';
import 'affirmations_page.dart';

// Represents the HomePage widget, which includes a bottom navigation bar
// for navigating between different pages in the Daily Inspiration App.
class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _currentIndex = 0;

  // List of pages to be displayed in the app.
  final List<Widget> _pages = [
    HomeContent(),
    GreetingPage(),
    QuotesPage(),
    AffirmationsPage(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Daily Inspiration App'),
      ),
      // Display the current page based on the selected index.
      body: _pages[_currentIndex],
      // Bottom Navigation Bar for navigation between pages.
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (index) {
          // Update the selected index when a navigation item is tapped.
          setState(() {
            _currentIndex = index;
          });
        },
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.account_circle),
            label: 'Greeting',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.format_quote),
            label: 'Quotes',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.star),
            label: 'Affirmations',
          ),
        ],
      ),
      // Floating Action Buttons for additional actions.
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          // Floating Action Button to navigate to the Calculator page.
          FloatingActionButton(
            onPressed: () {
              Navigator.pushNamed(context, '/calculator');
            },
            child: Icon(Icons.calculate),
          ),
          SizedBox(height: 16), // Adds a vertical space of 16 pixels.
          // Floating Action Button to navigate to the Notes page.
          FloatingActionButton(
            onPressed: () {
              Navigator.pushNamed(context, '/notes');
            },
            child: Icon(Icons.note),
          ),
        ],
      ),
      // Set the location of the floating action buttons.
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
    );
  }
}

// Represents the content of the home page.
class HomeContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          // Display a welcome message on the home page.
          Text(
            'Welcome to the Daily Inspiration App!',
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            textAlign: TextAlign.center,
          ),
          SizedBox(height: 16), // Adds a vertical space of 16 pixels.
          // Provide instructions for exploring the app.
          Text(
            'Explore the tabs below for inspiration and motivation.',
            style: TextStyle(fontSize: 18),
            textAlign: TextAlign.center,
          ),
        ],
      ),
    );
  }
}
