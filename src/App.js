import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Paper,
} from "@mui/material";

const App = () => {
  // State variables for input text, letter count, error, and analysis status
  const [inputText, setInputText] = useState("");
  const [letterCount, setLetterCount] = useState({});
  const [error, setError] = useState("");
  const [isAnalyzed, setIsAnalyzed] = useState(false);

  // Function to handle changes in the input text field
  const handleInputChange = (e) => {
    if (e.target.value.length <= 500) {
      // Limit input to 500 characters
      setInputText(e.target.value);
    }
  };

  // Function to analyze the input text and count the occurrences of each letter
  const analyzeText = () => {
    try {
      const text = inputText.toLowerCase(); // Convert text to lowercase for case-insensitive analysis
      const count = {}; // Initialize an empty object to hold the letter counts.
      // Iterate through each character in the text
      for (let char of text) {
        // Check if the character is a letter (a-z)
        if (char >= "a" && char <= "z") {
          // Increment the count for the letter
          count[char] = count[char] = (count[char] || 0) + 1;
        }
      }
      // update the state with the letter count
      setLetterCount(count);
      // set the isAnalyzed flag to true
      setIsAnalyzed(true);
    } catch (error) {
      setError(`An error occurred during text analysis:", ${error}`);
    }
  };

  // Function to reset the input text and letter count
  const reset = () => {
    setInputText("");
    setLetterCount({});
    setIsAnalyzed(false);
    setError("");
  };

  //Render the UI
  return (
    // Container for responsive layout
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Box sx={{ textAlign: "center", padding: "1rem" }}>
        {/* Typography for heading */}
        <Typography variant="h4" gutterBottom>
          EarthSoft Text Analyzer
        </Typography>

        {/* Text field for input text */}
        <TextField
          label="Enter your text (max 500 characters)"
          multiline
          rows={4}
          value={inputText} // Bind the value of the text field to the text state variable
          onChange={handleInputChange} // Handle changes to the text field
          variant="outlined"
          fullWidth
          helperText={`${inputText.length}/500`} // Display the character count
          style={{ marginBottom: "1rem" }}
          disabled={isAnalyzed} // Disable input field if text has been analyzed
        />

        {/* Button to analyze the text */}
        <Button
          variant="contained"
          color="primary"
          onClick={analyzeText} // Handle click event
          disabled={isAnalyzed || inputText.trim() === ""} // Disable button if text has been analyzed or is empty
          style={{ marginRight: "1rem" }}
        >
          Analyze Text
        </Button>

        {/* Button to reset the text and letter count */}
        <Button
          variant="outlined"
          color="secondary"
          onClick={reset} // Handle click event
        >
          Clear
        </Button>

        {/* Display error message if any */}
        {error && (
          <Box mt={2}>
            <Typography variant="body1" color="error">
              {error}
            </Typography>
          </Box>
        )}

        {/* Box for Results Display */}
        <Box
          marginTop={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {/* Display the letter count */}
          {isAnalyzed && (
            <Paper elevation={3} style={{ marginTop: "2rem", padding: "1rem" }}>
              <Typography variant="h6" gutterBottom>
                Letter Count:
              </Typography>
              {Object.keys(letterCount).length > 0 ? (
                <Box>
                  {Object.entries(letterCount)
                    .sort()
                    .map(([letter, count]) => (
                      <Box
                        key={letter}
                        display="flex"
                        justifyContent="space-between"
                        style={{
                          borderBottom: "1px solid #ccc",
                          padding: "0.5rem 0",
                        }}
                      >
                        <Typography variant="body1">
                          {letter.toUpperCase()}
                        </Typography>
                        <Typography variant="body1">{count}</Typography>
                      </Box>
                    ))}
                </Box>
              ) : (
                <Typography>No text analyzed yet.</Typography>
              )}
            </Paper>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default App;
