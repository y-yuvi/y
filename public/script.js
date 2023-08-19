const socket = io();

function addSmallY(event) {
  const smallY = document.createElement("div");
  smallY.textContent = "Y";
  smallY.className = "small-letter";
  smallY.style.left = (event.clientX - 10) + "px";
  smallY.style.top = (event.clientY - 10) + "px";
  document.body.appendChild(smallY);

  socket.emit('addLetter', { left: smallY.style.left, top: smallY.style.top });
}

document.addEventListener("click", addSmallY);

socket.on('initialLetters', (initialLetters) => {
  for (const letter of initialLetters) {
    const smallY = document.createElement("div");
    smallY.textContent = "Y";
    smallY.className = "small-letter";
    smallY.style.left = letter.left;
    smallY.style.top = letter.top;
    document.body.appendChild(smallY);
  }
});

socket.on('letterAdded', (data) => {
  const smallY = document.createElement("div");
  smallY.textContent = "Y";
  smallY.className = "small-letter";
  smallY.style.left = data.left;
  smallY.style.top = data.top;
  document.body.appendChild(smallY);
});
