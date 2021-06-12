import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default function Categories() {
  return (
    <div>
      <Menu className="categories" vertical secondary>
        <Menu.Item name="Main Menu">
          <button>
            <Icon fitted name="clipboard" size="large" />
            Main Menu
          </button>
          <button>
            <Icon fitted name="bullhorn" size="large" />
            Job Advertisement
          </button>
        </Menu.Item>
        <Menu.Item name="Job Position">
          <button>
            <Icon fitted name="code" size="large" />
            Job Position
          </button>
        </Menu.Item>
      </Menu>
    </div>
  );



}


