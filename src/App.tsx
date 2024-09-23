import { Button, Page, PageHeader } from '@core/ui'
import { DashboardBrowsingIcon } from '@hugeicons/react-pro'
import { Typography } from '@mui/joy'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <Page header={<PageHeader title='Dashboard' description='A simple dashboard' icon={DashboardBrowsingIcon} />}>
      <Button onClick={() => setCount((prev) => prev + 1)} variant='solid' color='success' size='sm'>
        Click Me
      </Button>
      <Typography pt={1}>Button clicked ({count}) times</Typography>
    </Page>
  )
}

export default App
