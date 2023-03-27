# Getting Started with Create React App 👾

![image](https://user-images.githubusercontent.com/108693961/227958162-8050a1e5-ba41-4206-acf5-0fb9cbcc25f2.png)
![image](https://user-images.githubusercontent.com/108693961/227958271-8272b00f-cc7a-4626-9ffe-9c57e2aa98c3.png)
![image](https://user-images.githubusercontent.com/108693961/227958510-edb9eba2-731c-4725-a785-4c66e0c5d28b.png)
![localhost_3000_](https://user-images.githubusercontent.com/108693961/227959021-99c54b5a-1584-4145-a6a2-e08d88834526.png)
#### The dark mode and the light mode is a ready-made build in the MUI library that is used in this way, here is by default is dark 

```
const [mode, setMode] = useState('dark');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  ```
  #### here is we createTheme name it darkTheme and wrapping it for all components using themeProvider as shown below
  
  ```
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
  ```
