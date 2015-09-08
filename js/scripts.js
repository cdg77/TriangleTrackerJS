var triangleTest = function(sideA, sideB, sideC) {
  if ((sideA <= (sideB + sideC)) && (sideB <= (sideA + sideB)) && (sideC <= (sideA + sideB))) {
    return true;
  } else {
    return false;
  }
};
