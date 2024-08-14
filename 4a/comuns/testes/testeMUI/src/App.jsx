import React from 'react';
import { Button, Container, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to MUI with Vite
      </Typography>
      <Typography variant="body1" paragraph>
        This is a simple example of how to use Material-UI components in a Vite + React project.
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Container>
  );
}

export default App;
