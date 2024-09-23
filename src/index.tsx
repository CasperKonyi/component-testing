import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { registerLicenses } from './licenses.ts'
import { ComponentsProvider, scTheme, SCThemeProvider } from '@core/ui'
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles'
import { CssBaseline, CssVarsProvider, GlobalStyles } from '@mui/joy'
import './theme/fonts.css'

registerLicenses()

const materialTheme = materialExtendTheme()

createRoot(document.getElementById('root')!).render(
  <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
    <CssBaseline enableColorScheme />
    <CssVarsProvider theme={scTheme}>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: scTheme.palette.customColors.masterBg,
          },
        }}
      />
      <SCThemeProvider>
        <ComponentsProvider>
          <App />
        </ComponentsProvider>
      </SCThemeProvider>
    </CssVarsProvider>
  </MaterialCssVarsProvider>,
)
