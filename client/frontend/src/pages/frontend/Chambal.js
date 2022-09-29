import React from 'react'
import ChambalActivities from '../../components/frontend/Chambal/ChambalActivities';
import ChambalBanner from '../../components/frontend/Chambal/ChambalBanner'
import ChambalOptions from '../../components/frontend/Chambal/ChambalOptions'
import '../../css/chambal.css';

export default function Chambal() {
  return (
    <>
    <ChambalBanner/>
    <ChambalOptions/>
    <ChambalActivities/>
    </>
  )
}
