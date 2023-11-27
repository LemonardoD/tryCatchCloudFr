<script>
    import userIcon from "../lib/icons/user.png"
    import keyIcon from "../lib/icons/key.png"
    import logIcon from "../lib/icons/log.png"

</script>
  

  
<nav class="navSideBar">
        <div class="user">
            <img  class="userIcon"src={userIcon} alt="User"/>
        </div>
        <div class="navBar">
            <!-- svelte-ignore a11y-click-events-have-key-events --><!-- svelte-ignore a11y-missing-attribute --><!-- svelte-ignore a11y-no-static-element-interactions -->
            <a  href="/show-token">
                <img  class="subIcons"src={keyIcon} alt="Api Key"/>
            </a>
            <!-- svelte-ignore a11y-click-events-have-key-events --><!-- svelte-ignore a11y-missing-attribute --><!-- svelte-ignore a11y-no-static-element-interactions -->
            <a  href="/error-logs?page=1">
                <img  class="subIcons"src={logIcon} alt="Error log"/>
            </a>    
        </div>
   
</nav>

<style>
    .subIcons {
        height: 36px;
        width: 36px;
    }
    
    .navBar a:hover{
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
    .navBar {
        border-radius: 20px;
        width:61px;
        position: absolute;
        top: 86px;
    }

    .user {
        left:0;
        padding: 12px 6px;
        border: none;
        background: none;
        position: absolute;
        cursor: auto;
    }
    .userIcon {
        height: 48px;
        width: 48px;
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