type ButtonProps = {
	size: 'big' | 'small';
} & React.ComponentPropsWithoutRef<'button'>;

const Button = ({ children, type, size, ...props }: ButtonProps) => {
	const buttonStyles = {
		big: 'h-[60px] w-[248px] rounded-[28px] bg-orange font-semibold text-[15px] text-white uppercase leading-5 hover:bg-orange-dark',
		small:
			'h-[43px] w-[117px] rounded-[28px] bg-orange font-normal text-[15px] text-white leading-4 hover:bg-orange-dark',
	};
	return (
		<button type={type} className={buttonStyles[size]} {...props}>
			{children}
		</button>
	);
};
export default Button;
