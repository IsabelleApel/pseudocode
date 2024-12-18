// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
    SET variabel sum till INPUT från användare
    SET variabel people till INPUT från användare
    SET variabel tip till INPUT från användare

    SET variable eachPerson till räkna ut vad varje person ska betala

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

    PRINT "välkommen till spelet. Målet är att göra om ordet startOrd till ordet slutOrd i så få drag som möjligt. 
    För varje nytt ord ska en bokstav ur föregående ord ändras."

    WHILE latestWord inte är samma som slutOrd
        PRINT latestOrd
        SET variabel true till CALL FUNCTION isOneLetterApart(latestOrd, testOrd)
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






