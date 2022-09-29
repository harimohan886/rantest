import React from 'react'
import MainBanner from '../../components/frontend/Banner/MainBanner'
import Attraction from '../../components/frontend/Home/Attraction'
import Blogs from '../../components/frontend/Home/Blogs'
import Dates from '../../components/frontend/Home/Dates'
import HomeTabs from '../../components/frontend/Home/HomeTabs'
import Info from '../../components/frontend/Home/Info'
import SafariZone from '../../components/frontend/Home/SafariZone'
import Timing from '../../components/frontend/Home/Timing'

export default function Home() {
  return (
    <>
    <MainBanner/>
    <Dates/>
    <Timing/>
    <SafariZone/>
    <Info/>
    <Attraction/>
    <HomeTabs/>
    <Blogs/>
    </>
  )
}
