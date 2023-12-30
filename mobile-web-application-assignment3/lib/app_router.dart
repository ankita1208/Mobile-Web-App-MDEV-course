// app_router.dart
import 'package:flutter/material.dart';
import 'home_page.dart';
import 'greeting_page.dart';
import 'quotes_page.dart';
import 'affirmations_page.dart';
import 'calculator_page.dart';
import 'notes_page.dart';

// Class responsible for generating routes in the app.
class AppRouter {
  // Generates and returns a Route based on the provided settings.
  static Route<dynamic>? generateRoute(RouteSettings settings) {
    // Switch case to determine which page to navigate to based on the route name.
    switch (settings.name) {
    // Route for the home page.
      case '/':
        return MaterialPageRoute(builder: (_) => HomePage());
    // Route for the greeting page.
      case '/greeting':
        return MaterialPageRoute(builder: (_) => GreetingPage());
    // Route for the quotes page.
      case '/quotes':
        return MaterialPageRoute(builder: (_) => QuotesPage());
    // Route for the affirmations page.
      case '/affirmations':
        return MaterialPageRoute(builder: (_) => AffirmationsPage());
    // Route for the calculator page.
      case '/calculator':
        return MaterialPageRoute(builder: (_) => CalculatorPage());
    // Route for the notes page.
      case '/notes':
        return MaterialPageRoute(builder: (_) => NotesPage());
    // Default case for unknown routes.
      default:
        return null;
    }
  }
}
