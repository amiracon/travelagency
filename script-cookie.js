document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const acceptButton = document.getElementById("accept-cookie");

    popup.style.display = "block";

    acceptButton.addEventListener("click", function() {
        popup.style.display = "none";
        // Speichern Sie hier die Zustimmung des Benutzers in einem Cookie oder anderen Speichermechanismus
    });

    // Überprüfen, ob das Pop-up bereits angezeigt wurde und entsprechend handeln
    // Hier können Sie prüfen, ob der Benutzer bereits zugestimmt hat (z. B. über gespeicherte Cookies).
    // Wenn nicht, können Sie das Pop-up bei Bedarf anzeigen, wie im obigen Code.
});