import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TitlebarImageList from './components/TitlebarImageList';

function App() {
  return (
        <>
          <CssBaseline />
          <Container fixed>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
            <TitlebarImageList />
            </Box>
          </Container>
        </>
        );
}

export default App;
