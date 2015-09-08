var triangleTest = function(sideA, sideB, sideC) {
  if ((sideA <= (sideB + sideC)) && (sideB <= (sideA + sideB)) && (sideC <= (sideA + sideB))) {
    if ((sideA === sideB) && (sideB === sideC)) {
      return "equilateral";
    } else if ((sideA === sideB) || (sideB === sideC) || (sideA === sideC)) {
      return "isosceles";
    } else if ((sideA !== sideB) && (sideB !== sideC) && (sideA !== sideC)) {
      return "scalene";
      }
  } else {
    return false;
    }
};

$(document).ready(function() {
  $("form#triangle-test").submit(function(event) {
    var sideA = parseInt($('input#sideA').val());
    var sideB = parseInt($('input#sideB').val());
    var sideC = parseInt($('input#sideC').val());
    var output = triangleTest(sideA, sideB, sideC);

    $(".sideA").text(sideA);
    $(".sideB").text(sideB);
    $(".sideC").text(sideC);
    $(".not").text("");

    if (!output) {
      $(".not").text("not at all a");
    } else {
      $('.output').text(output);
    }

    $("#result").show();
    event.preventDefault();
  });
});
