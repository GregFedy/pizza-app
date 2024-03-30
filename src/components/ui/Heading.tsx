type HeadingProps = React.ComponentPropsWithoutRef<'h1'>;

const Heading = ({ children, ...props }: HeadingProps = {}) => {
	return (
		<h1 className="font-semibold text-4xl" {...props}>
			{children}
		</h1>
	);
};
export default Heading;
