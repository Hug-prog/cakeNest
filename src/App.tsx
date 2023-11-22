import Router from './Services/Router/Router'
import ToastProvider from './Services/ToastProvider/ToastProvider'
import './Presentation/Style/index.scss'
function App() {
	return (
		<>
			<Router />
			<ToastProvider />
		</>
	)
}

export default App
