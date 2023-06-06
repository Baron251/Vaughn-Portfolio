export default function Footer() {
	const d = new Date();
	let year = d.getFullYear();
	
	return (
		<div class="footer">
			<p style={{
				color: "#FFECD6"
			}}>Vaughn Winter &#169;{year}</p>
		</div>
	);
}
