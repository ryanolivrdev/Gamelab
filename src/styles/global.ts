import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --background: #121214;
        --text-font: #15A8CA;
        --title-font: #fff;
        --button: #14213D;
        --text-secondary: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--text-font) var(--button);
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
  height: 10px;
}

*::-webkit-scrollbar-track {
  background: var(--button);
}

*::-webkit-scrollbar-thumb {
  background-color: var(--text-font);
  border-radius: 20px;
  border: 3px solid var(--button);
}
    // font-size: 16px (Desktop)
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720) {
            font-size: 87.5%; // 14px
        }
    }
    body {
        background: #fff;
        -webkit-font-smoothing: antialiased;
    }
      textarea, button, p {
        font-family: 'Poppins', sans-serif;
        color: var(--text-secondary);
        font-weight: 400;
    }
    input{
        font-family: 'Poppins', sans-serif;
        color: black;
        font-weight: 400; 
    }
    h1 {
        font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: var(--text-secondary);
        font-weight: 600;
    }
    h2, h3, h4, h5, h6, strong{
        font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: var(--title-font);
        font-weight: 600;
    }
    button, a {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
