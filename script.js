// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
    SET variabel sum till INPUT från användare
    SET variabel people till INPUT från användare
    SET variabel tip till INPUT från användare

    SET variable eachPerson till (sum*tip)/people

    PRINT eachPerson
*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

play();

FUNCTION play()
    SET variabel ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "FOUR";
    SET variabel slutOrd till "FIVE";
    SET variabel testOrd till "FOUR";
    SET variabel latestOrd till INPUT från användare

    WHILE latestWord inte är samma som slutOrd
        PRINT latestOrd
        SET variabel true till CALL FUNCTION isOneLetterApart(latestWord, testWord)
        IF true är lika med 1
            flytta värdet i latestOrd till testOrd
            latestOrd = INPUT från användare
        ELSE
            PRINT "Ditt ord ska skilja på en bokstav från testOrd"
        END IF
END FUNCTION

FUNCTION isOneLetterApart(latestOrd, testOrd)
    SET variabel diffCount till 0;

    FOR varje bokstav i latestWord, räkna med index i
        IF latestOrd plats i är lika med testOrd i
            öka diffCount med 1
        END IF
    END FOR

    RETURN diffCount
END FUNCTION

*/

function play() {
    const ordbok = ["FOUR", "FOUL", "FOOL", "FOOT", "FORT", "FORE", "FIRE", "FIVE"];
    const startOrd = "FOUR";
    const slutOrd = "FIVE";
    let testOrd = startOrd;
    let latestOrd = prompt("Ange ett ord (börja med 'FOUR'): ");

    while (latestOrd !== slutOrd) {
        console.log(`Ditt senaste ord: ${latestOrd}`);

        if (isOneLetterApart(latestOrd, testOrd)) {
            testOrd = latestOrd;
            latestOrd = prompt("Ange ett nytt ord: ");
        } else {
            console.log(`Ditt ord ska skilja på en bokstav från ${testOrd}`);
            latestOrd = prompt("Försök igen: ");
        }
    }

    console.log(`Grattis! Du nådde slutordet: ${slutOrd}`);
}

function isOneLetterApart(latestOrd, testOrd) {
    if (latestOrd.length !== testOrd.length) return false;

    let diffCount = 0;
    for (let i = 0; i < latestOrd.length; i++) {
        if (latestOrd[i] !== testOrd[i]) {
            diffCount++;
        }
        if (diffCount > 1) return false;
    }

    return diffCount === 1;
}

// Startar spelet
play();






