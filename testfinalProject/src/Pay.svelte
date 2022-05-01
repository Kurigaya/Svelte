<script>
    import {writable} from 'svelte/store';
    let Payment = writable(0);
</script>

<h1>Your total payment is : {Payment}</h1>