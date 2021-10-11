<script>
	import { userOS } from '../stores/store';
</script>

<button class="download-btn">
	<span>
		<i class="fa fa-download" />
		{`Download for ${$userOS}`}
	</span>
</button>

<style>
	.download-btn {
		height: 3em;
		width: auto;
		background-color: #714c8e;
		border-radius: 5px;
		margin: 10px;
		color: whitesmoke;
		font-weight: 700;
	}
	.download-btn:hover {
		background-color: #ffeeaa;
		color: #220439;
	}
</style>
