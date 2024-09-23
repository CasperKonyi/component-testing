import { Page, PageHeader } from '@core/ui'
import { InformationSquareIcon } from '@hugeicons/react-pro'
import { Typography } from '@mui/joy'

const About = () => {
  return (
    <Page
      header={
        <PageHeader
          title='About'
          icon={InformationSquareIcon}
          description='A page about our app'
          badgeTitle='Information'
          badgeColor='warning'
          onBackClick={() => window.history.back()}
        />
      }
    >
      <Typography level='h1'>About this page</Typography>
    </Page>
  )
}
export default About
