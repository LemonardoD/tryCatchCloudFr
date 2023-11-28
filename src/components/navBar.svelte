<script>
    import keyIcon from "../lib/icons/key.png"
    import homeIcon from "../lib/icons/home.png"
    import logIcon from "../lib/icons/logs.png"
    import allErrorIcon from "../lib/icons/allerrors.png"
</script>
  
<div class="footer">
    <a  href="/user-projects">
        <img  class="homeIcon"src={homeIcon} alt="Projects"/>
        <small>My Projects</small>
    </a>
    <a  href="/grouped-errors">
        <img  class="subIcon"src={logIcon} alt="Grouped err logs"/>
        <small>Grouped Errors</small>
    </a>
    <a  href="/error-logs">
        <img  class="subIcon"src={allErrorIcon} alt="Err logs"/>
        <small>All Errors</small>
    </a>
    <a  href="/show-token">
        <img  class="subIcon"src={keyIcon} alt="Api Key"/>
        <small>Api Key</small>
    </a>
</div>

<style>
    small{
        margin: 0;
        padding-top: 8px;
        font-family: inherit;
        font-size: 11px;
    }
    .footer{
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        background-color: #191919;
        font-family: sans-serif, "Open Sans";
        border-top: 2px solid #2a2929;
        width: 800px;
        height: 50px;
        display: flex;
        box-shadow: rgba(0, 0, 0, 0.17) 0px -1px 4px 0px;
        position: fixed;
        justify-content: space-around;
        bottom: 0px;
        padding: 8px 0px;
        z-index: 100;
        left: 50%;
        transform: translateX(-50%);
    }
    @media (max-width: 1099px) {
        .footer{
            width: 90%;
        }
    }
    .homeIcon{
        height: 36px;
        width: 36px;
    }
    .subIcon {
        height: 36px;
        width: 36px;
    }
    a { 
        color: #949494;
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        justify-content: center;
        flex-direction: column; /* Added to make the text go under the image */
        text-align: center; /* Optional: Align text at the center */
    }
  </style>