// Kör koden när hela DOM har laddats
document.addEventListener('DOMContentLoaded', () => {
  // Hämta alla element med klassen 'btn'
  const buttons = document.querySelectorAll('.btn');

  // Lägg till en klick-händelse på varje knapp
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Visa ett meddelande när knappen klickas
      alert('Mer information kommer snart!');
    });
  });
});
