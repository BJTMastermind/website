class CommonNav extends HTMLElement {
    connectedCallback() {
        let baseURL = new URL(".", this.baseURI);

        if (baseURL.href.endsWith("page/")) {
            baseURL = new URL("..", baseURL);
        }

        const logoPath = new URL("images/nav-and-tilebars/logo.png", baseURL).href;
        const home = new URL("index.html", baseURL).href;
        const about = new URL("page/about.html", baseURL).href;
        const temp_mc = new URL("page/temp-minecraft.html", baseURL).href;
        const temp_ht = new URL("page/temp-hytale.html", baseURL).href;

        this.outerHTML = `
        <!-- value="0" is a custom value that stores the result of window.scrollY from Javascript. (Used by the css) -->
        <nav id="scrolldata" value="0">
            <a href="${home}"><img src="${logoPath}"></a>
            <p class="home-link"><a href="${home}">Home</a></p>
            <p class="about-link"><a href="${about}">About</a></p>
            <p class="yt-link"><a href="https://youtube.com/@BJTMastermindGames/videos">My Videos</a></p>
            <p class="mc-dropdown"><a href="${temp_mc}">Minecraft</a></p>
            <p class="ht-dropdown"><a href="${temp_ht}">Hytale</a></p>
        </nav>
        <div class="nav-space"></div>
        `

        const scriptElement = document.createElement("script");
        scriptElement.src = new URL("js/detectScroll.js", baseURL).href;
        document.body.append(scriptElement);
    }
}

class CommonFooter extends HTMLElement {
    connectedCallback() {
        let baseURL = new URL(".", this.baseURI);

        if (baseURL.href.endsWith("page/")) {
            baseURL = new URL("..", baseURL);
        }

        const githubLogo = new URL("images/github-logo-footer.png", baseURL).href;

        this.outerHTML = `
        <footer>
            <hr>
            <br>
            <h4 align="center">Hosted on <br><a href="https://github.com/BJTMastermind/website" target="_blank"><img src="${githubLogo}" width="75px"></a></h4>
        </footer>
        `
    }
}

customElements.define('common-nav', CommonNav);
customElements.define('common-footer', CommonFooter);
