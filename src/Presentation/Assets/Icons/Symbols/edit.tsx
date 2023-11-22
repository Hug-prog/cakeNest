import * as React from 'react'
const EditSvg = (props: any) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		xmlSpace='preserve'
		width={512}
		height={512}
		style={{
			enableBackground: 'new 0 0 512 512',
		}}
		viewBox='0 0 32 32'
		{...props}
	>
		<path
			d='M25.264 1.008c-.524 0-1.049.197-1.443.592l-2.248 2.248 6.58 6.578 2.246-2.248a2.058 2.058 0 0 0 0-2.887L26.707 1.6a2.032 2.032 0 0 0-1.443-.592zm-5.106 4.254L3.889 21.532a1.022 1.022 0 0 0-.242.391c-.729 2.187-2.035 5.759-2.6 7.803a1 1 0 0 0 1.188 1.24c2.432-.562 5.687-1.896 7.84-2.613a1.03 1.03 0 0 0 .392-.236l16.269-16.275z'
			data-original='#000000'
		/>
	</svg>
)
export default EditSvg
