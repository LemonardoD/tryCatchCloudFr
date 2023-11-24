<script lang="ts">
	import { page } from '$app/stores';
</script>


<div id="page">
    <div class="errContent">
        {#if $page.error}
            <h1>{$page.error.message}</h1><h2>{$page.status}</h2>
        {/if}
    </div>
</div>


<style>
    *{
        transition: all 0.6s;
    }
    #page{
        font-family: 'Lato', sans-serif;
        color: #888;
        margin: 0;
        display: table;
        width: 90%;
        height: 50vh;
        text-align: center;
        background-color: #181716;
    }

    .errContent{
        display: table-cell;
        vertical-align: middle;
    }

    .errContent h1{
        font-size: 50px;
        display: inline-block;
        padding-right: 12px;
        animation: type .5s alternate infinite;
    }
    .errContent h2{
        font-size: 40px;
        display: inline-block;
        padding-left: 12px;
    }

    @keyframes type{
        from{box-shadow: inset -3px 0px 0px #888;}
        to{box-shadow: inset -3px 0px 0px transparent;}
    }
</style>