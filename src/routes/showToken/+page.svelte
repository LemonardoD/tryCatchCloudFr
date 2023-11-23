<script lang="ts">
	import { goto } from '$app/navigation';
    import NavSideBar from '../../components/navBar.svelte';
    export let data
</script>

<NavSideBar/>
<div class="page">
    <div class="content">
        <p class="info">
            Here is your API Key: <small>{data.usageToken}</small>
        </p>
        <button  class="btn" on:click= {() =>{goto("/error-logs")}}>Back to Errors</button>
    </div>
</div>


<style>
    .btn {
        background-color: #13061b;
        color: #fff;
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
    small {
        word-break: break-all;
    }
    .content{
        position: relative;
        border-radius: 40px;
        text-align: center;
        padding: 24px;
        background-color: #27282c;
    }
    .page{
        background-color: #27282c;
        border-radius: 40px;
        padding: 18px;
        text-align: center;
        width: 1024px;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        @media(max-width: 1023px){
            width: 90%;
            position: relative;
            margin: 2.5% auto 0 auto;
            left: 0%;
            transform: translate(0%,0%);
        }
    }
    
    .info{
        padding: 24px;
        text-align: center;
        color: #fff;
        font-family: inherit;
        font-size: 20px;
        box-shadow:inset 0px 1px 1px fadeout(white, 95%);
        margin: 0;
        font-weight: 300;
    }
    
</style>