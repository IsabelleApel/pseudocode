
// stegen
/*
    SET variabel goal till 1
    SET variabel antalKast till 0
    SET variabel tärning

    WHILE (goal < 7)
        tärning = slumpat tal mellan 1 och 6
        öka antalKast med 1
        IF (tärning === goal)
            öka goal med 1
        END IF
    END WHILE

    PRINT Grattis, du vann med antalKast kast!
*/

// KNOCK OUT
/*
    SET variabel knockOut till INPUT från användare
    SET variabel endPoint till INPUT från användare
    SET variabel kastEtt
    SET variabel kastTvå
    SET variabel points till 0

    WHILE points är mindre än endPoint
        kastEtt = slumpat tal mellan 1 och 6
        kastTvå = slumoat tal mellan 1 och 6
        points = points + kastEtt + kastTvå
        PRINT du kastade en kastEtt och en kastTvå
        IF kastEtt är samma som knockOut
            points = points minus kastEtt
        END IF
        IF kastTvå är samma som knockOut
            points = points minus kastTvå
        END IF
    END WHILE

    PRINT Grattis, du fick points poäng och har vunnit spelet!
*/

// GOINT TO BOSTON
/*
    SET variabel summa till 0
    SET variabel kastX, slumpa tal mellan 1 och 6
    SET variabel kastY, slumpa tal mellan 1 och 6
    SET variabel kastZ, slumpa tal mellan 1 och 6

    IF kastX > kastY && kastX > kastZ
        summa = kastX
        kastY = slumpat tal mellan 1 och 6
        kastZ = slumpat tal mellan 1 och 6
        IF kastY > kastZ
            summa = summa + kastY
            kastZ = slumpat tal mellan 1 och 6
            summa = summa + kastZ
        ELSE
            summa = summa + kastZ
            kastY = slumpat tal mellan 1 och 6
            summa = summa + kastY
        END IF
    END IF

    IF kastY > kastX && kastY > kastZ
        summa = kastY
        kastX = slumpat tal mellan 1 och 6
        kastZ = slumpat tal mellan 1 och 6
        IF kastX > kastZ
            summa = summa + kastX
            kastZ = slumpat tal mellan 1 och 6
            summa = summa + kastZ
        ELSE
            summa = summa + kastZ
            kastX = slumpat tal mellan 1 och 6
            summa = summa + kastX
        END IF
    END IF

    IF kastZ > kastX && kastZ > kastY
        summa = kastZ
        kastX = slumpat tal mellan 1 och 6
        kastY = slumpat tal mellan 1 och 6
        IF kastX > kastY
            summa = summa + kastX
            kastY = slumpat tal mellan 1 och 6
            summa = summa + kastY
        ELSE
            summa = summa + kastY
            kastX = slumpat tal mellan 1 och 6
            summa = summa + kastX
        END IF
    END IF
*/

// STEN, SAX ELLER PÅSE
/*
    SET player till FUNCTION playerChoice
    SET computer till FUNCTION computerChoice
    SET playerWin to 0
    SET computerWin to 0

    WHILE playerWin < 4 or computerWin < 4
        IF player === computer
            PRINT It's a tie!
        ELSE IF player choice is "sten" and computer choice is "sax", 
        or player choice is "sax" and computer choice is "påse", 
        or player choice is "påse" and computer choice is "sax"
            add 1 to playerWin   
            PRINT Du vann
        ELSE
            add 1 to computerWin
            PRINT Datorn vann
        END IF
    END WHILE

    IF playerWin === 3
        PRINT Du vann!
    ELSE IF computer === 3
        PRINT Datorn vann!
    END IF

    FUNCTION computerChoise
        create random number between 1 and 3
        IF random number is 1, RETURN sten
        IF random number is 2, RETURN sax
        IF random number is 3, RETURN påse

    FUNCTION playerChoice
        PROMPT user for choice (sten, sax eller påse)
        RETURN users choice

*/

// FIZZBUZZ
/*
    FOR varje nummer mellan 1 och 100, räkna med index 'i'
        IF i är delbart med 3 och inte med 5
            PRINT Fizz
        ELSE IF i är delbart med 5 men inte med 3
            PRINT Buzz
        ELSE IF i är delbart med 3 och 5
            PRINT FizzBuzz
        ELSE
            PRINT i
        END IF  
    END FOR
*/

// HÖGT ELLER LÅGT
/*
    SET secretNum to random between 1 and 100

    WHILE playerGuess is not euqal to secretNum
        SET playerGuess to INPUT from user
        IF playerGuess < secretNum
            PRINT playerGuess är för lågt, gissa högre
        ELSE
            PRINT playerGuess är för högt, gissa lägre
        END IF
    END WHILE

    PRINT Grattis du vann, playerGuess var rätt tal!

*/

// SÖK EFTER LIKHETER MELLAN ORD
/*
    SET firstWord till INPUT från användare
    SET secondWord till INPUT från användare
    SET matchCount till 0

    IF firstWord inte är lika långt som secondWord
        PRINT orden måste vara lika långa
    END IF

    FOR varje bokstav i firstWord, räkna med index 'i'
        IF firstWord plats i är lika med secondWord plats i
            Öka matchCount med 1
        END IF
    END FOR

    PRINT det fanns matchCount likheter mellan orden
*/