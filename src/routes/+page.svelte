<script>
    import { goto } from '$app/navigation';
    const { VITE_GITHUB_ID } = import.meta.env

    export let data
</script>

<div class="page">
    <h1>Welcome</h1>
    {#if data.token}
        <p>You can go straight to Error Log or retrieve your ID token</p>
        <button  class="btn" on:click= {() =>{goto("/grouped-errors")}}>Error Log</button>
        <button  class="btn" on:click= {() =>{goto("/showToken")}}>Retrieve ID</button>
    {:else}
        <p>You can connect via GitHub</p>
        <button  class="btn" on:click= {() =>{goto(`https://github.com/login/oauth/authorize?client_id=${VITE_GITHUB_ID}`)}}>GitHub</button>
    {/if}
</div>
  
<style>
    .page {
        padding: 18px;
        text-align: center;
        font-family: 'open sans', helvetica, arial, sans;
        width: 40%;
        min-width: 320px;
        max-width: 475px;
        background: #fff;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        box-shadow: 0px 2px 5px rgba(0,0,0,.25);
        
        @media(max-width: 40em){
            width: 95%;
            position: relative;
            margin: 2.5% auto 0 auto;
            left: 0%;
            transform: translate(0%,0%);
        }
    }
    
    h1{
        color: lighten(#2a2a2a, 20%);
        font-family: inherit;
        display: block;
        margin: 0;
        padding-bottom: 20px;
        padding-top: 20px;
    }
    p {
        color: lighten(#2a2a2a, 20%);
        font-family: inherit;
        font-size: 20px;
        display: block;
        box-shadow:inset 0px 1px 1px fadeout(white, 95%);
        border: 1px solid darken(#2a2a2a, 5%);
        margin: 0;
        font-weight: 300;
        padding-bottom: 30px;
    }
    
    .btn {
        cursor: pointer;
        font-family: inherit;
        display: inline-block;
        background: #16263e;
        padding: 8px 32px;
        color: white;
        border-radius: 5px;
        margin-right: 4px;
        margin-left: 4px;
        &:hover {
           background-color: black;
        }
        &:active {
            background: #111010; 
            box-shadow: inset 0px 1px 1px fadeout(black, 90%); 
        }
        &:focus {
            outline: none;
        }
    }
</style>