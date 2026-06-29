## Videlio worshopskalender
voor mijn indeviduele aanvulling van de meesterpreof hab ik een onepage prototype gemaakt voor een toegankelijke workshopkalender van videlio.
### Functionaliteiten
-Kalenderoverzicht voor juli 2026.
-Workshopdagen zijn duidelijk gemarkeerd.
-Klik op een datum toont de juiste workshopdetails.
-De gekozen datum krijgt een actieve staat.
-Elke workshopkaart bevat extra informatie zoals tijd, locatie, doelgroep en -toegankelijkheid.
-Er is een duidelijke call-to-action: “Doe mee”.
### Toegankelijkheid
Ik heb rekening gehouden met toegankelijkheid door echte buttons te gebruiken voor interactieve dagen. De buttons hebben een "aria-label", zodat screenreaders duidelijk kunnen voorlezen welke workshop bij een datum hoort.

Met "aria-pressed" wordt aangegeven welke datum actief is. Met "aria-live" krijgt de gebruiker feedback wanneer de getoonde workshopdetails veranderen. Ook heb ik gebruikgemaakt van het "time"" element met "datetime", zodat datums semantisch

### Bronen:
-https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/time#:~:text=The%20HTML%20element%20represents,on%20a%2024%2Dhour%20clock. 
-https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live
-https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed