import { Button, Link, Page, PageHeader, Section } from '@core/ui'
import { DashboardBrowsingIcon, UserIcon } from '@hugeicons/react-pro'
import { Stack, Typography, useTheme } from '@mui/joy'
import { useState } from 'react'

const App = () => {
  const theme = useTheme()
  const [count, setCount] = useState(0)
  return (
    <Page
      header={
        <PageHeader
          title='Dashboard'
          description='A simple dashboard'
          icon={DashboardBrowsingIcon}
          badgeTitle='Main'
          badgeColor='success'
        />
      }
    >
      <Section
        hasBorder
        title='Section'
        icon={<UserIcon />}
        description='Description'
        contentSx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Button onClick={() => setCount((prev) => prev + 1)} variant='solid' color='success' size='sm'>
          Click Me
        </Button>
        <Typography fontSize={theme.fontSize.lg} fontWeight={theme.fontWeight.md} pt={1}>
          Button clicked ({count}) times
        </Typography>
        <Section>
          <Stack direction='row' spacing={1}>
            <Link underline href='/'>
              Home
            </Link>
            <Link underline href='/about'>
              About
            </Link>
          </Stack>
        </Section>
      </Section>
    </Page>
  )
}

export default App
