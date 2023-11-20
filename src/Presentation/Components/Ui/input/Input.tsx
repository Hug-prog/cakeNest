import React, { FC, useEffect, useState } from 'react'
import '../../../styles/Components/Ui/Input/input.scss'
import Button from '../Action/Button'
import { EyeSlashSvg, EyeSvg } from '../../../Assets/Icons/Symbols/index'
type InputProps = {
	placeholder?: string
	name: string
	title?: string
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
			className={`mainInput ${type === 'password' ? 'password' : 'input'}`}
			onClick={(event) => {
				Focus(event)
				onClick()
			}}
		>
			{title && <h6>{title}</h6>}
			<div>
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
