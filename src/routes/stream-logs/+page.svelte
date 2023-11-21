<script lang="ts" >
    import type { ErrorLogs } from "../../types/types"
    import pusher from "../../lib/pusher"
	import Table from "../../components/table/table.svelte";
    import { writable } from "svelte/store";
	import { goto } from "$app/navigation";
    export let data

    const errorStore = writable(data.message);
    let userId = data.message[0].user
    let countValue: ErrorLogs[];

    errorStore.subscribe((value) => {
        countValue = value;
    });
    
    const channel = pusher.subscribe(userId);
    channel.bind('newError', function(error: ErrorLogs) {
            errorStore.update(prevArray => [error, ...prevArray])
        })
</script>

    
<Table tblName="Streamed Errors"  data={countValue}/>
<button  class="btn" on:click= {() =>{goto("/error-logs")}}>Back to Errors</button>


<style>
    .btn {
        margin-left: 36px;
        background-color: #6fa8dc;
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
</style>

