<script>
    import keyIcon from "../lib/icons/key.png"
    import homeIcon from "../lib/icons/home.png"

</script>
  

  
<nav class="navSideBar">
    <div class="navBar">
        <!-- svelte-ignore a11y-click-events-have-key-events --><!-- svelte-ignore a11y-missing-attribute --><!-- svelte-ignore a11y-no-static-element-interactions -->
        <a  href="/error-logs?page=1">
            <img  class="homeIcon"src={homeIcon} alt="Error log"/>
        </a>
        <!-- svelte-ignore a11y-click-events-have-key-events --><!-- svelte-ignore a11y-missing-attribute --><!-- svelte-ignore a11y-no-static-element-interactions -->
        <a  href="/show-token">
            <img  class="keyIcon"src={keyIcon} alt="Api Key"/>
        </a>  
    </div>
</nav>

<style>
    .homeIcon{
        height: 40px;
        width: 40px;
    }
    .keyIcon {
        height: 36px;
        width: 36px;
    }
    .navBar a:hover{
        background-color: #222;
        border-radius: 20px;
    }
    a {
        cursor: pointer;
        font-family: inherit;
        font-size: 14px;
        color: #ffffff;
        display: flex;
        padding: 14px 2px;
        line-height: 40px;
        align-items: center;
        text-decoration: none;
        justify-content: center;
    }
    .navBar {
        border-radius: 25px;
        width:61px;
        position: absolute;
        top: 24px;
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