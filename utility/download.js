download = (fn, data) => {
  doc = document
  elt = doc.createElement("a");
  elt.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(data));
  elt.setAttribute("download", fn);
  elt.style.display = "none";
  doc.body.appendChild(elt);
  elt.click();
  doc.body.removeChild(elt);
}
// download("output.txt", JSON.stringify({user: "data"}))
