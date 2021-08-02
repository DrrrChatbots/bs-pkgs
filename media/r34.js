ran = (min,max) => {
  Math.floor(Math.random()*(max-min+1))+min
}

//random picture "/r34"
event [me, msg, dm] (u,m:"^/r34$") => {
  numb = 4900000
  url = "https://r34-json.herokuapp.com/posts?limit=1&id=" + Math.floor(Math.random() * numb)
  $.get(url, d => {drrr.dm(u,".",d.posts[0].file_url)})
}

//picture with tag "/r34 samsung"
event [me, msg, dm] (u,m:"^/r34\\s\\w*.*$") => {
  mes = m.substring(5)
  url = "https://r34-json.herokuapp.com/tags?&name=" + mes
  num = []
  $.get(url, d => num = d[0].posts)
  later 1000 {
    if num >= 200001
    then {
      num = 200000
      urlA = "https://r34-json.herokuapp.com/posts?limit=1&pid=" + ran(1,num) + "&tags=" + mes
      $.get(urlA, d => drrr.dm(u, "Posts with tag \"" + mes + "\" - " + num + "+", d.posts[0].file_url))
    }
    else if num > 0
      then {
        urlA = "https://r34-json.herokuapp.com/posts?limit=1&pid=" + ran(1,num) + "&tags=" + mes
        $.get(urlA, d => drrr.dm(u, "Posts with tag \"" + mes + "\" - " + num, d.posts[0].file_url))
      }
      else drrr.dm(u, "Posts with tag \"" + mes + "\" - not found")
  }
}
