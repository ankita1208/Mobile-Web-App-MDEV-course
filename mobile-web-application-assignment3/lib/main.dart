// main.dart
import 'package:flutter/material.dart';
import 'app_router.dart';

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
      title: 'Daily Inspiration',

      // Theme data that defines the overall visual styling of the app.
      theme: ThemeData(
        primarySwatch: Colors.blue, // Set the primary color swatch to blue.

        // Customize the appearance of the app bar.
        appBarTheme: AppBarTheme(color: Colors.black), // Set the app bar color to black

        // Customize the appearance of the bottom navigation bar.
        bottomNavigationBarTheme: BottomNavigationBarThemeData(
          backgroundColor: Colors.black, // Set the bottom navigation bar color to black
          selectedItemColor: Colors.black, // Set the selected item color
          unselectedItemColor: Colors.blue, // Set the unselected item color
        ),
      ),

      // The initial route to be displayed when the app is launched.
      initialRoute: '/',

      // The onGenerateRoute callback that generates routes dynamically
      // based on the provided settings.
      onGenerateRoute: AppRouter.generateRoute,
    );
  }
}
