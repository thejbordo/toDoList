function marcarDone(ele: string) {
  console.log(ele);
  const butt = document.querySelector(".buttDone");
  const formData = new FormData();
  const payload = butt?.parentNode;
  fetch("/");
}
function borrarTask(elem: string) {
  console.log(elem);

  const butt = document.querySelector(`#${elem}-id`);
  const formData = new FormData();
  // const payload = butt.parentNode;
  fetch("/borrarTask", {
    method: "POST",
    body: formData,
  });
}
