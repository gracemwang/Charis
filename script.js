function show(id) {
  document.getElementById(id).style.visibility = 'visible';
}

function hideAll() {
  document.getElementById('sd').style.visibility = 'hidden';
  document.getElementById('tr').style.visibility = 'hidden';
  document.getElementById('ny').style.visibility = 'hidden';
  document.getElementById('tk').style.visibility = 'hidden';
  document.getElementById('d').style.visibility = 'hidden';
}

function city(){
  const city = document.getElementById('bar').value.toLowerCase();
  hideAll();
  if (city === "san diego") {
    show('sd');
  }
  else if (city === "toronto") {
    show('tr');
  }
  else if (city === "new york city") {
    show('ny');
  }
  else if (city === "tokyo") {
    show('tk');
  }
  else if (city === "new delhi") {
    show('d');
  }
  else {
    alert("We don't have volunteer opportunities for the city \"" + city + "\" yet, try another city!");
  }
}

