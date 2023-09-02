import Button from "@/components/Button";

// import styles from '../styles/Home.module.css';
export default function Index() {
	const callAPI = async () => {
		try {
			const res = await fetch(
				`https://jsonplaceholder.typicode.com/posts/1`
			);
			const data = await res.json();
			console.log(data);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div>
			<main>
                <Button onClick={callAPI} name={'Make API Call'} />
				<button onClick={callAPI}>Make API Call</button>
			</main>
		</div>
	);
}