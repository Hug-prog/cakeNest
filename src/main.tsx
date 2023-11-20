import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from './Infrastructure/Store/Store.ts'
ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
	</Provider>
)
