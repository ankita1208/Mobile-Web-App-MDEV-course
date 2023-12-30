// main.dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

// The main application widget.
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Simple Calculator',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: CalculatorPage(),
    );
  }
}

// Stateful widget for the Calculator page.
class CalculatorPage extends StatefulWidget {
  @override
  _CalculatorPageState createState() => _CalculatorPageState();
}

// State class for the Calculator page.
class _CalculatorPageState extends State<CalculatorPage> {
  String _output = '0';
  String _currentInput = '';
  double _num1 = 0.0;
  double _num2 = 0.0;
  String _operator = '';
  bool _isOperatorClicked = false;

  // Handles button clicks based on the provided buttonText.
  void _handleButtonClick(String buttonText) {
    if (buttonText == 'C') {
      _clear();
    } else if (buttonText == '=') {
      _calculate();
    } else if (buttonText == '+' || buttonText == '-' || buttonText == '*' || buttonText == '/') {
      _handleOperator(buttonText);
    } else {
      _handleDigit(buttonText);
    }
  }

  // Handles digit button clicks.
  void _handleDigit(String digit) {
    if (_isOperatorClicked) {
      setState(() {
        _currentInput = digit;
        _isOperatorClicked = false;
      });
    } else {
      setState(() {
        _currentInput = _currentInput == '0' ? digit : _currentInput + digit;
      });
    }
  }

  // Handles operator button clicks.
  void _handleOperator(String operator) {
    if (_currentInput.isNotEmpty) {
      setState(() {
        _num1 = double.parse(_currentInput);
        _operator = operator;
        _isOperatorClicked = true;
      });
    }
  }

  // Performs the calculation based on the stored operator.
  void _calculate() {
    if (_currentInput.isNotEmpty && _operator.isNotEmpty) {
      setState(() {
        _num2 = double.parse(_currentInput);
        switch (_operator) {
          case '+':
            _output = (_num1 + _num2).toString();
            break;
          case '-':
            _output = (_num1 - _num2).toString();
            break;
          case '*':
            _output = (_num1 * _num2).toString();
            break;
          case '/':
            if (_num2 != 0) {
              _output = (_num1 / _num2).toString();
            } else {
              _output = 'Error';
            }
            break;
        }
        _currentInput = '';
        _operator = '';
        _num1 = double.parse(_output);
      });
    }
  }

  // Clears the calculator state.
  void _clear() {
    setState(() {
      _output = '0';
      _currentInput = '';
      _operator = '';
      _num1 = 0.0;
      _num2 = 0.0;
      _isOperatorClicked = false;
    });
  }

  // Builds and returns a button widget with the specified buttonText.
  Widget _buildButton(String buttonText) {
    return ElevatedButton(
      onPressed: () {
        _handleButtonClick(buttonText);
      },
      child: Text(
        buttonText,
        style: TextStyle(fontSize: 20),
      ),
      style: ElevatedButton.styleFrom(
        padding: EdgeInsets.all(20),
        shape: CircleBorder(),
      ),
    );
  }

  // Builds the UI for the Calculator page.
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Simple Calculator'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            padding: EdgeInsets.all(16.0),
            alignment: Alignment.centerRight,
            child: Text(
              _currentInput.isEmpty ? _output : _currentInput,
              style: TextStyle(
                fontSize: 36,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              _buildButton('7'),
              _buildButton('8'),
              _buildButton('9'),
              _buildButton('/'),
            ],
          ),
          SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              _buildButton('4'),
              _buildButton('5'),
              _buildButton('6'),
              _buildButton('*'),
            ],
          ),
          SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              _buildButton('1'),
              _buildButton('2'),
              _buildButton('3'),
              _buildButton('-'),
            ],
          ),
          SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              _buildButton('0'),
              _buildButton('C'),
              _buildButton('='),
              _buildButton('+'),
            ],
          ),
        ],
      ),
    );
  }
}
