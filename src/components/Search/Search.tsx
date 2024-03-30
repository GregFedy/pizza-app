import { forwardRef } from 'react';

type InputProps = React.ComponentPropsWithRef<'input'>;

type Ref = HTMLInputElement;

const Search = forwardRef<Ref, InputProps>((props, ref) => {
	return (
		<div className="relative">
			<input
				ref={ref}
				className="h-[51px] w-[256px] rounded-[10px] border border-[#EFEFEF] bg-[#FCFCFD] py-4 pr-[30px] pl-11 font-normal text-sm placeholder:text-[#9AA0B4]"
				{...props}
			/>
			<img
				className="absolute top-[19px] left-[18px]"
				src="/search-icon.svg"
				alt="Иконка лупы"
			/>
		</div>
	);
});

export default Search;
