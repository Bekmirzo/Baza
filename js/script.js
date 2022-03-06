const SplitterHeader = document.getElementById('SplitterHeader');
const SplitterFooter = document.getElementById('SplitterFooter');
const LeftNavSplitter = document.getElementById('left-nav-splitter');
const qmul = document.getElementById('qmul');
const qm = document.getElementById('qm');
const style = window.getComputedStyle(qmul);

qm.addEventListener('click',()=>{
    if(style.height == '0px'){
        
        qmul.style.height = `${qmul.scrollHeight}px`;
        qmul.style.transition = 'height 0.25s ease-in';
    } else {
        qmul.style.height = '0px';
    }
})


/*
let sphc = false;
let sphcY1 = 0;

SplitterHeader.addEventListener('mousedown',(event)=>{
    sphc = true;
    sphcY1 = event.clientY;
});

body.addEventListener('mousemove',(event)=>{
    let sphcY2 = event.clientY;
    let sphcDY = sphcY1 - sphcY2;

    if(sphc){
        header.style.height = (header.offsetHeight - sphcDY) + 'px';
        center.style.height = (center.offsetHeight + sphcDY) + 'px';
    }
    sphcY1 = sphcY2;
});

body.addEventListener('mouseup',(event)=>{
    sphc = false;
});
*/


function SplitHeader(element,direction){
    
    let   md; // remember mouse down info
    const first  = document.getElementById("header");
    const second = document.getElementById("center");

    element.onmousedown = onMouseDown;

    function onMouseDown(e)
    {
        //console.log("mouse down: " + e.clientX);
        md = {e,
              offsetLeft:  element.offsetLeft,
              offsetTop:   element.offsetTop,
              firstWidth:  first.offsetWidth,
              firstHeight: first.offsetHeight,
              secondHeight: second.offsetHeight,
              secondWidth: second.offsetWidth
             };

        document.onmousemove = onMouseMove;
        document.onmouseup = () => {
            //console.log("mouse up");
            document.onmousemove = document.onmouseup = null;
        };
    };

    function onMouseMove(e)
    {
        //console.log("mouse move: " + e.clientX);
        let delta = {x: e.clientX - md.e.clientX,
                     y: e.clientY - md.e.clientY};

        if (direction === "V" ) // Vertical
        {
            // Prevent negative-sized elements
            delta.y = Math.min(Math.max(delta.y, -md.firstHeight),
                       md.secondHeight);

            element.style.offsetTop = md.offsetTop + delta.y + "px";
            first.style.height = (md.firstHeight + delta.y) + "px";
            second.style.height = (md.secondHeight - delta.y) + "px";
        };
    };
};
function SplitFooter(element,direction){
    
    let   md; // remember mouse down info
    const first  = document.getElementById("center");
    const second = document.getElementById("footer");

    element.onmousedown = onMouseDown;

    function onMouseDown(e)
    {
        //console.log("mouse down: " + e.clientX);
        md = {e,
              offsetLeft:  element.offsetLeft,
              offsetTop:   element.offsetTop,
              firstWidth:  first.offsetWidth,
              firstHeight: first.offsetHeight,
              secondHeight: second.offsetHeight,
              secondWidth: second.offsetWidth
             };

        document.onmousemove = onMouseMove;
        document.onmouseup = () => {
            //console.log("mouse up");
            document.onmousemove = document.onmouseup = null;
        };
    };

    function onMouseMove(e)
    {
        //console.log("mouse move: " + e.clientX);
        let delta = {x: e.clientX - md.e.clientX,
                     y: e.clientY - md.e.clientY};

        if (direction === "V" ) // Vertical
        {
            // Prevent negative-sized elements
            delta.y = Math.min(Math.max(delta.y, -md.firstHeight),
                       md.secondHeight);

            element.style.offsetTop = md.offsetTop + delta.y + "px";
            first.style.height = (md.firstHeight + delta.y) + "px";
            second.style.height = (md.secondHeight - delta.y) + "px";
        };
    };
};

function SplitLeftNav(element,direction){
     
    let   md; // remember mouse down info
    const first  = document.getElementById("left-nav");
    const second = document.getElementById("center2");

    element.onmousedown = onMouseDown;

    function onMouseDown(e)
    {
        //console.log("mouse down: " + e.clientX);
        md = {e,
              offsetLeft:  element.offsetLeft,
              offsetTop:   element.offsetTop,
              firstWidth:  first.offsetWidth,
              firstHeight: first.offsetHeight,
              secondHeight: second.offsetHeight,
              secondWidth: second.offsetWidth
             };

        document.onmousemove = onMouseMove;
        document.onmouseup = () => {
            //console.log("mouse up");
            document.onmousemove = document.onmouseup = null;
        };
    };

    function onMouseMove(e)
    {
        //console.log("mouse move: " + e.clientX);
        let delta = {x: e.clientX - md.e.clientX,
                     y: e.clientY - md.e.clientY};

        if (direction === "H" ) // Horizontal
        {
            // Prevent negative-sized elements
            delta.x = Math.min(Math.max(delta.x, -md.firstWidth),
                       md.secondWidth);

            element.style.offsetLeft = md.offsetLeft + delta.x + "px";
            first.style.width = (md.firstWidth + delta.x) + "px";
            second.style.width = (md.secondWidth - delta.x) + "px";
        };
    };
};

LeftNavSplitter.onMouseDown = SplitLeftNav(LeftNavSplitter,"H");
SplitterHeader.onMouseDown = SplitHeader(SplitterHeader,"V");
SplitterFooter.onMouseDown = SplitFooter(SplitterFooter,"V");

