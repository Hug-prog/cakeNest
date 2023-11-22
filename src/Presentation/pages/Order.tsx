import type { FC } from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../Application/TypedReduxHooks.Root'
const Order: FC = () => {
	const profile = useAppSelector((state) => state.Profile)
	return (
		<Section>
			<h1>Hello {profile.data.name}</h1>
		</Section>
	)
}

const Section = styled.section``

export default Order
