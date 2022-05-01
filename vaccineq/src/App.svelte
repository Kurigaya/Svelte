<script>
	import { islogin, page } from "./stores.js";
	import Login from "./Login.svelte";
	import Menu from "./Menu.svelte";
	import Result from "./Showbook.svelte";
</script>

{#if !$islogin}
	<Login/>
{:else}
	{#if $page == "menu"}
		<Menu/>
	{:else if $page == "result"}
		<Result/>
	{/if}

{/if}

<style>

</style>