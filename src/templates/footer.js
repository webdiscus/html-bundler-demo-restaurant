import { createPage } from "./template";
import footerDeco from "../images/chefs/icon_astrsk.png";
import logo from "../images/footer/logo-red.png";
import git from "../images/social media/icons8-github-material-filled/icons8-github-144.svg";
import map from "../images/footer/MHW-Astera-Map.jpg"

const footer = createPage(`
<div class="footer-wrapper">
    <div id="guild">
        <img class="guild-deco" src="${footerDeco}">
        <p>Guild Registration</p>
        <img class="guild-deco" src="${footerDeco}">
    </div>
    
    <div class="footer-logo">
        <img class="footer-logo-image" src="${logo}">
        <div class="footer-logo-text">
            <p>THE</p>
            <p>HEAVENLY</p>
            <p>PAW</p>
        </div>
    </div>

    <p class="address">Address: 1102 Upper Astera - SW to Quest Board - New World | Tel: +33 682 1919 | heavenlypaw@mhw.com</p>
    <p class="guild-req">(Only registered Hunters can reserve in advance)</p>

    <div class="map">
        <img src="${map}">
    </div>
    
    <div class="social-medias">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="144px" height="144px" fill-rule="nonzero"><g fill="#6e1110" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.523,0 -10,4.477 -10,10c0,5.013 3.693,9.153 8.505,9.876v-7.226h-2.474v-2.629h2.474v-1.749c0,-2.896 1.411,-4.167 3.818,-4.167c1.153,0 1.762,0.085 2.051,0.124v2.294h-1.642c-1.022,0 -1.379,0.969 -1.379,2.061v1.437h2.995l-0.406,2.629h-2.588v7.247c4.881,-0.661 8.646,-4.835 8.646,-9.897c0,-5.523 -4.477,-10 -10,-10z"></path></g></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="144px" height="144px" fill-rule="nonzero"><g fill="#6e1110" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M8,3c-2.761,0 -5,2.239 -5,5v8c0,2.761 2.239,5 5,5h8c2.761,0 5,-2.239 5,-5v-8c0,-2.761 -2.239,-5 -5,-5zM18,5c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM12,7c2.761,0 5,2.239 5,5c0,2.761 -2.239,5 -5,5c-2.761,0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5zM12,9c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3z"></path></g></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="144px" height="144px" fill-rule="nonzero"><g fill="#6e1110" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M22,3.999c-0.78,0.463 -2.345,1.094 -3.265,1.276c-0.027,0.007 -0.049,0.016 -0.075,0.023c-0.813,-0.802 -1.927,-1.299 -3.16,-1.299c-2.485,0 -4.5,2.015 -4.5,4.5c0,0.131 -0.011,0.372 0,0.5c-3.353,0 -5.905,-1.756 -7.735,-4c-0.199,0.5 -0.286,1.29 -0.286,2.032c0,1.401 1.095,2.777 2.8,3.63c-0.314,0.081 -0.66,0.139 -1.02,0.139c-0.581,0 -1.196,-0.153 -1.759,-0.617c0,0.017 0,0.033 0,0.051c0,1.958 2.078,3.291 3.926,3.662c-0.375,0.221 -1.131,0.243 -1.5,0.243c-0.26,0 -1.18,-0.119 -1.426,-0.165c0.514,1.605 2.368,2.507 4.135,2.539c-1.382,1.084 -2.341,1.486 -5.171,1.486h-0.964c1.788,1.146 4.065,2.001 6.347,2.001c7.43,0 11.653,-5.663 11.653,-11.001c0,-0.086 -0.002,-0.266 -0.005,-0.447c0,-0.018 0.005,-0.035 0.005,-0.053c0,-0.027 -0.008,-0.053 -0.008,-0.08c-0.003,-0.136 -0.006,-0.263 -0.009,-0.329c0.79,-0.57 1.475,-1.281 2.017,-2.091c-0.725,0.322 -1.503,0.538 -2.32,0.636c0.834,-0.5 2.019,-1.692 2.32,-2.636z"></path></g></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="144px" height="144px" fill-rule="nonzero"><g fill="#6e1110" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M5.67969,2l1.47852,5.34375v2.5625h1.28125v-2.5625l1.49805,-5.34375h-1.29102l-0.53711,2.43164c-0.151,0.71 -0.24702,1.21463 -0.29102,1.51563h-0.03906c-0.063,-0.421 -0.15902,-0.92939 -0.29102,-1.52539l-0.51758,-2.42187zM11.43164,4.01758c-0.434,0 -0.78378,0.08481 -1.05078,0.25781c-0.267,0.172 -0.46384,0.44722 -0.58984,0.82422c-0.125,0.377 -0.1875,0.87605 -0.1875,1.49805v0.83984c0,0.615 0.05406,1.10752 0.16406,1.47852c0.11,0.371 0.29564,0.64431 0.55664,0.82031c0.261,0.176 0.62012,0.26367 1.07813,0.26367c0.446,0 0.80055,-0.08677 1.06055,-0.25977c0.26,-0.173 0.44845,-0.44436 0.56445,-0.81836c0.116,-0.374 0.17383,-0.86838 0.17383,-1.48437v-0.83984c0,-0.621 -0.05874,-1.11819 -0.17773,-1.49219c-0.119,-0.373 -0.30841,-0.64822 -0.56641,-0.82422c-0.258,-0.176 -0.59839,-0.26367 -1.02539,-0.26367zM13.87891,4.13086v4.31445c0,0.534 0.08948,0.92673 0.27149,1.17773c0.182,0.251 0.46466,0.37695 0.84766,0.37695c0.552,0 0.96814,-0.26678 1.24414,-0.80078h0.02734l0.11328,0.70703h1.01758v-5.77539h-1.29883v4.58789c-0.05,0.107 -0.12647,0.19467 -0.23047,0.26367c-0.104,0.07 -0.21122,0.10352 -0.32422,0.10352c-0.132,0 -0.2262,-0.05406 -0.2832,-0.16406c-0.057,-0.11 -0.08594,-0.29473 -0.08594,-0.55273v-4.23828zM11.40234,4.91211c0.182,0 0.31081,0.09511 0.38281,0.28711c0.072,0.191 0.10742,0.49516 0.10742,0.91016v1.79883c0,0.427 -0.03542,0.73583 -0.10742,0.92383c-0.072,0.188 -0.19986,0.2822 -0.38086,0.2832c-0.182,0 -0.30795,-0.0952 -0.37695,-0.2832c-0.07,-0.188 -0.10352,-0.49683 -0.10352,-0.92383v-1.79883c0,-0.414 0.03542,-0.71816 0.10742,-0.91016c0.072,-0.191 0.19509,-0.28711 0.37109,-0.28711zM5,11c-1.1,0 -2,0.9 -2,2v7c0,1.1 0.9,2 2,2h14c1.1,0 2,-0.9 2,-2v-7c0,-1.1 -0.9,-2 -2,-2zM12.04883,13h1.05664v2.56836h0.00781c0.095,-0.186 0.23125,-0.33522 0.40625,-0.44922c0.175,-0.114 0.36441,-0.16992 0.56641,-0.16992c0.26,0 0.46333,0.06903 0.61133,0.20703c0.148,0.138 0.25626,0.36097 0.32226,0.66797c0.066,0.308 0.09766,0.73525 0.09766,1.28125v0.77148h0.00195c0,0.727 -0.08867,1.25956 -0.26367,1.60156c-0.175,0.342 -0.44736,0.51367 -0.81836,0.51367c-0.207,0 -0.39445,-0.04758 -0.56445,-0.14258c-0.17,-0.095 -0.29781,-0.22563 -0.38281,-0.39062h-0.02344l-0.11133,0.46094h-0.90625zM5.48633,13.24609h3.25195v0.88476h-1.08984v5.78906h-1.07227v-5.78906h-1.08984zM17.09766,14.95117c0.376,0 0.66519,0.06903 0.86719,0.20703c0.201,0.138 0.34278,0.35353 0.42578,0.64453c0.082,0.292 0.12305,0.69499 0.12305,1.20899v0.83594h-1.83594v0.24805c0,0.313 0.00834,0.54713 0.02734,0.70313c0.019,0.156 0.05723,0.2708 0.11523,0.3418c0.058,0.072 0.14753,0.10742 0.26953,0.10742c0.164,0 0.27689,-0.06441 0.33789,-0.19141c0.061,-0.127 0.09461,-0.33777 0.09961,-0.63477l0.94727,0.05469c0.005,0.042 0.00781,0.10178 0.00781,0.17578c0,0.451 -0.12409,0.78777 -0.37109,1.00977c-0.247,0.223 -0.59392,0.33398 -1.04492,0.33398c-0.541,0 -0.92067,-0.17077 -1.13867,-0.50977c-0.218,-0.339 -0.32617,-0.86322 -0.32617,-1.57422v-0.85156c0,-0.732 0.11289,-1.26652 0.33789,-1.60352c0.225,-0.337 0.6122,-0.50586 1.1582,-0.50586zM8.41016,15.04492h1.09961v3.58008c0,0.217 0.02427,0.37284 0.07227,0.46484c0.048,0.093 0.12628,0.13867 0.23828,0.13867c0.095,0 0.18839,-0.02889 0.27539,-0.08789c0.088,-0.058 0.15036,-0.13266 0.19336,-0.22266v-3.87305h1.09961v4.875h-0.00195h-0.85937l-0.09375,-0.59766h-0.02539c-0.234,0.452 -0.58378,0.67773 -1.05078,0.67773c-0.324,0 -0.56084,-0.10636 -0.71484,-0.31836c-0.154,-0.212 -0.23242,-0.54414 -0.23242,-0.99414zM17.07422,15.69336c-0.117,0 -0.20377,0.03552 -0.25977,0.10352c-0.056,0.069 -0.09333,0.18189 -0.11133,0.33789c-0.019,0.156 -0.02734,0.39294 -0.02734,0.71094v0.34961h0.80273v-0.34961c0,-0.313 -0.01025,-0.54894 -0.03125,-0.71094c-0.02,-0.162 -0.05923,-0.2758 -0.11523,-0.3418c-0.056,-0.066 -0.14081,-0.09961 -0.25781,-0.09961zM13.5918,15.72852c-0.106,0 -0.20297,0.04195 -0.29297,0.12695c-0.09,0.085 -0.15441,0.19417 -0.19141,0.32617v2.76758c0.048,0.085 0.1105,0.14841 0.1875,0.19141c0.077,0.042 0.159,0.06445 0.25,0.06445c0.117,0 0.20834,-0.04195 0.27734,-0.12695c0.069,-0.085 0.11944,-0.22769 0.14844,-0.42969c0.029,-0.201 0.04297,-0.48094 0.04297,-0.83594v-0.62695c0,-0.382 -0.01116,-0.67581 -0.03516,-0.88281c-0.024,-0.207 -0.06695,-0.35636 -0.12695,-0.44336c-0.061,-0.087 -0.14776,-0.13086 -0.25976,-0.13086z"></path></g></g></svg>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="144px" height="144px" fill-rule="nonzero"><g fill="#6e1110" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M14,3c-1.69922,0 -3,1.41406 -3,3v2.03125c-2.11719,0.14453 -4.02344,0.75391 -5.5625,1.6875c-0.55859,-0.4375 -1.21875,-0.6875 -1.875,-0.6875c-0.72656,0 -1.43359,0.27734 -1.9375,0.84375c-0.95703,1.19531 -0.87109,3.14844 0.46875,4.15625c-0.0625,0.31641 -0.09375,0.63672 -0.09375,0.96875c0,2.05469 1.24219,3.84375 3.0625,5.0625c1.82031,1.21875 4.25781,1.9375 6.9375,1.9375c2.67969,0 5.11719,-0.71875 6.9375,-1.9375c1.82031,-1.21875 3.0625,-3.00781 3.0625,-5.0625c0,-0.33203 -0.0625,-0.65234 -0.125,-0.96875c1.36328,-1.08594 1.50391,-3.02734 0.5,-4.15625c-0.50391,-0.56641 -1.21094,-0.84375 -1.9375,-0.84375c-0.65625,0 -1.31641,0.25 -1.875,0.6875c-1.53906,-0.93359 -3.44531,-1.54297 -5.5625,-1.6875v-2.03125c0,-0.61328 0.30078,-1 1,-1c0.32031,0 0.77344,0.17188 1.53125,0.4375c0.67188,0.23438 1.5625,0.47656 2.71875,0.53125c0.33984,0.61719 1,1.03125 1.75,1.03125c1.10156,0 2,-0.89844 2,-2c0,-1.10156 -0.89844,-2 -2,-2c-0.72656,0 -1.36719,0.38281 -1.71875,0.96875c-0.88672,-0.04297 -1.51172,-0.20312 -2.09375,-0.40625c-0.66797,-0.23437 -1.30859,-0.5625 -2.1875,-0.5625zM20,4c0.60156,0 1,0.39844 1,1c0,0.60156 -0.39844,1 -1,1c-0.60156,0 -1,-0.39844 -1,-1c0,-0.60156 0.39844,-1 1,-1zM12,10c2.32031,0 4.38281,0.63672 5.8125,1.59375c1.42969,0.95703 2.1875,2.16016 2.1875,3.40625c0,1.24609 -0.75781,2.44922 -2.1875,3.40625c-1.42969,0.95703 -3.49219,1.59375 -5.8125,1.59375c-2.32031,0 -4.38281,-0.63672 -5.8125,-1.59375c-1.42969,-0.95703 -2.1875,-2.16016 -2.1875,-3.40625c0,-1.24609 0.75781,-2.44922 2.1875,-3.40625c1.42969,-0.95703 3.49219,-1.59375 5.8125,-1.59375zM3.59375,10.03125c0.33203,0 0.68359,0.07031 1,0.25c-0.96484,0.74219 -1.71484,1.65625 -2.15625,2.6875c-0.58203,-0.6875 -0.57031,-1.77734 -0.0625,-2.4375c0.29688,-0.33594 0.74609,-0.5 1.21875,-0.5zM20.40625,10.03125c0.47266,0 0.92188,0.16406 1.21875,0.5c0.49219,0.55469 0.53125,1.64453 -0.0625,2.40625c-0.44141,-1.02344 -1.19922,-1.91797 -2.15625,-2.65625c0.31641,-0.17969 0.66797,-0.25 1,-0.25zM9,12c-0.82812,0 -1.5,0.67188 -1.5,1.5c0,0.82813 0.67188,1.5 1.5,1.5c0.82813,0 1.5,-0.67187 1.5,-1.5c0,-0.82812 -0.67187,-1.5 -1.5,-1.5zM15,12c-0.82812,0 -1.5,0.67188 -1.5,1.5c0,0.82813 0.67188,1.5 1.5,1.5c0.82813,0 1.5,-0.67187 1.5,-1.5c0,-0.82812 -0.67187,-1.5 -1.5,-1.5zM16.09375,16.40625c-0.89844,0.80078 -2.39453,1.28125 -4.09375,1.28125c-1.69922,0 -3.19531,-0.48828 -4.09375,-1.1875c0.5,1.30078 2.09375,2.5 4.09375,2.5c2,0 3.59375,-1.19531 4.09375,-2.59375z"></path></g></g></svg>
    </div>

    
    <div class="award">
        <a href="https://github.com/HoangV954/" class="git">
        <p>Made by </p>
        <img src="${git}"> 
        <p> Hoang Vu</p>
        </a>
    </div>
</div>
`)

export default footer;