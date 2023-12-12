let Btns = document.querySelectorAll(".btn");
Btns.forEach((event) => {
  event.addEventListener("click", () => {
    Btns.forEach((event1) => {
      if (event == event1) {
        event1.classList.add("active-btn");
      } else {
        event1.classList.remove("active-btn");
      }
    });
  });
});
