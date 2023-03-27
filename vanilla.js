//globals

export function mouseCursor() {

    // mouse effect
    let cursor = document.querySelector('.cur');
    let objCursor = document.querySelector('.objCursor')
    let inn_cur = document.querySelector('.cur_cur');
    let a = document.querySelectorAll('a');
    let eventList = document.addEventListener

    // mouse outer border - when the mouse moves
    eventList('mousemove', function (e) {
        let x = e.clientX;
        let y = e.clientY;
        // console.log(`${x}`)
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    });

    // mouse over object
    eventList('mousemove', function (e) {
        let x = e.clientX;
        let y = e.clientY;
        // console.log(`${x}`)
        objCursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    });
    eventList('mousemove', function (e) {
        let x = e.clientX;
        let y = e.clientY;
        inn_cur.style.left = x + 'px';
        inn_cur.style.top = y + 'px';
    });

//When you keydown the mouse - gradually increase the width & height
    eventList('mousedown', function () {
        cursor.classList.add('click');
        objCursor.classList.add('click');
        inn_cur.classList.add('cursor_down')
    });

// When you release the keypress - gradually decrease the width & height
    eventList('mouseup', function () {
        cursor.classList.remove('click')
        objCursor.classList.remove('click')
        inn_cur.classList.remove('cursor_down')
    });

    a.forEach(item => {
        item.addEventListener('mouseover', () => {
            cursor.classList.add('hover');
            // objCursor.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            // objCursor.classList.remove('hover');
        });
    })
    document.querySelector('#nxt').addEventListener('mouseover', () => {
        // console.log(`${e}`)
        objCursor.classList.add('z_inx');
    })
    document.querySelector('#nxt').addEventListener('mouseleave', () => {
        // console.log(`${e}`)
        objCursor.classList.remove('z_inx');
    })
}

export function imageOnHover() {
    // Reveal image on hover
    const items = document.querySelectorAll(".item");
    const image = document.querySelector("img");

    items.forEach((el) => {
        el.addEventListener("mouseover", (e) => {
            document.querySelector('img').classList.remove('hidden')
            const imageData = e.target.getAttribute("data-image");
            // console.log(imageData);
            e.target.style.zIndex = 99;
            image.setAttribute("src", imageData);
        });
        el.addEventListener("mousemove", (e) => {
            image.style.top = e.clientY + "px";
            image.style.left = e.clientX + "px";
        });
        el.addEventListener("mouseleave", (e) => {
            document.querySelector('img').classList.add('hidden')
            e.target.style.zIndex = 1;
            image.setAttribute("src", "");
        });
    });
// Smooth scrolling for the whole body or page
    const body = document.body,
        jsScroll = document.getElementsByClassName('js-scroll')[0],
        height = jsScroll.getBoundingClientRect().height - 1,
        speed = 0.05
    let offset = 0
    body.style.height = Math.floor(height) + "px"
}

export function smoothScroll() {
    // Smooth scrolling for the whole body or page
    const body = document.body,
        jsScroll = document.getElementsByClassName('js-scroll')[0],
        height = jsScroll.getBoundingClientRect().height - 1,
        speed = 0.05
    let offset = 0
    body.style.height = Math.floor(height) + "px"

    function Scroll() {
        offset += (window.pageYOffset - offset) * speed
        let scroll = "translateY(-" + offset + "px) translateZ(0)"
        jsScroll.style.transform = scroll
        let raf = requestAnimationFrame(Scroll)
    }

    Scroll()
}


