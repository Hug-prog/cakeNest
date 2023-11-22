import type { FC } from 'react'
import LoginForm from '../Components/Form/LoginForm'

import styled from 'styled-components'
import bg from '../Assets/tarts.jpg'
import Logo from '../Components/Section/Logo'

const Login: FC = () => {
	return (
		<Page>
			<BgBalack></BgBalack>
			<Container>
				<Logo />
				<SubTitle>Bienvenue chez nous !</SubTitle>
				<HR />
				<Title2>Connectez-vous</Title2>
				<LoginForm />
			</Container>
		</Page>
	)
}

const Page = styled.section`
	background-color: black;
	width: 100%;
	height: 100vh;
	position: relative;
`

const Title2 = styled.h1`
	font-size: 1.5em;
	text-align: center;
	margin-top: 3rem;
	color: white;
	font-family: 'Pacifico', cursive;
`

const BgBalack = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-image: url(${bg});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	opacity: 0.2;
`

const SubTitle = styled.h1`
	font-size: 2.5em;
	text-align: center;
	margin-top: 3rem;
	color: white;
	font-family: 'Pacifico', cursive;
`

const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

const HR = styled.hr`
	width: 400px;
	margin-top: 3rem;
	color: #67b6b9;
`

export default Login
