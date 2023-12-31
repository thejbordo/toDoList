function marcarDone(elem: string) {
  const id = `${elem}-id`;

  const divButton = document.getElementById(id);
  divButton.textContent = "Hecha";
  fetch("/markTask", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ id: elem }),
  });
}
function borrarTask(elem: string) {
  const id = `${elem}-id`;

  const divButton = document.getElementById(id);
  const divchild = divButton.parentNode.parentNode;
  divchild.parentNode.removeChild(divchild);

  fetch("/borrarTask", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ id: elem }),
  });
}
marcarDone(null);
borrarTask(null);
