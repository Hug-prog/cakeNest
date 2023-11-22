import React, { memo } from 'react'
import type { FC } from 'react'
import '../../../Style/Components/Ui/Action/Button.scss'

type ButtonProps = {
	// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-explicit-any
	Icon?: (props: any) => JSX.Element
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
	className?: string
	Name?: string
	isActive?: boolean
}

const Button: FC<ButtonProps> = ({
	Name,
	Icon,
	onClick = () => {},
	className = '',
	isActive,
}) => {
	return (
		<button
			className={`btn ${Icon ? 'icon' : ''} ${className} ${
				isActive ? 'active' : ''
			}`}
			onClick={onClick}
		>
			{Icon && <Icon width={18} min-width={18} height={18} min-height={18} />}
			{Name && <p>{Name}</p>}
		</button>
	)
}

export default memo(Button)
