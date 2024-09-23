import { createRoot } from 'react-dom/client'
import { registerLicenses } from './licenses.ts'
import { ComponentsProvider } from '@core/ui'
import './theme/fonts.css'
import AppRoutes from 'AppRoutes.tsx'
import { BrowserRouter } from 'react-router-dom'

registerLicenses()

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ComponentsProvider>
      <AppRoutes />
    </ComponentsProvider>
  </BrowserRouter>,
)
