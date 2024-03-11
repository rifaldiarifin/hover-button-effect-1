function ciBtnHover1() {
    const buttons = document.querySelectorAll(".ci-btnhover-1");

    const mouseMoveHandler = (event, spanPoint) => {
        // console.log(event, spanPoint);
        const points = {
            x: event.offsetX,
            y: event.offsetY
        }

        spanPoint.setAttribute("style", `--x-point: ${points.x}px; --y-point: ${points.y}px;`)
    }

    buttons.forEach((btn) => {
        const spanPoint = btn.querySelector(".ci-btnhover-point");
        btn.addEventListener("mousemove", (event) => mouseMoveHandler(event, spanPoint));
    });
}

ciBtnHover1();