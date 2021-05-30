import React from 'react'

import { ExampleComponent, Hello2, Hello } from 'components-ofesauto'
import 'components-ofesauto/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text="Create React Library Example 😄" />
      <Hello2 />
      <Hello />
    </>
  )
}

export default App
