"use client"
import React from 'react'
import { useTheme } from '@/theme'
const HomePage = () => {
  const {toggleTheme} = useTheme();
  return (
   <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark p-6 rounded-lg">
  <h1 className="text-primary-light dark:text-primary-dark text-2xl font-bold">
    Documentation Title
  </h1>
  <p className="text-muted-light dark:text-muted-dark">
    This is an example description.
  </p>
  <button className="bg-accent-light dark:bg-accent-dark text-white px-4 py-2 rounded bg-amber-50" onClick={toggleTheme}>
    Click Me
  </button>
</div>

  )
}

export default HomePage
