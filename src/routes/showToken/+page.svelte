<script lang="ts">
	import { goto } from '$app/navigation';

    export let data
</script>

<div class="Page">
    <div class="content">
        <p class="info">
            Here is your API Key: <small>{data.usageToken}</small>
        </p>
        <button  class="btn" on:click= {() =>{goto("/error-logs")}}>Error Log</button>
    </div>
</div>


<style>
    .btn {
        background-color: #4bb74a;
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
    small {
        word-break: break-all;
    }
    .content{
        width: 50%;
        left: 25%;
        position: relative;
        border-radius: 40px;
        text-align: center;
        padding: 24px;
        background-color: #27282c;
    }
    .Page{
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 24px;
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