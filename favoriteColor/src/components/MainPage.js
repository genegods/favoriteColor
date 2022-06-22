import React from 'react'
import { ColorData } from '../data/ColorData'
import {NavLink} from 'react-router-dom'

const MainPage = () => {
    const normalLink = ''
  return (
    <React.Fragment>
    <section>
      <div className='w-screen grid justify-center gap-3 md:grid-cols-3 md:w-3/5 md:mx-auto'>
          {
            ColorData.map((item, index) =>{
                return(
                    <div key={index}>
                        <div className={`w-60 h-60 rounded-full centered text-2xl text-white ${item.color}`}>
                            <NavLink to={item.path} 
                              className={({ isActive }) =>
                              isActive ? 'check': normalLink
                            }
                            >
                            <span className="invisible text-9xl">{item.number}</span>
                            </NavLink>
                        </div>
                    </div>
                )
            })
          }
      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage