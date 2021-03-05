import { Button } from '@material-ui/core'
import { Fragment } from 'react'

export default function Home() {

  const test = () => console.log('hello')

  return (
    <Fragment>
      <Button onClick={test}>Hello World</Button>
    </Fragment>
  )
}
