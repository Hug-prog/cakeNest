import { FC } from 'react'
import { ToastContainer } from 'react-toastify'

// eslint-disable-next-line @typescript-eslint/ban-types
type toastproviderProps = {}

// eslint-disable-next-line no-empty-pattern
const ToastProvider: FC<toastproviderProps> = ({}) => {
	return (
		<ToastContainer
			position='bottom-right'
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme={'light'}
		/>
	)
}

export default ToastProvider
