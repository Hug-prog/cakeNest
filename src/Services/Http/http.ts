// Exemple d'implémentation pour une requête POST

import { ApiResult, IHttp, PostOptions } from '../Interface/Http/IHttp'

export class Http implements IHttp {
	public async Post<T>(options: PostOptions): Promise<ApiResult<T>> {
		const response = await fetch(`${options.url}`, {
			method: 'POST',
			mode: 'cors',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: options.isFormData ? options.body : JSON.stringify(options.body),
		})

		return await response.json()
	}
}
