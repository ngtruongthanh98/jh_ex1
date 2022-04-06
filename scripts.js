let elements = document.querySelectorAll("a");

elements.forEach((ele) => {
    ele.addEventListener("click", function () {
        elements.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
    });
});
