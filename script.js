const btn = document.querySelector(".btn");
const page = document.querySelector("section");

btn.addEventListener("click", event => {
    console.log("button pressed.");
    btn.remove();
    page.innerHTML = `
        <div class="loader">
            <div class="dot" style="--i:1"></div>
            <div class="dot" style="--i:2"></div>
            <div class="dot" style="--i:3"></div>
            <div class="dot" style="--i:4"></div>
            <div class="dot" style="--i:5"></div>
            <div class="dot" style="--i:6"></div>
            <div class="dot" style="--i:7"></div>
            <div class="dot" style="--i:8"></div>
            <div class="dot" style="--i:9"></div>
            <div class="dot" style="--i:10"></div>
        </div>`;
});