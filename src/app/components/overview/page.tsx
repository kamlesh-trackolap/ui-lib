"use client";
import React from 'react'
import Sidebar from '@/components/lib/sidebar/sideabar';

const CompoenentOverview = () => {
    const menu= [
  { key: 'dashboard', title: 'Dashboard', icon: <svg>...</svg> },
  { key: 'messages', title: 'Messages', icon: <svg>...</svg>, badge: 5 },
  {
    key: 'management',
    title: 'Management',
    icon: <svg>...</svg>,
    children: [
      { key: 'users', title: 'Users' },
      { key: 'teams', title: 'Teams' },
    ],
  },
];
  return (
    <div className='flex h-[100vh]'>
       {/* <Sidebar
      items={menu}
      defaultCollapsed={false}
      resizable
      rememberCollapsedKey="my-app-sidebar"
      footer={<div>Profile</div>}
      searchConfig={{ enabled: true, placeholder: 'Search...' }}
      onSelect={(key) => console.log('selected', key)}
    /> */}
    <Sidebar 
    style={{ height:'100vh',paddingTop:'100px'}}
    />
    <div>Main</div>
    </div>
  )
}

export default CompoenentOverview;
