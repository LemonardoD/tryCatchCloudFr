<script>
    import userIcon from "../../lib/icons/user.png"

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
            <a href="/showToken">
                Api Key
            </a>
            <a href="/error-logs">
                Error Log
            </a>    
        </div>
    {:else}
        <button class="user" on:click={() =>{handleDropdownClick()}}>
            <img  class="userIcon"src={userIcon} alt="User"/>
        </button>
    {/if}
</nav>

<style>
    
    .navBarDrdown a:hover{
        background-color: #1d1d21;
        border-radius: 20px;
    }
    a {
        font-family: inherit;
        font-size: 14px;
        color: #ffffff;
        display: flex;
        padding-top: 2px;
        padding-bottom: 2px;
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
    img {
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