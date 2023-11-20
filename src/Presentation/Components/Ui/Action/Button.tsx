import React, { memo } from 'react'
import type { FC } from 'react'
import '../../../styles/Components/Ui/Action/button.scss'

type ButtonProps = {
   // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-explicit-any
   Icon?: (props: any) => JSX.Element
   onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
   className?: string
   Name?: string
}

const Button: FC<ButtonProps> = ({ Name, Icon, onClick = () => {}, className = '' }) => {
   return (
      <button className={`btn ${Icon ? 'icon' : ''} ${className}`} onClick={onClick}>
         {Name && <p>{Name}</p>}
         {Icon && <Icon width={18} min-width={18} height={18} min-height={18} />}
      </button>
   )
}

export default memo(Button)
