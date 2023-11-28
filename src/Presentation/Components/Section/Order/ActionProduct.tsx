import { useState, type FC, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../../Ui/Action/Button'
import CrossSvg from '../../../Assets/Icons/Symbols/cross'
import EditSvg from '../../../Assets/Icons/Symbols/edit'
import ArrowDownSvg from '../../../Assets/Icons/Symbols/arrow-down'
import arrowUpSvg from '../../../Assets/Icons/Symbols/arrow-up'
import ProductForm from '../../Form/ProductForm'
import EditForm from '../../Form/EditForm'
import { useAppSelector } from '../../../../Application/TypedReduxHooks.Root'

const ActionProduct: FC = () => {
	const activeCard = useAppSelector((state) => state.ActiveCard.data)

	const [showModal, setShowModal] = useState<boolean>(false)
	const [showEdit, setShowEdit] = useState<boolean>(false)
	const [showCreate, setShowCreate] = useState<boolean>(true)

	useEffect(() => {
		setShowEdit(true)
		setShowModal(true)
		setShowCreate(false)
	}, [activeCard])

	return (
		<Section>
			<div className='action'>
				<Button
					Name='"'
					isActive={showModal ? true : false}
					Icon={showModal ? arrowUpSvg : ArrowDownSvg}
					onClick={() => setShowModal(!showModal)}
				/>
				<Button
					Name='Ajouter un produit'
					isActive={showCreate ? true : false}
					Icon={CrossSvg}
					onClick={() => {
						setShowCreate(!showCreate)
						setShowEdit(false)
					}}
				/>
				<Button
					Name='Modifier un produit'
					isActive={showEdit ? true : false}
					Icon={EditSvg}
					onClick={() => {
						setShowCreate(false)
						setShowEdit(!showEdit)
					}}
				/>
			</div>
			{showModal ? (
				<section>
					{showEdit ? <EditForm /> : ''}
					{showCreate ? <ProductForm /> : ''}
				</section>
			) : (
				''
			)}
		</Section>
	)
}

const Section = styled.section`
	.action {
		width: 60%;
		display: flex;
		align-items: center;
		.btn {
			background-color: white;
			border: none;
			box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
			border-radius: 5px 5px 0 0;
			p {
				color: gray;
			}
			svg {
				fill: gray;
			}
		}
		.icon {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 14px;
			padding: 0 1rem;
		}
		.btn:first-child {
			p {
				color: transparent !important;
			}
			svg {
				rotate: 180deg;
			}
		}
		.btn:nth-child(2) {
			svg {
				rotate: 134deg;
			}
		}
	}
	section {
		width: 100%;
		padding: 1rem 0;
		background-color: white;
	}
`

export default ActionProduct
