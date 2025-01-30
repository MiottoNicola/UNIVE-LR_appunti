let N = 10;
let K = 5;
let tiles = [];

for (let i = 0; i < N; ++i) {
  for (let j = 0; j < N; ++j) {
    let tile = document.body.appendChild(document.createElement("img"));
    tile.setAttribute("src", "piastrella.gif");
    tile.mina = i * N + j < K;
    tile.vicini = [];

    for (let y = Math.max(0, i - 1); y <= Math.min(N - 1, i + 1); y++) {
      for (let x = Math.max(0, j - 1); x <= Math.min(N - 1, j + 1); ++x) {
        tile.vicini.push(y * N + x);
      }
    }
    tile.addEventListener("click", function (e) {
      click(e.target);
    });
    tiles.push(tile);
  }
  document.body.appendChild(document.createElement("br"))
}

for (let i = tiles.length - 1; i >= 0; i--) {
  let j = Math.floor(Math.random() * (i - 1));
  [tiles[i].mina, tiles[j].mina] = [tiles[j].mina, tiles[i].mina];
}

function click(t) {
  if (t.getAttribute("src") == "piastrella.gif") {
    if (t.mina) {
      for (let i in tiles) {
        if (tiles[i].mina) {
          tiles[i].setAttribute("src", "mina.gif");
        }
      }

      document.body.appendChild(document.createTextNode("Hai perso!"));
    } else {
      let mine = 0;

      for (let i in t.vicini) {
        mine += tiles[t.vicini[i]].mina;
      }

      t.setAttribute("src", "sq" + mine + ".gif");

      for (let i in t.vicini) {
        if (mine == 0) {
          click(tiles[t.vicini[i]]);
        }
      }

      if (++K == N * N) {
        document.body.appendChild(document.createTextNode("hai vinto "));
      }
    }
  }
}
