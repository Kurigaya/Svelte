<script>
    import {islogin, page} from './store.js';
    import Menu from "./Menu.svelte";
    import Login from "./Login.svelte";
    import Pay from "./Pay.svelte";
</script>

{#if !$islogin}
    <Login/>
{:else}
    {#if $page == 'menu'}
        <Menu/>
    {:else}
        <Pay/>
    {/if}
{/if}