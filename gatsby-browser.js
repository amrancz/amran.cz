// custom typefaces
import './static/fonts/Inter.var.woff2'

// CSS
import './src/styles/global.css'

class ButtonToTop {
    Initialize() {
        window.addEventListener("scroll", this.ToggleButton)
        document.getElementById('scroll-btn').addEventListener("click", this.ScrollToTop);
    }

    ToggleButton() {
        if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
            document.getElementById('scroll-btn').style.display = 'block';
        } else {
            document.getElementById('scroll-btn').style.display = 'none';
        }
    }

    ScrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

export const onRouteUpdate = () => {
    let button = new ButtonToTop();
    if (document.getElementById('scroll-btn')) {
        button.Initialize();
    }
}