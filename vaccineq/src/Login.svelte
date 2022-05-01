<script>
    import {user, page, account, islogin} from "./stores.js";

    let accountNo = '';
    let pss = '';

    function checkLogin(){
        if (!(accountNo in $user) || $user[accountNo].pass != pss){
            alert("Incorrect Account Number or Password");
        }
        else{
            $islogin = true;
            $page = 'menu';
            $account = accountNo;
            accountNo = '';
            pss = '';
        }
    }
</script>

<label><input bind:value={accountNo} placeholder="Username"></label>
<label><input type="password" bind:value={pss} placeholder="Password"></label>
<button type="button" on:click={checkLogin}>Log In</button>

