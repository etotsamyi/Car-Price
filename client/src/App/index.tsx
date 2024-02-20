import {
  Box, Container, Divider, Typography,
} from '@mui/material';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Box sx={{ mt: 3, mb: 2 }}>
        <Typography variant="h1" fontSize="h3.fontSize">
          Аукционы
        </Typography>
      </Box>

      <Box mb={3}>
        <Divider />
      </Box>
    </Container>
  );
}

export default App;
