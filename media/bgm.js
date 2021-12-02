bgmBook = (k, v) => {
  book = JSON.parse(localStorage["bgmBook"]) || ({})
  if !k then book
  else if !v then book[k]
  else {
    book[k] = v
    localStorage["bgmBook"] = JSON.stringify(book)
  }
}

event join (name, cont, url, tc) => {
  book = bgmBook()
  link = book["#" + tc] || book[name]
  if link then playMusic(name + "'s bgm!", link)
}

event music (name, cont: "bgm", url, tc) => {
  if tc then bgmBook("#" + tc, url)
  else bgmBook(name, url)
}

event msg (name, cont: "/mybgm", url, tc) => {
  if url then {
    if tc then bgmBook("#" + tc, url)
    else bgmBook(name, url)
    drrr.print("/meok!")
  }
  else {
    book = bgmBook()
    link = book["#" + tc] || book[name]
    if link then drrr.print("BGM!!", link)
    else drrr.print("You don't have BGM QwQ")
  }
}

event msg (name, cont: "/nobgm", url, tc) => {
  book = bgmBook()
  delete book["#" + tc]
  delete book[name]
  localStorage["bgmBook"] = JSON.stringify(book)
  drrr.print("no!")
}
