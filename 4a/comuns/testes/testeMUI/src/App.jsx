import React from 'react';
import { Button, Container, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        MUI + React + Vite!
      </Typography>
      <Typography variant="body1" paragraph>
        This is a simple example of how to use Material-UI components in a Vite + React project.
      </Typography>
      <Typography variant="body1" paragraph>
        Este é um exemplo simples de como utilizar a MUI com React e Vite
      </Typography>
      <Typography variant="body1" paragraph>
        Esto es un exemplito simplito de como usar la MUI con React y Vite
      </Typography>
      <Button variant="contained" color="primary">
        Clica aí!
      </Button>
    </Container>
  );
}

export default App;
