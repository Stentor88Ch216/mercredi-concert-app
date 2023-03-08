import ConcertsList from './components/ConcertsList';

import {
  extendTheme as extendJoyTheme,
  CssVarsProvider,
} from '@mui/joy/styles';

const joyTheme = extendJoyTheme();


function App() {
  return (
    <CssVarsProvider
    theme={joyTheme}
      defaultMode="dark"
      modeStorageKey="demo_dark-mode-by-default"
      >
        <ConcertsList />
    </CssVarsProvider>
  );
}

export default App;


/*
    import {
      extendTheme as extendJoyTheme,
      CssVarsProvider,
    } from '@mui/joy/styles';

    const joyTheme = extendJoyTheme();

    ...

    <CssVarsProvider
    theme={joyTheme}
      defaultMode="dark"
      modeStorageKey="demo_dark-mode-by-default"
      >
        <ConcertsList />
    </CssVarsProvider>
*/
