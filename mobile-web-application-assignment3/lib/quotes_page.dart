// quotes_page.dart
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

// QuotesPage class, a StatefulWidget for displaying daily quotes.
class QuotesPage extends StatefulWidget {
  @override
  _QuotesPageState createState() => _QuotesPageState();
}

// State class for the QuotesPage widget.
class _QuotesPageState extends State<QuotesPage> {
  // Variables to store the current quote text and author.
  String quoteText = "Loading...";
  String quoteAuthor = "Unknown";

  // initState method, called when the stateful widget is inserted into the widget tree.
  @override
  void initState() {
    super.initState();
    fetchQuote(); // Fetch the initial quote when the widget is initialized.
  }

  // fetchQuote method, an asynchronous function to fetch a random quote from an API.
  Future<void> fetchQuote() async {
    try {
      print("Fetching quotes...");
      final response = await http.get(Uri.parse('https://type.fit/api/quotes'));
      print("Response status code: ${response.statusCode}");

      // Check if the response status code is 200 (OK).
      if (response.statusCode == 200) {
        List<dynamic> quotes = json.decode(response.body);
        quotes.shuffle(); // Shuffle the list of quotes.
        if (quotes.isNotEmpty) {
          final randomQuote = quotes[0];
          setState(() {
            quoteText = randomQuote['text'] ?? "Unknown";
            quoteAuthor = randomQuote['author'] ?? "Unknown";
          });
          print("Quote fetched successfully: $quoteText - $quoteAuthor");
        } else {
          print("No quotes found in the response.");
        }
      } else {
        // Set error message if the response status code is not 200.
        setState(() {
          quoteText = "Failed to load quote.";
          quoteAuthor = "Unknown";
        });
        print("Failed to fetch quote. Status code: ${response.statusCode}");
      }
    } catch (error) {
      // Set error message if an exception occurs during the API request.
      print("Error fetching quote: $error");
      setState(() {
        quoteText = "Error fetching quote.";
        quoteAuthor = "Unknown";
      });
    }
  }

  // build method, builds the UI for the QuotesPage.
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Daily Quotes')), // AppBar with the title 'Daily Quotes'.
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'Today\'s Quote:',
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(height: 16),
              Text(
                '"$quoteText"',
                style: TextStyle(
                  fontSize: 16,
                ),
                textAlign: TextAlign.center,
              ),
              SizedBox(height: 8),
              Text(
                '- $quoteAuthor',
                style: TextStyle(
                  fontSize: 14,
                  fontStyle: FontStyle.italic,
                ),
                textAlign: TextAlign.center,
              ),
              SizedBox(height: 16),
              ElevatedButton(
                onPressed: fetchQuote, // Callback to fetch another quote when the button is pressed.
                child: Text('Get Another Quote'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
