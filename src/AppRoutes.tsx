import { scTheme } from '@core/ui'
import { CssVarsProvider, GlobalStyles } from '@mui/joy'
import { lazy, ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const App = lazy(() => import('./App'))
const AboutRoute = lazy(() => import('./modules/About/AboutRoute'))
const TodoRoute = lazy(() => import('./modules/TodoList/TodoRoute'))

const AppRoutes = (): ReactElement => {
  const materialTheme = materialExtendTheme()

  return (
    <>
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
          <Routes>
            <Route index path='/' element={<App />} />
            <Route path='/about/*' element={<AboutRoute />} />
            <Route path='/todo/*' element={<TodoRoute />} />
          </Routes>
        </CssVarsProvider>
      </MaterialCssVarsProvider>
    </>
  )
}
export default AppRoutes
