<script>
    import userIcon from "../lib/icons/user.png"
    import keyIcon from "../lib/icons/key.png"
    import logIcon from "../lib/icons/log.png"
	import { goto } from "$app/navigation";
    

    const navigateToErrorLogs = async () => {
        await goto('/error-logs?page=1', {replaceState: true});
    };
    
    let isDropdownOpen = false;
    const handleDropdownClick = () => {
        isDropdownOpen = !isDropdownOpen;
    }
</script>
  

  
<nav class="navSideBar">
    {#if isDropdownOpen}
        <button class="user" on:click={() =>{handleDropdownClick()}}>
            <img  class="userIcon"src={userIcon} alt="User"/>
        </button>
        <div class="navBarDrdown">
            <!-- svelte-ignore a11y-click-events-have-key-events --><!-- svelte-ignore a11y-missing-attribute --><!-- svelte-ignore a11y-no-static-element-interactions -->
            <a  href="/show-token" on:click={() =>{handleDropdownClick()}}>
                <img  class="subIcons"src={keyIcon} alt="Api Key"/>
            </a>
            <!-- svelte-ignore a11y-click-events-have-key-events --><!-- svelte-ignore a11y-missing-attribute --><!-- svelte-ignore a11y-no-static-element-interactions -->
            <a  on:click={() =>{handleDropdownClick(), navigateToErrorLogs()}}>
                <img  class="subIcons"src={logIcon} alt="Error log"/>
            </a>    
        </div>
    {:else}
        <button class="user" on:click={() =>{handleDropdownClick()}}>
            <img  class="userIcon"src={userIcon} alt="User"/>
        </button>
    {/if}
</nav>

<style>
    .subIcons {
        height: 32px;
        width: 32px;
    }
    
    .navBarDrdown a:hover{
        background-color: #27282c;
        border-radius: 20px;
    }
    a {
        cursor: pointer;
        font-family: inherit;
        font-size: 14px;
        color: #ffffff;
        display: flex;
        padding-top: 6px;
        padding-bottom: 6px;
        line-height: 40px;
        align-items: center;
        text-decoration: none;
        justify-content: center;
    }
    .navBarDrdown {
        border-radius: 20px;
        width:61px;
        position: absolute;
        top: 86px;
    }

    .user {
        left:0;
        padding: 12px 4px;
        border: none;
        background: none;
        position: absolute;
        cursor: pointer;
    }
    .userIcon {
        height: 52px;
        width: 52px;
    }
    .navSideBar {
      background: linear-gradient(rgb(32, 21, 36), #11111d, rgb(20, 6, 27));
      line-height: 1;
      padding: 12px 0px 2px;
      width: 60px;
      position: fixed;
      top: 0px;
      left: -0px;
      bottom: 0px;
      justify-content: space-between;
      z-index: 1020;
      border-right: 1px solid transparent;
      display: flex;
      flex-direction: column;
      transition: left 0.3s ease;
      @media (max-width: 1100px) {
        display: none;
      }
    }
  </style>