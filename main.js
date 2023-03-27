import './style.css';

import {imageOnHover} from './vanilla.js'

import {mouseCursor} from './vanilla.js'

import {smoothScroll} from './vanilla.js'

import * as THREE from 'three';

let threeDim = () => {

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);

    scene.add(camera);

    camera.position.z = 3;

    camera.position.x = 5;

    // const geometry = new THREE.BoxGeometry(1, 1)

    const geometry = new THREE.CircleGeometry(.7, 256);

    const material = new THREE.MeshBasicMaterial({
        color: '#2C2727',
    })

    const mesh = new THREE.Mesh(geometry, material)

    // mesh.rotation.y = 1;

    scene.add(mesh);

    const renderer = new THREE.WebGL1Renderer({
        alpha: true,
        antialias: true
    })

    renderer.setSize(window.innerWidth - 27.3, window.innerHeight, true)

    const container = document.querySelector('.three');

    container.appendChild(renderer.domElement);
    // document.body.append(renderer.domElement);
    renderer.render(scene, camera);

    const cursor = {
        x: 0,
        y: 0
    }

    window.addEventListener('mousemove', (e) => {
        cursor.x = (e.clientX / window.innerWidth) - .3;
        cursor.y = (e.clientY / window.innerWidth) - .2;

    })

    window.addEventListener("resize", () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = (window.innerWidth / window.innerHeight);
        camera.updateProjectionMatrix();
    });

    const tick = () => {
        window.requestAnimationFrame(tick)
        // mesh.rotation.y += 0.005;
        const camX = cursor.x + -.25;
        const camY = -cursor.y;
        camera.position.x += (camX - camera.position.x) / 10
        camera.position.y += (camY - camera.position.y) / 50
        renderer.render(scene, camera)

        let objCheck = false;
        // This function checks if the browser is a mobile client, & if true changes check variable declared by let is assigned boolean true
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                objCheck = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        // If check  === true classList add the following class
        if (objCheck) {
            window.addEventListener('mousemove', (e) => {
                cursor.x = (e.clientX / window.innerWidth) - .3;
                cursor.y = (e.clientY / window.innerWidth) - (e.clientY / window.innerWidth);
            })
        }
    }

    tick()
}

let startLoader = () => {
    const loader = document.querySelector(".loader");
    setTimeout(function () {
        loader.style.right = "0";
    }, 1000);

    window.addEventListener("DOMContentLoaded", function (event) {
        setTimeout(function () {
            threeDim();
            loader.style.left = "100%";
            document.querySelector('body').classList.remove("loading");
        }, 2500);
    });
}

let checkMobile = () => {

    window.mobileCheck = function () {
        // check is false when declared
        let check = false;
        // This function checks if the browser is a mobile client, & if true changes check variable declared by let to boolean true
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        // If check  === true classList add the following class
        if (check) {
            document.querySelector('.cur').classList.add('hidden')
            document.querySelector('.cur_cur').classList.add('hidden')
            document.querySelector('.objCursor').classList.add('hidden')
        } else {
            document.querySelector('.cur').classList.remove('hidden')
            document.querySelector('.cur_cur').classList.remove('hidden')
            document.querySelector('.objCursor').classList.remove('hidden')
        }

    };

    mobileCheck()
}

//Pages routing

const routeREST = () => {
    const pathName = [`/index.html`, `/works/works.html`];
    const getHomePage = () => {
        const elementName = [`#body`, `work`]
        let get = () => {
            let pageContent = `       
            <section class="js-scroll">
                <section class="section_start column-section section-bio">
                    <figure class="logo"></figure>
                    <p class="bio"> I'm a Creative developer. </p>
                </section>
                <section class="section_info column-section-main ">
                    <div class="col-section">
                        <h2 class="main-text">Info</h2>
                        <p class="p_text">Hello i'm Samm, a <a><b>Creative developer</b></a> based in <a><b>Kenya</b></a>, <a><b>Nairobi</b></a>. I leverage both </p>
                        <p class="p_text"> <a><b>JavaScript, Node.JS & React.JS</b></a> to build interactive web-apps, For everyday use, by clients off all sorts.</p>
                        <p class="p_text">I'm <a><b>capable of</b></a> crafting <a><b>full-stack</b></a> web-projects, However i <a><b>specialize </b></a> in <a><b>front-end</a></b> development.</p>
                        <p class="p_text"><a href="tel:+254 768 989 025" class="footer-links"><b>Call me</b></a> or <a href="mailto:muiruri.samwel@outlook.com" class="footer-links"><b>Mail me</b></a> </p>
                    </div>
                </section>
                <section class="section_end column-section-main ">
                   <div class="next_page main-text_link" id="nxt">
                    <a href="works/works.html">Click To View Works</a>
                    </div>
                </section>
                <footer class="footer main-text main-text-small">
            <!--    Don't mind the white space-->
                        <p class="footer-links" style="text-decoration: none !important;">ne faites pas attention à </p>
                        <p class="footer-links">l'espace blanc</p>
                        <p class="footer-links"> &copy; 2023</p>
                    <div class="scrunch" aria-hidden="true"></div>
                 </footer>
            </section>
            <!--scroll down notification-->
                <div class="box">
                     <span class="mouse">
                        <span class="move">
                        </span>
                        <span class="move_2">
                        </span>
                     </span>
                </div>
            <!--Cursor-->
                <div class="cur"></div>
                <div class="objCursor"></div>
                <div class="cur_cur"></div>
                <!--three JS object-->
            <div class="three" aria-hidden="true"></div>
         `
            return document.querySelector(`${elementName[0]}`).innerHTML = `${pageContent}`
        }
        get();
    }
    const getWorksPage = () => {
        const elementName = [`body`, `#work`]
        let get = () => {

            let pageContent = `       
            <section class="js-scroll">
              <section class="section_start column-section section-bio">
                    <figure class="logo"></figure>
                    <p class="bio"> My works section</p>
              </section>
              
              <section class="section_info column-section-main ">
                    <div class="col-section">
                        <h2 class="main-text">Works</h2>
                        <p class="p_text"> <a><b>R⩘zor </b></a> Is a single product <a><b>online</b></a> shop crafted with <a><b>Express.JS & webGL JS libraries</b></a>.</p>
                        <p class="p_text">It features a unique design & basic <a><b>CMS</b></a> to handle <a><b>CRUD</b></a> operations </p> 
<!--                        <p class="p_text"><a><b>Nost⩘lgic:</b></a> Follows similar roots to <a><b>R⩘zor</b></a>, however utilises <a><b>laravel, the PHP framework</b></a>.</p>-->
<!--                        <p class="p_text">The project also features a basic <a><b>CMS</b></a> to manage <a><b>CRUD</b> operations</a> </p>-->
                        <p class="p_text">Other projects can be found on <a href=""><b>Github</b></a> </p> 
                        <p class="p_text"><a href="tel:+254 768 989 025" class="footer-links"><b>Call me</b></a> or <a href="mailto:muiruri.samwel@outlook.com" class="footer-links"><b>Mail me</b></a> </p>

                    </div>
                </section>
              <section class="section_works column-section-main ">
                    <div class="works">
                 <img src="" alt>
                <ul>
                <a>
                  <li class="item" data-image="/bze.jpg">
                   R⩘zor Concept
                    </li>
                </a>
                  <a>
                    <li class="item top"
                        data-image="/mok.jpg">
                        Other Projects
                    </li>
                </ul>
            </div>
              </section>
                <footer class="footer main-text main-text-small">
            <!--    Don't mind the white space-->
<!--                        <a href="mailto:muiruri.samwel@outlook.com" class="footer-links">Mailme@mymail.com</a>-->
                        <p class="footer-links" style="text-decoration: none !important;">ne faites pas attention à </p>
                        <p class="footer-links">l'espace blanc</p>
                        <p class="footer-links"> &copy; 2023</p>
                    <div class="scrunch" aria-hidden="true"></div>
                 </footer>
            </section>
                <!--scroll down notification-->
                <div class="box">
                     <span class="mouse">
                        <span class="move">
                        </span>
                        <span class="move_2">
                        </span>
                     </span>
                </div>
            <!--Cursor-->
                <div class="just_for_the_purpose hidden" id="nxt"></div>
                <div class="cur"></div>
                <div class="objCursor"></div>
                <div class="cur_cur"></div>
            <!--three JS object-->
                <div class="three" aria-hidden="true"></div>`
            return document.querySelector(`${elementName[1]}`).innerHTML = `${pageContent}`
        }
        get()
    }
    if (window.location.pathname === pathName[0]) {
        getHomePage()
    } else {
        getWorksPage()
    }
}

routeREST()

// all Global runtime functions

checkMobile()

startLoader()

smoothScroll()

mouseCursor()

imageOnHover()
















