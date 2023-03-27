import {Box, createTheme} from '@mui/material';
import {Stack} from '@mui/system';
import Feed from './Feed';
import Navbar from './Navbar';
import Rightbar from './Rightbar';
import Sidebar from './sidebar';
import {ThemeProvider} from '@mui/material';
import Add from './Add';
import {useState} from 'react';

function App() {
  const [mode, setMode] = useState('dark');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={'background.default'} color={'text.primary'}>
          <Navbar />
          <Stack direction={'row'} justifyContent="space-evenly">
            <Sidebar mode={mode} setMode={setMode} />
            <Feed /> <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
