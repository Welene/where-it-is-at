import './title.css';

// Small little Title component so that all my h1's have the same styling, but we (...again, me*) send in {title} as a prop to have different text content
function Heading({ className, title }) {
	return <h1 className={className}>{title}</h1>;
}

export default Heading;
