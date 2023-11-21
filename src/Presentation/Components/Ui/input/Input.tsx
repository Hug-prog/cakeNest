import React, { FC, useEffect, useState } from 'react'
import '../../../Style/Components/Ui/Input/Input.scss'
import Button from '../Action/Button'
import { EyeSlashSvg, EyeSvg } from '../../../Assets/Icons/Symbols/index'
type InputProps = {
	placeholder?: string
	name: string
	title?: string
	// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-explicit-any
	Icon?: (props: any) => JSX.Element
	value?: string | number | readonly string[] | undefined | null
	min?: number
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	onClick?: () => void
	type?:
		| 'text'
		| 'password'
		| 'email'
		| 'number'
		| 'tel'
		| 'url'
		| 'search'
		| 'date'
		| 'time'
		| 'datetime-local'
		| 'month'
		| 'week'
		| 'color'
		| 'range'
		| 'file'
		| 'image'
		| 'submit'
		| 'reset'
		| 'button'
		| 'hidden'
		| 'datepicker'
}

const Input: FC<InputProps> = ({
	placeholder,
	title,
	name,
	Icon,
	value = '',
	min,
	onChange,
	onClick = () => {},
	type = 'text',
}) => {
	const Focus = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = event.currentTarget as HTMLDivElement
		const input = target.querySelector('input') as HTMLInputElement
		input.focus()
	}

	const [showBtn, setShowBtn] = useState<boolean>(false)
	const [newTypePassword, setNewTypePassword] = useState<string>('password')

	const handelShowPassword = () => {
		setNewTypePassword('text')
		setShowBtn(false)
	}
	const handelHiddePassword = () => {
		setNewTypePassword('password')
		setShowBtn(true)
	}

	useEffect(() => {
		if (type === 'password') setShowBtn(true)
	}, [])

	return (
		<div
			className={`mainInput ${
				type === 'password' ? 'password' : Icon ? 'icon' : 'input'
			}`}
			onClick={(event) => {
				Focus(event)
				onClick()
			}}
		>
			{title && <h6>{title}</h6>}
			<div>
				{Icon && <Icon width={18} min-width={18} height={18} min-height={18} />}
				<input
					name={name}
					type={type === 'password' ? newTypePassword : type}
					min={min}
					placeholder={placeholder}
					id={name}
					onChange={onChange}
					value={value === null ? undefined : value}
				/>
				{type === 'password' ? (
					showBtn ? (
						<Button Icon={EyeSvg} onClick={handelShowPassword} />
					) : (
						<Button Icon={EyeSlashSvg} onClick={handelHiddePassword} />
					)
				) : (
					''
				)}
			</div>
		</div>
	)
}

export default Input
