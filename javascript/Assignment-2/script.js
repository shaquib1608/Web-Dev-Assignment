function findGrades(M) {
  switch (true) {
    case M >= 0 && M <= 10:
      return "E";
    case M >= 11 && M <= 20:
      return "D";
    case M >= 21 && M <= 30:
      return "C";
    case M >= 31 && M <= 40:
      return "B";
    case M >= 41 && M <= 50:
      return "A";
    default:
      return "Invalid";
  }
}

function getValue(C) {
  switch (C.toLowerCase()) {
    case "p":
      return "PrepBytes";
    case "z":
      return "Zenith";
    case "e":
      return "Expert Coder";
    case "d":
      return "Data Structure";
    default:
      return "Invalid";
  }
}

function Max_out_of_three(A, B, C) {
  return A === B && B === C ? -1 : Math.max(A, B, C);
}

function findSndSmallest(X, Y, Z) {
  // let arr = [X, Y, Z].sort((a, b) => a - b);
  let n1 = Math.min(X, Y, Z);
  return n1;
}

function Triangle_Check(A, B, C) {
  let maxAngle = Math.max(A, B, C);
  return maxAngle < 90 ? "acute" : "obtuse";
}

document.write("Q1: " + findGrades(1) + "<br>");
document.write("Q2: " + getValue("E") + "<br>");
document.write("Q3: " + Max_out_of_three(2, 5, 4) + "<br>");
document.write("Q4: " + findSndSmallest(10, 3, 23) + "<br>");
document.write("Q5: " + Triangle_Check(60, 100, 20) + "<br>");
