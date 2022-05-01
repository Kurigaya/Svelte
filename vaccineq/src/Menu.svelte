<script>
    import { writable } from 'svelte/store';
    import { page, mydate, time, place } from "./stores.js";
    
    let submitbtn = document.getElementById("submitbtn");

    function getDay(){
        $mydate = document.getElementById("myDate").value;
    }

    function getTime(){
        let sld = document.querySelector('input[type="radio"]:checked');
        $time = sld.value;
    }

    function getPlace(){
        $place =  document.getElementById('place').value;
    }
    
    function gotoPayment(){
        $page = "result";
    }
    // submitbtn.addEventListener("click",function(){
    //     getDay();
    //     getTime();
    //     getPlace();
    // });
</script>

<h1>Here is Menu Page</h1>
<label for="myDate">Choose a Date</label>
<input type="date" name="myDate" id="myDate">
<button type="button" on:click={getDay}>Submit</button>

<h1>{$mydate}</h1>

<div id="chTime">
    <input type="radio" value="9.00-10.00">9.00-10.00<br>
    <input type="radio" value="10.00-11.00">10.00-11.00<br>
    <input type="radio" value="11.00-12.00">11.00-12.00<br>
</div>
<button type="button" on:click={getTime}>Submit</button>

<h1>{$time}</h1>

<label for="place">Choose place where u want to get vaccine.</label>
<select name="place" id="place">
    <option value="Central">Central</option>
    <option value="Hospital">Hospital</option>
    <option value="Take Home">Take Home</option>
</select>

<button type="button" on:click={getPlace}>Confirm</button>
<h1>{$place}</h1>

<button type="button" id="submitbtn" on:click={gotoPayment}>Next</button>
