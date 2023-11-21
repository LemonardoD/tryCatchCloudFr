<script>
    import { goto } from '$app/navigation';
    const { VITE_GITHUB_ID } = import.meta.env

    export let data
</script>

<div class="page">
    <h1>Welcome</h1>
    {#if data.token}
        <p>You can go straight to Error Log or retrieve your ID Api token</p>
        <button  class="btn" on:click= {() =>{goto("/error-logs")}}>Error Log</button>
        <button  class="btn" on:click= {() =>{goto("/showToken")}}>Api token</button>
    {:else}
        <p>You can connect via GitHub</p>
        <button  class="btn" on:click= {() =>{goto(`https://github.com/login/oauth/authorize?client_id=${VITE_GITHUB_ID}`)}}>GitHub</button>
    {/if}
</div>
  
<style>
    .page {
        background-color: #231F1E;
        border-radius: 40px;
        padding: 18px;
        text-align: center;
        min-width: 500px;
        max-width: 700px;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
        
        @media(max-width: 40em){
            width: 95%;
            position: relative;
            margin: 2.5% auto 0 auto;
            left: 0%;
            transform: translate(0%,0%);
        }
    }
    
    h1{
        color: #ffffff;
        font-family: inherit;
        display: block;
        margin: 0;
        padding-bottom: 20px;
        padding-top: 20px;
    }
    p {
        color: #ffffff;
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
        background-color: #6fa8dc;
        color: #fff;
        margin: 0 6px;
        padding: 10px 20px;
        border: none;
        border-radius: 45px;
        cursor: pointer;
        font-family: inherit;
        font-size: 16px;
            &:hover {
            opacity: 0.5;
            }
    }
</style>