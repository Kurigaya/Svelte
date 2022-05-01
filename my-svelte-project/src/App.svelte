<script>
	import {writable} from 'svelte/store'
	import Page2 from './Page2.svelte';
	import Page3 from './Page3.svelte';
	let checker = writable('Index');
	
	let flavours = [];

	let newTask = '';
	let todoList = [];
	function addList(){
		todoList.push({task:newTask, done: false})
		todoList = todoList;
		newTask = '';
	}
</script>

<button on:click={()=>$checker='Index'}>Index</button>
<button on:click={()=>$checker='Page2'}>Page2</button>
<button on:click={()=>$checker='Page3'}>Page3</button>

{#if $checker=='Index'}
	<h1>Index Page</h1>
{:else if $checker=='Page2'}
	<Page2/>
{:else}
	<Page3/>
{/if}

<label><input type=checkbox bind:group={flavours} value="Chocolate Milk">Chocolate Milk</label>
<label><input type=checkbox bind:group={flavours} value="Strawberry">Strawberry</label>
<label><input type=checkbox bind:group={flavours} value="Green tea">Green tea</label>

<p>Your flavours : {flavours}</p>

<input bind:value={newTask} placeholder="new task ...">
<button on:click={addList}>Add</button>
<br>

{#each todoList as {task, done},index}
	<input type="checkbox" bind:checked={done}>
	<span class:done={done}>{task}</span>
	
	<br>
{/each}

<style>

button{
	color: white;
	background-color: black;
}

label{
	display: flex;	
}

input{
	margin: 7px;
}

</style>