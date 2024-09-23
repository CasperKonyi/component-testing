import { Page, PageHeader } from '@core/ui'
import { InformationSquareIcon } from '@hugeicons/react-pro'
import { Typography } from '@mui/joy'

const About = () => {
  return (
    <Page header={<PageHeader title='About' icon={InformationSquareIcon} />}>
      <Typography level='h1'>About</Typography>
    </Page>
  )
}
export default About
