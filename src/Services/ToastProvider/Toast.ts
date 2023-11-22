import { toast } from 'react-toastify'
import '../../Presentation/Style/toasts.scss'

export const toastError = (message: string | undefined, id: string) => {
	toast.error(message, {
		position: 'bottom-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light',
		toastId: id,
	})
}

export const toastInfo = (message: string | undefined, id: string) => {
	toast.info(message, {
		position: 'bottom-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light',
		toastId: id,
	})
}

export const toastSucces = (message: string | undefined, id: string) => {
	toast.success(message, {
		position: 'bottom-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'light',
		toastId: id,
	})
}
