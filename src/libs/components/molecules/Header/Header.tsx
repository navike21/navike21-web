'use client'

import { Content, Hamburger, Logo } from '@Components/atoms'
import clsx from 'clsx'
import React, { useState } from 'react'

export const Header = () => {
  const [pressed, setPressed] = useState(false)

  return (
    <header
      className={clsx(
        'dark:bg-gray-900',
        'bg-white shadow-md fixed top-0 w-full',
        {
          'z-50': pressed
        }
      )}
    >
      <Content
        className={clsx(
          'flex justify-between items-start transition-all ease-in-out duration-300 py-2',
          {
            'h-dvh': pressed,
            'h-16': !pressed
          }
        )}
      >
        <div>
          <Logo className="h-11" />
        </div>
        <Hamburger pressed={pressed} setPressed={setPressed} />
      </Content>
    </header>
  )
}
