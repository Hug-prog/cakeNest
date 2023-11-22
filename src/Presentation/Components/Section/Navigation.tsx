import type { FC } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import { useAppSelector } from '../../../Application/TypedReduxHooks.Root'
import { Link } from 'react-router-dom'
import ProfileSvg from '../../Assets/Icons/Symbols/profile'
import Switch from '../Ui/Selection/Switch'
import { toastInfo, toastSucces } from '../../../Services/ToastProvider/Toast'

const Navigation: FC = () => {
	const profile = useAppSelector((state) => state.Profile)
	const handleChange = (value: boolean) => {
		if (value) {
			toastSucces('Mode admin actif', 'Admin')
		} else {
			toastInfo('Mode admin désactiver', 'Admin')
		}
	}
	return (
		<Nav>
			<Logo />
			<div className='profile'>
				<Switch Icon={true} handleChange={handleChange} />
				<div>
					<h2>
						Salut <span className='span'>{profile.data.name}</span>
					</h2>
					<Link className='link' to={'/login'}>
						Se déconnecter
					</Link>
				</div>
				<ProfileSvg width={38} height={38} fill='rgb(128, 128, 128)' />
			</div>
		</Nav>
	)
}

const Nav = styled.section`
	border-radius: 5px 5px 0 0;
	background: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	.profile {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		h2 {
			margin: 0;
		}
		h2,
		.link {
			color: rgb(128, 128, 128);
			text-decoration: none;
		}

		a {
			font-size: 12px;
		}

		.span {
			color: #67b6b9;
		}
	}
`

export default Navigation
