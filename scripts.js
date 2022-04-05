let elements = document.querySelectorAll("a");

elements.forEach((ele) => {
    ele.addEventListener("click", function () {
        elements.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
    });
});

const collection = document.getElementsByClassName("content-paragraph-box");

console.log("collection: ", collection);

collection.style.setProperty(
    "--clientHeigght",
    collection[0].clientHeight + "px"
);
