var triangleTest = function(sideA, sideB, sideC) {
  if ((sideA <= (sideB + sideC)) && (sideB <= (sideA + sideB)) && (sideC <= (sideA + sideB))) {
    if ((sideA === sideB) && (sideB === sideC)) {
      return "equilateral";
    } else if ((sideA === sideB) || (sideB === sideC) || (sideA === sideC)) {
      return "isosceles";
    } else {
        return true;
      }
  } else {
    return false;
  }
};
