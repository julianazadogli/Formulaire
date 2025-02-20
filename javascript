document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    this.getElementsByClassName() 

    const nom = document.getElementById('nom').value;
    const prenoms = document.getElementById('prenoms').value;
    const dateNaissance = document.getElementById('date-naissance').value;
    const telephone = document.getElementById('telephone').value;
    const motivation = document.getElementById('motivation').value;

    const age = new Date().getFullYear() -
     new Date(dateNaissance).getFullYear();

    if (age < 18) {
        alert("Vous devez avoir au moins 18 ans pour vous inscrire.");
        return;
    }

    if (motivation.length < 1000 || motivation.length > 2500) {
        alert("La motivation doit contenir entre 1000 et 2500 caractères.");
        return;
    }

    if (!/01\d{8}/.test(telephone)) {
        alert("Le numéro de téléphone doit commencer par 01 et contenir 10 chiffres.");
        return;
    }

  
}
