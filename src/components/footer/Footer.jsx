export default function Footer() {
	const d = new Date();
	let year = d.getFullYear();
	
	return (
		<div class="footer">
			<p>Vaughn Winter &#169;{year}</p>
		</div>
	);
}
