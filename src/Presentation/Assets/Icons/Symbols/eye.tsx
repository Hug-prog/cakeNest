import * as React from 'react'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EyeSvg = (props: any) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlSpace='preserve'
		width={512}
		height={512}
		style={{
			enableBackground: 'new 0 0 512 512',
		}}
		viewBox='0 0 64 64'
		{...props}
	>
		<g fill='#393d53'>
			<path
				d='M32 50C19.493 50 9.254 39.17 5.432 34.514c-1.188-1.489-1.188-3.538-.019-5.005C9.254 24.83 19.496 14 32 14c12.51 0 22.747 10.83 26.567 15.486 1.188 1.488 1.189 3.537.021 5.005C54.746 39.17 44.504 50 32 50zm0-32C20.9 18 11.224 28.734 8.523 32.024 11.224 35.266 20.898 46 32 46c11.1 0 20.776-10.734 23.477-14.024C52.776 28.734 43.105 18 32 18z'
				data-original='#000000'
			/>
			<path
				d='M32 41c-4.962 0-9-4.037-9-9 0-4.962 4.038-9 9-9 4.963 0 9 4.038 9 9 0 4.963-4.037 9-9 9zm0-14c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z'
				data-original='#000000'
			/>
		</g>
	</svg>
)
export default EyeSvg
