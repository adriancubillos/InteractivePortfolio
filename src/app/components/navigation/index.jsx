'use client'
import { BtnList } from '@/app/data';
import React from 'react'
import NavButton from './NavButton';
import ResponsiveComponent from '../ResponsiveComponent';
import useScreenSize from '../hooks/useScreenSize';

const Navigation = () => {

  const angleIncrement = 360 / BtnList.length;
  const size = useScreenSize();
  const isLarge = size >= 1024;
  const isMedium = size >= 768;
  const isSmall = size < 480;

  const getlistLenght = (list) => {
    return Math.ceil(list.length / 2);
  }

  return (


    <div className='w-full fixed h-screen flex items-center justify-center'>
      <ResponsiveComponent>
        {
          ({ size }) => {
            return !isSmall ?
              <div className="w-max flex items-center justify-center relative hover:pause animate-spin-slow  group">
                {
                  BtnList.map((btn, index) => {

                    const angleRad = (index * angleIncrement) * (Math.PI) / 180;
                    const radius = isLarge
                      ? "calc(20vw - 1rem)"
                      : isMedium
                        ? "calc(35vw - 1rem)"
                        : "calc(40vw - 1rem)";
                    const x = `calc(${radius}*${Math.cos(angleRad)})`;
                    const y = `calc(${radius}*${Math.sin(angleRad)})`;

                    return <NavButton key={btn.label} x={x} y={y} {...btn} />
                  })
                }
              </div>
              :
              <>
                {/* Menu split in two */}
                <div className="w-full xs:w-max px-2.5 xs:p-0 flex flex-col space-y-4 items-start xs:items-center justify-center relative">
                  {
                    BtnList.slice(0, getlistLenght(BtnList)).map((btn, index) => {
                      return <NavButton key={btn.label} x={0} y={0} {...btn} />
                    })
                  }
                </div>
                <div className="w-full xs:w-max px-2.5 xs:p-0 flex flex-col space-y-4 items-end xs:items-center justify-center relative">
                  {
                    BtnList.slice(getlistLenght(BtnList), BtnList.length).map((btn, index) => {
                      return <NavButton key={btn.label} x={0} y={0} {...btn} />
                    })
                  }
                </div>
              </>
          }
        }
      </ResponsiveComponent>
    </div>

  )
}

export default Navigation