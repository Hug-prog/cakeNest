import { useEffect, useState } from 'react'
import type { FC } from 'react'
import '../../../Style/Components/Ui/Selection/Switch.scss'
import ValidateSVG from '../../../Assets/Icons/Symbols/validate'
import CrossSvg from '../../../Assets/Icons/Symbols/cross'

type SwitchPropsProps = {
	Icon: boolean
	defaulftValue?: boolean
	handleChange: (value: boolean) => void
}

const Switch: FC<SwitchPropsProps> = ({
	Icon,
	handleChange,
	defaulftValue = false,
}) => {
	const [switched, setSwitched] = useState<boolean>(false)
	const handleClick = () => {
		setSwitched(!switched)
		handleChange(!switched)
	}

	useEffect(() => {
		setSwitched(defaulftValue)
	}, [])

	return (
		<div
			onClick={handleClick}
			className={`switch ${switched ? 'switchTrue' : 'switchFalse'}`}
		>
			{switched ? (
				<div className='switch_container'>
					<p>Désactiver le mode admin</p>
					<div
						className={`switch_right ${
							Icon ? 'switch_icon' : 'switch_icon_null'
						}`}
					>
						{Icon ? <ValidateSVG width={15} height={15} /> : ''}
					</div>
				</div>
			) : (
				<div className='switch_container'>
					<div
						className={`switch_left ${
							Icon ? 'switch_icon' : 'switch_icon_null'
						}`}
					>
						{Icon ? <CrossSvg width={10} height={10} /> : ''}
					</div>
					<p>Activer le mode admin</p>
				</div>
			)}
		</div>
	)
}

export default Switch
