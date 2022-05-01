<script>
    import { writable } from "svelte/store";
    import { page, mydate, time, place} from "./stores.js";

    function goBack(){
        $page = "menu";
    }
</script>

<h1>Here is Result of your information</h1>

<h2>{$mydate}</h2>
<h2>{$time}</h2>
<h2>{$place}</h2>

<button type="button" on:click={goBack}>Back</button>