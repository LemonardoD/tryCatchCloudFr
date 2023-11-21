<script lang="ts">
	import { goto } from '$app/navigation';

    export let data
</script>

<div class="Page">
    <p class="info">
        Here is your API Key: <small>{data.usageToken}</small>
    </p>
    <button  class="btn" on:click= {() =>{goto("/grouped-errors")}}>Error Log</button>
</div>


<style>
    .btn {
        cursor: pointer;
        font-family: inherit;
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
    small {
        word-break: break-all;
    }
    .Page{
        text-align: center;
        margin-top: 100px;
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        border: 1px solid #f3f4f6;
        background-color:#ffffff;
        padding: 24px;
    }
    .info{
        padding: 24px;
        text-align: center;
        color: lighten(#2a2a2a, 20%);
        font-family: inherit;
        font-size: 20px;
        display: block;
        box-shadow:inset 0px 1px 1px fadeout(white, 95%);
        border: 1px solid darken(#2a2a2a, 5%);
        margin: 0;
        font-weight: 300;
    }
</style>