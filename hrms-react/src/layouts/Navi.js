import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function Navi() {
  return (
    <div>
      <Menu className  = "navi">
    <Menu.Item position =  'right'>
      <Button primary>Sign up</Button>
    </Menu.Item>

    <Menu.Item>
      <Button>Log-in</Button>
    </Menu.Item>

    <Menu.Item position = 'left'>
      <Button color = "black">
        H-R-M-S 
        Project
      </Button>
    </Menu.Item>
  </Menu>
    </div>
  )
}
