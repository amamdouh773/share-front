import React from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"

export const SideMenuData= [
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:"nav-text"
    },
    {
        title:'About us',
        path:'/about',
        icon:<AiIcons.AiFillInfoCircle/>,
        cName:"nav-text"
    },
    {
        title:'services',
        path:'/services',
        icon:<AiIcons.AiFillFlag/>,
        cName:"nav-text"
    },
    {
        title:'our work',
        path:'/work',
        icon:<FaIcons.FaBriefcase/>,
        cName:"nav-text"
    },
]
