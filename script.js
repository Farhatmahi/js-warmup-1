var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
  //   console.log(rect.getBoundingClientRect());
  var rectangleLocation = rect.getBoundingClientRect();
  var insideRectangleValue = details.clientX - rectangleLocation.left;

  if (insideRectangleValue < rectangleLocation.width / 2) {
    // console.log("Left");
    var redColor = gsap.utils.mapRange(
      0,
      rectangleLocation.width / 2,
      255,
      0,
      insideRectangleValue
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redColor}, 0, 0)`,
      ease: Power4,
    });
  } else {
    // console.log("Right");
    var blueColor = gsap.utils.mapRange(
      rectangleLocation.width / 2,
      rectangleLocation.width,
      0,
      255,
      insideRectangleValue
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0, 0, ${blueColor})`,
      ease: Power4,
    });
  }
});

rect.addEventListener("mouseleave", () => {
  gsap.to(rect, {
    backgroundColor: "white",
  });
});
