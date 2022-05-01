<script>
    import {writable} from 'svelte/store'

    // export let pizzaLarge = [];
    // export let pizzaSmall = [];
    export let pizza = writable({L:[] , S:[]});
    let totalPay = 0;

    function addPizza(){

    }
</script>

<label><input type="checkbox" bind:group={pizza.L} value=1>L</label>
<label><input type="checkbox" bind:group={pizza.S} value=1>S</label>



<style>

label{
    margin: 7px;
}
</style>