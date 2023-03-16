import React, { useState } from 'react'
import { ChartContainer } from "@components/Chart/ChartContainer";
import { getFullData } from "@components/Chart/helpers/func/getFullData";
import { getDataByCategory, getDataByCurrency, getDetailData } from "@components/Chart/helpers/func/getDataBy";
import { IChartContainer } from "@components/Chart/interface";
import s from './Tabs.module.scss'

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState('tab1');
  const [data, setData] = useState<IChartContainer>(getFullData(getDataByCurrency,"currency"))

  const changeContent = (btnName: string, btnType: string) => {
    let currentData: IChartContainer
    setCurrentTab(btnName)
    if (btnType === 'currency') {
      currentData = getFullData(getDataByCurrency,"currency")
    } else if (btnType === 'category') {
      currentData = getFullData(getDataByCategory,"category")
    } else {
      currentData = getFullData(getDetailData)
    }
    setData(currentData)
  }


  const tabList = [
    {
      name: 'tab1',
      label: 'По валюте',
      type: 'currency',
      content: (
        <div className={s.tab_content}>
          <ChartContainer {...data}/>
        </div>
      )
    },
    {
      name: 'tab2',
      label: 'По категории',
      type: 'category',
      content: (
        <div className={s.tab_content}>
          <ChartContainer {...data}/>
        </div>
      )
    },
    {
      name: 'tab3',
      label: 'Детально',
      type: 'detail',
      content: (
        <div className={s.tab_content}>
          <ChartContainer {...data}/>
        </div>
      )
    }
  ];

  return (
    <div className={s.main_wrap}>
      <div className={s.tabs}>
        {
          tabList.map((tab) => (
            <button
              key={tab.type}
              type='button'
              onClick={() => changeContent(tab.name, tab.type)}
              className={`${s.tab_btn} ${(tab.name === currentTab) ? s.active : ''}`}>
              {tab.label}
            </button>
          ))
        }
      </div>

      {
        tabList.map((tab) => {
          if (tab.name === currentTab) {
            return <div key={currentTab} className={s.tab_content_main_wrap}>{tab.content}</div>;
          }
          return null;
        })
      }
    </div>
  )
}

export {Tabs}
