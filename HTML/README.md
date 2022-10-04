<div style="text-align: center"><h1>Tag HTML</h1></div>

## Tag didalam `<head></head>`

- `<meta>`

  > meta digunakan untuk mendeskripsikan tentang website kita, juga mempermudah search enggine mengidentifikasi website kita

- `<title></title>`
  > tag ini digunakan untuk memberi nama pada website kita

## Tag didalam `<body></body>`

Ada banyak tag yang bisa di masukan didalam body diantaranya:

- text
  `<h1>, <h2>, <h3>, ..., <p> ...`
- pendukung text
  `<br>, <hr>, <em>, <strong>, ...`
- gambar
  `<img>`
- hyper link
  `<a>`
- list (bulets & numbering)
  `<ul>, <ol>, <li>, <dl>, <dt>, <dd>,`
- table
  `<table>, <thead>, <tbody>`
- form
  `<form>, <input>, <select>, <button> ...`
- script
  `<script>`
- object
  `<object>`
- grouping
  `<div>, <span>`

## Structure tag

### `<namatag attribute="nilai">`

contoh:

> `<div class="pembungkus"></div>`

> &nbsp;&nbsp;&nbsp;&nbsp;attribute yang bisa digunakan:
>
> - acceskey
> - id
> - class
> - dir
> - land
> - style
> - tabindex
> - title

## Penggunaan tag `<h1> - <h6>`

![gambar haeder](gambar/penggunaan-heading.png "how to use tag h1 - h6")

## Tag list

- **ol (ordered list)**

code:

![ol dan li](gambar/ol-dan-li.png "how to use ol and li")

result:

![result ol dan li](gambar/ol-result.png "result using ol and li")

- **ul (unordered list)**
  code:

![ol dan li](gambar/ul-dan-li.png "how to use ul and li")

result:

![result ol dan li](gambar/ul-result.png "result using ul and li")

- **dl (definition list)**
  code:

![ol dan li](gambar/definition-list.png "how to use dl, dt and dd")

result:

![result ol dan li](gambar/dl-result.png "result using dl, dt and dd")

## Hyper link

ada beberapa cara menggunakan href di Hyper link

- external link
- internal link
- relative link

penulisan syntax:

> contoh penggunaan external link
>
> ```html
> <a href="https://www.youtube.com">Menuju Youtube</a>
> ```
>
> > artinya akses youtube menggunakan link youtube itu sendiri

> contoh penggunaan internal link
>
> ```html
> <a href="halaman2.html">Menuju ke halaman2.html</a>
> ```
>
> > artinya akses halaman2.html yang foldernya sama dengan folder saat ini

> contoh penggunaan relative link
>
> ```html
> <a href="../page/halaman2.html">Menuju halaman 2</a>
> ```
>
> > artinya naik satu folder, lalu masuk ke folder page dan temukan halaman2.html

## Img

> Tag `<img src="" alt="">` digunakan untuk menampilkan sebuah gambar, yang akan diinputkan ke attribute `src=""`. ada 2 cara untuk memnambahkan src
>
> 1. external
> 2. internal

> contoh penggunaan external tag img
>
> ```html
> <img
>   src="https://akcdn.detik.net.id/visual/2022/06/28/minions-the-rise-of-gru-5_169.png?w=650"
>   alt="gambar-minion"
> />
> ```

> contoh penggunaan internal tag img
>
> ```html
> <img src="gambar/definition-list.png" alt="gambar-minion" />
> ```

> contoh mengkombinasikan tag img dan link
>
> ```html
> <a href="www.google.com">
>   <img src="gambar/definition-list.png" alt="gambar-minion" />
> </a>
> ```
