import { forwardRef } from 'react';

type InputProps = React.ComponentPropsWithRef<'input'>;

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, InputProps>((props, ref) => {
	return (
		<input
			ref={ref}
			className="h-[65px] rounded-[10px] border p-5 font-normal text-[17px] placeholder:text-gray-light"
			{...props}
		/>
	);
});

export default Input;
