export interface ApiResult<T> {
	message: string[]
	succeeded: boolean
	data: T
	exception: any
	code: number
}

export interface PostOptions {
	url: string
	body: any
	isFormData?: boolean
}

export interface IHttp {
	Post: <T>(options: PostOptions) => Promise<ApiResult<T>>
}
