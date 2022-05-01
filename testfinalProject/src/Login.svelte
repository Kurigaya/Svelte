<script>
    import {accounts, islogin, page, account} from './store.js';

    let accountNo = '';
    let pss = '';

    function checkLogin(){
        if (!(accountNo in $accounts) || $accounts[accountNo].pass != pss){
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

<h1>Kann Pizza, Welcome to darkside</h1>
<input bind:value={accountNo} placeholder="Account No">
<input type="password" bind:value={pss} placeholder="Password">
<button type="button" on:click={checkLogin}>Log In</button>

