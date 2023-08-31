import React from 'react'
import { IconContext } from 'react-icons'
import { IconType } from 'react-icons'

type IconPropsType = {
    icon: IconType
    size: string
    color: string
}

const Icon: React.FC<IconPropsType> = ({ icon, size, color }) => {
    const IconComponent = icon

    return (
        <IconContext.Provider value={{ size, color }}>
            <IconComponent />
        </IconContext.Provider>
    )
}

export default Icon
