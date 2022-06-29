function getGrades() {
    var args = Array.prototype.slice.call(arguments, 1, 3);
    return args;
}

// Wypisz to!
console.log(getGrades(90, 100, 75, 40, 89, 95));

// POWINNO SIĘ WYŚWIETLIĆ: //
// [100, 75] <- dlaczego? Bo zaczeliśmy od indeksu 1 a skońćzyliśmy na 3
// so, index 3 (40) wasn't taken into consideration.
//

console.log(getNames("Adam", "Basia", "Czarek", "Dorota", "Edek"));
