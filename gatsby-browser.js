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
          document.getElementById('scroll-btn').classList.remove('hidden');
            setTimeout( function () {
                document.getElementById('scroll-btn').classList.add('opacity-100');
            }, 20)
        } else {
          document.getElementById('scroll-btn').classList.add('hidden');
            setTimeout( function () {
                document.getElementById('scroll-btn').classList.add('opacity-0');
            }, 20)
        }
    }

    ScrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        console.log('top button clicked')
    }
}

export const onRouteUpdate = () => {
    let button = new ButtonToTop();
    if (document.getElementById('scroll-btn')) {
        button.Initialize();
    }
}