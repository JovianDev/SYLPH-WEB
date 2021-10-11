<script>
	import { page } from '$app/stores';
	import DownloadBtn from './downloadBtn.svelte';
</script>

<header>
	<img src="/sylphLogoPossibility.png" />
	<nav>
		<ul>
			<li class:active={$page.path === '/'}>
				<a href="/">Home</a>
			</li>
			<li class:active={$page.path === '/about'}>
				<a href="/about">About</a>
			</li>
			<li class:active={$page.path === '/docs'}>
				<a href="/docs">Docs</a>
			</li>
		</ul>
	</nav>
	<div>
		<DownloadBtn />
	</div>
</header>

<style>
	header {
		margin: 0;
		padding: 0;
		height: 100px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #220439;
	}
	nav {
		margin: 0;
		padding: 0;
	}
	ul {
		display: flex;
		justify-content: space-between;
		gap: 15px;
		list-style: none;
	}
	li {
		text-decoration: none;
	}
	img {
		height: 50px;
		padding: 10px;
	}
	a {
		text-decoration: none;
		color: whitesmoke;
		font-size: 1.5em;
	}
	.active {
		border-bottom: 2px solid #ffeeaa;
	}
</style>
