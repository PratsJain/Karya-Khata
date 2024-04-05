import User from './backend.js';
import './style.css';
import man from './assets/man.png';
import fav from './assets/fav.png';
import frontend from './frontend.js';

const app = (function ScreenController() {
    const front = frontend();
    front.fav_icon(fav);
    const user = User();

})();

