<script context="module">
	export const prerender = true;
</script>

<script>
	import ContributorBlock from '$lib/contributorBlock.svelte';
</script>

<svelte:head>
	<title>Sylph</title>
</svelte:head>
<container class="main-container">
	<section class="title-head">
		<div class="title-text">
			<h2>Svelte Prototyping</h2>
			<h1>SIMPLIFIED</h1>
			<p>An Open Source Drag and Drop</p>
			<p>Svelte Prototyping App</p>
		</div>
		<div class="title-img">
			<img src="/sylph-screen.png" alt="sylph screen shot" />
		</div>
	</section>
	<section class="features">
		<div class="feature">
			<div class="feature-discription">
				<img src="" alt="feature icon" />
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio exercitationem quasi
					recusandae tenetur placeat beatae assumenda ipsa illo, inventore neque fugit quibusdam
					corrupti eius ea provident amet nisi doloremque velit eligendi, numquam est tempore
					voluptatem voluptatibus facere! Fuga consequatur eum id reprehenderit est illo quidem
					voluptatibus obcaecati nobis tempore numquam, error optio illum, in molestiae expedita
					consectetur. Eius tempora expedita quam. Fugit illo, nostrum delectus tempore ipsum
					provident eveniet voluptas praesentium corrupti officia sequi ratione animi sapiente
					dolores, maxime blanditiis!
				</p>
			</div>
			<div class="feature-img">
				<img src="" alt="feature screenshot" />
			</div>
		</div>
		<div class="feature">
			<div class="feature-img">
				<img src="" alt="feature screenshot" />
			</div>
			<div class="feature-discription">
				<img src="" alt="feature icon" />
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio exercitationem quasi
					recusandae tenetur placeat beatae assumenda ipsa illo, inventore neque fugit quibusdam
					corrupti eius ea provident amet nisi doloremque velit eligendi, numquam est tempore
					voluptatem voluptatibus facere! Fuga consequatur eum id reprehenderit est illo quidem
					voluptatibus obcaecati nobis tempore numquam, error optio illum, in molestiae expedita
					consectetur. Eius tempora expedita quam. Fugit illo, nostrum delectus tempore ipsum
					provident eveniet voluptas praesentium corrupti officia sequi ratione animi sapiente
					dolores, maxime blanditiis!
				</p>
			</div>
		</div>
		<div class="feature">
			<div class="feature-discription">
				<img src="" alt="feature icon" />
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio exercitationem quasi
					recusandae tenetur placeat beatae assumenda ipsa illo, inventore neque fugit quibusdam
					corrupti eius ea provident amet nisi doloremque velit eligendi, numquam est tempore
					voluptatem voluptatibus facere! Fuga consequatur eum id reprehenderit est illo quidem
					voluptatibus obcaecati nobis tempore numquam, error optio illum, in molestiae expedita
					consectetur. Eius tempora expedita quam. Fugit illo, nostrum delectus tempore ipsum
					provident eveniet voluptas praesentium corrupti officia sequi ratione animi sapiente
					dolores, maxime blanditiis!
				</p>
			</div>
			<div class="feature-img">
				<img src="" alt="feature screenshot" />
			</div>
		</div>
	</section>
	<section class="download">download</section>
	<section class="dev-section">
		<h1>Sylph Contributors</h1>
		<div class="devs">
			<ContributorBlock
				devImg="https://media-exp1.licdn.com/dms/image/C4D03AQGA6GbnL7avug/profile-displayphoto-shrink_800_800/0/1631750855713?e=1639612800&v=beta&t=pbtoVQC0qc8Ap0n2dRDbj7qvyYN8fwVApYtQsZqu4Ks"
				name="Randy Diebold"
				linkedin="https://www.linkedin.com/in/randy-diebold-523802206/"
				github="https://github.com/Randy-diebold"
			/>
			<ContributorBlock
				devImg="https://media-exp1.licdn.com/dms/image/C4D03AQFkBD1Q_j8AAw/profile-displayphoto-shrink_800_800/0/1563465185947?e=1639612800&v=beta&t=-8k7a0_FGR6M7eaQeMdNbfyLlD3DD0ETRNZSWAR5ipc"
				name="Kailee Pedersen"
				linkedin="https://www.linkedin.com/in/kaileepedersen/"
				github="https://github.com/kailee-p"
			/>
			<ContributorBlock
				devImg="https://media-exp1.licdn.com/dms/image/C4E03AQEKSfkLzET2Dw/profile-displayphoto-shrink_800_800/0/1629157163376?e=1639612800&v=beta&t=Dr92AuQHcyoSBWiZSq1LgPTqkqmCSGjnKrUfHcCIcmE"
				name="Haobo Wang"
				linkedin="https://www.linkedin.com/in/haobowang225/"
				github="https://github.com/hwpanda"
			/>
			<ContributorBlock
				devImg="https://media-exp1.licdn.com/dms/image/C4E03AQF499xOPl_xjQ/profile-displayphoto-shrink_800_800/0/1631916229559?e=1639612800&v=beta&t=lQ3b5BwuQETt64nYRZzq8SMzN3-c6wvPvIAFVDyD0wQ"
				name="Nick Andreala"
				linkedin="https://www.linkedin.com/in/nickandreala/"
				github="https://github.com/JovianDev"
			/>
		</div>
	</section>
</container>

<style>
	.dev-section {
		display: flex;
		flex-direction: column;

		background-color: #1e1e1e;
		width: 100%;
		height: 400px;
	}
	.dev-section h1 {
		color: whitesmoke;
	}
	.devs {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.title-head {
		display: grid;
		grid-template-columns: 1fr 1fr;
		height: 100%;
		background-color: #532b72;
		justify-content: center;
		padding: 30px;
		margin: 0 0 20px 0;
	}
	.title-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.title-img {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.main-container {
		background-color: #202040;
	}
	.title-text h1 {
		margin: 0;
		padding: 0;
		color: #ffeeaa;
		font-weight: 800;
		font-size: 3.3em;
	}
	.title-text h2 {
		margin: 0;
		padding: 0;
		color: whitesmoke;
		font-weight: 600;
		font-size: 2em;
	}
	.title-text p {
		margin: 0;
		padding: 0;
		color: darkgray;
	}
	.feature {
		display: flex;
		justify-content: space-evenly;
	}
</style>
