# Make IT for Designer - 50knocks
Make IT デザイナー研修用プログラム
## 目標
- HTML／CSS／JavaScriptの基礎の理解
- 完成見本（カンプ）を元に適切なコーディングができる

[※解答手順はこちらを参照](./answer/回答手順.md)  
# HTML
1. ## helloTable
3 x 3の表を画面に表示してください。
コンテンツはすべて「こんにちは」。一番左の列は縦に３つ結合してください。

![](https://i.imgur.com/NWGooGT.png)

2. ## createSection
適切な文章構造になるように、以下の文章をマークアップしてください。
```
吾輩は猫である
夏目漱石
　吾輩は猫である。名前はまだ無い。
　どこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪どうあくな種族であったそうだ。
```
使用タグ：`<section>` `<h1>` `<h2>` `<p>` `<br>`

3. ## form
formタグを使って個人情報送信フォームを作ってください。
完成後submitボタンを押して、URLを確認して下さい。
入力された情報がURLに正しく追記されているか確認して下さい。
```
名前: (type="text") 必須項目にすること
Eメール: (type="email") 
パスワード: (type="password")
年齢: (selectタグとoptionタグ) 0~200歳まで選べること
性別: (type="radio") labelタグも使用すること
送信ボタン(type="submit")
formタグの属性にmethod="get"を追加すること
必須項目が入力されていない場合、入力を促すような仕組みにすること
```
![](https://i.imgur.com/YnAWJY8.gif)


# CSS
4. ## textDecoration
`text-align` `line-height` `letter-spacing` を使って以下のHTMLを見本通りに表示してください。
```
<h1>Make IT</h1>
<p>
If we try,we can Make IT exciting.<br>
「つくれる」を、つくる
</p>
```
![](https://i.imgur.com/6WIa9Z0.png)

5. ## centerDiv
300px四方のdivを画面の上部中央に表示してください。色は赤、画面幅が変わっても中心に移動するようにしてください。
![](https://i.imgur.com/yRqrU7i.gif)

6. ## display
`<span>` で囲んだ文字に背景色CSSを付けて、以下のdisplayプロパティの表示の違いを確認してください。
```
display: inline;
display: inline-block;
display: block;
```
![](https://i.imgur.com/CIOq4Jx.png)


7. ## anchor
Make IT ホームページに遷移するリンクを３つ表示してください。
１つは同一タブ上で開くように
１つは新しいタブで開くように
また、aタグの色を (黒字) になるようにCSSを使って変更してください。
下線をCSSプロパティを使って削除してください。

<img src="https://i.imgur.com/tP2tphE.gif" width=700>


8. ## anchor+
同一ページ上に上下左右画面一杯に広がる色が異なるブロックを3つ作成してください。
各要素に別ブロックへのリンクを設置してください。

<img src="https://i.imgur.com/LEeFNaY.gif" width=700>


9. ## objectFit
以下の画像を`border-radius`で正円に丸め、潰れた画像を`object-fit`を使って正しく表示してください。

<img src="https://i.imgur.com/pXRK0bl.jpg" width=700>
<img src="https://i.imgur.com/Jojb2Ka.png" width=400>

10. ## gradient
4番で作成したcenterdivのカラーをCSSプロパティを使用しグラデーション色にしてください。
色、種類は問いません。

![](https://i.imgur.com/5ZFDnH7.gif)

11. ## filter
CSSfilterを使って任意の画像を加工してください。  
grayscaleを使ったモノクロ画像、sepiaを使ったセピア画像、blurを使ったぼかし画像を作成してください。

![](https://i.imgur.com/e8gE9MJ.png)


12. ## shadow
hover時box-shadow今風の影にハイライトするようにしてください。

![](https://i.imgur.com/zu8gbSa.gif)

13. ## nav
横並びのナビゲーションバーを実装してください。
下記条件を満たしていれば見た目は問いません。
```
コンテンツは6つ
マウスオーバーした際に色が変わること![](https://i.imgur.com/T40XPOF.png)
![](https://i.imgur.com/1BPhRgX.png)

```
![](https://i.imgur.com/tifeg6E.gif)

14. ## onImage
画面に画像を表示し、その画像の上にタイトルを表示してください。
画像のタイトルだけかっこいいフォントを使ってください。

![](https://i.imgur.com/KD8NVbD.png)


15. ## video
画面いっぱいに広がる動画を配置してください。
画面中央にタイトル文字を表示、動画は自動再生・ループ再生してください。

![](https://i.imgur.com/SWtCqU0.jpg)

16. ## new
以下のhtmlでnewクラスがついているものだけコンテンツの末尾にnewがつくようにしてください。

```html
<ul>
    <li>ポッポ</li>
    <li>カイオーガ</li>
    <li class="new">ゼラオラ</li>
    <li>ガオガエン</li>
</ul>
```
　出力例
![](https://i.imgur.com/2po2YlA.png)

17. ## float
floatを使い、正方形のブロック要素を以下のように並べてください。

![](https://i.imgur.com/Po8tWIG.png)

18. ## flexbox
flexboxを使い、正方形のブロック要素を以下のように並べてください。

![](https://i.imgur.com/j7Tcq5n.png)

19. ## mediaQuery
11番で作成したflexboxのdiv群をスマホ使用時に縦一列に並ぶようにしてください。

![](https://i.imgur.com/JbWss8I.gif)

20. ## grid
Gridを使い、以下のようなレイアウトを作りなさい。文字・画像は問いません。


![](https://i.imgur.com/uoGJxHF.png)

21. ## position
画面上に固定されているブロック要素と、スクロールすることによってずれるブロック要素を作成してください。

![](https://i.imgur.com/xaKAUgY.gif)

22. ## drawing
CSSを使ってキャラクターを一人書いてください。

![](https://i.imgur.com/jwCAFzR.png)


23. ## boxSizing
cssの`box-sizing`プロパティを用いて違いを確認して下さい。
![](https://i.imgur.com/9DwST2C.png)


24. ## transform
ブロック要素を二つ作り、CSSプロパティを使用してバツ印にしてください。

![](https://i.imgur.com/XUmKKh3.png)

25. ## transition
100px四方のブロックを作成し、hover時に500x100ピクセルに変形するアニメーションを`css-transition` を用いて作成してください。
また、変形の際に色が変わるアニメーションも追加してください。

![](https://i.imgur.com/vFqwO80.gif)

26. ## keyframes
適当な文字を左から右に無限にスライドするアニメーションをcssのkeyframesを用いて作成してください。

![](https://i.imgur.com/ruKEwer.gif)

27. ## unit
画面サイズによってサイズが変わる文字、div要素を作成してください。

![](https://i.imgur.com/qXIfdkI.gif)

# JavaScript
28. ## consoleLog
javascriptファイルを作成し、適当な文字をコンソール出力してください。

29. ## variable
数字の変数を２つ作成し、それを足し合わせた結果をコンソール出力してください。

30. ## if
変数の値に応じて出力結果が変わるif文を組みコンソール出力してください。
```
if (条件) {
条件が真であれば実行
} else {
条件が偽であれば実行
}
```

31. ## function
23.ifで作成したif文を関数化し、引数を渡すだけで値が返ってくる関数を作成、コンソール出力してください。

32. ## onClick
背景色が変わるボタンを作成してください。

![](https://i.imgur.com/Smuxsi8.gif)

33. ## changeClass
適当な文と背景色を作成した後、文字サイズ・背景色が変わるボタンを設置してください。

![](https://i.imgur.com/qDbH1vZ.gif)

34. ## JavaScript-総合問題① Fizz Buzz
1 ~ 100の数値を順番に列挙し、列挙している数値が３で割り切れる場合は`fizz`を。
5で割り切れる場合は`buzz`を。
15の倍数になるものは`fizzbuzz`をコンソール出力してください。

<img src="https://i.imgur.com/60SJpmX.png" width=300>


35. ## JavaScript-総合問題② changeColor
適当な文字列と背景色を設置しボタンを押すたびに文字サイズ・背景色が変わるボタンを作成してください。
※関数を使用してください。

![](https://i.imgur.com/3PE3vi7.gif)

# 総合問題
総合問題では架空のパンケーキ屋「PANCAKE 横浜のパンケーキ」のWebサイトの完成を目指します。

### 注意点
- 以下の問題は全て同ディレクトリ内・同HTML内に記述してください。
- 画像素材は`36-50_images/`に用意しています。作成した回答用ディレクトリの中に`images/`を作成し、その中に画像素材を格納してください。
- 最終的なディレクトリの構成は以下のようになります。
```
  root:.
  ├─36-50_images //=> 36-50 画像素材
  ├─answer //=> 回答例ディレクトリ
  └─YamadaTaro
    　└─36-50_webSite/
          ├─css //=> CSSファイルを格納
          ├─images //=> 36-50_imagesの画像素材を格納
          └─36-50_webSite.html
```
- ベースとなるCSS（文字色やリンク色の設定）は以下のものを使用してください。
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-size: 1rem;
    font-family: "ヒラギノ角ゴ Pro W3","Hiragino Kaku Gothic ProN",Helvetica,Arial,"ヒラギノ角ゴ ProN W3",Meiryo,メイリオ,sans-serif;
    color: #2F2F2F;
    line-height: 180%;
}

a {
    color: #2F2F2F;
    text-decoration: none;
    transition: 0.3s;
}
a:hover {
    color: #B29F9F;
    transition: 0.3s;
}
```

## header
`<body>~</body>`内に`<header>~</header>`を追加し、指示に従ってヘッダーを作成してください。

36. ## headerContainer
ヘッダー（`header`）のCSSに以下のプロパティを記述してください。
```css
横幅： 100vw;
縦幅： 110px;
display: flex;
justify-content: space-between;
align-items: center;
内側の余白: 1.5rem;
```

37. ## headerNav
ヘッダーロゴ（`header_logo.png`）と以下のナビゲーションタグを設置してください。
```html
<nav class="header_nav">
    <ul class="header_nav_container">
        <li><a href="#about">ABOUT PANCAKE</a></li>
        <li><a href="#menu">MENU</a></li>
        <li><a href="#shop">SHOP</a></li>
        <li><a href="#access">ACCESS</a></li>
    </ul>
</nav>
```
また、完成例を参考に、`.header_nav_container` `.header_nav_container li`に以下のプロパティを記述してください。
```css
.header_nav_container {
    display: flex;
    list-style: なし;
    文字の太さ: 700;
    文字サイズ: 1rem;
    文字の間隔: 0.1rem;
}
.header_nav_container li {
    内側の余白: 1rem;
}
```
完成例

<img src="https://i.imgur.com/acHaeh0.png" width=700>


38. ## headerFixed
ヘッダー（`header`）が常に画面上部に固定されるように、`header`のCSSを追記してください。

## main
`<header>~</header>`の直下に`<main>~</main>`を追加し、指示に従ってメインコンテンツを作成してください。

39. ## firstViewWrap
`<main>~</main>`内に以下のタグを追加し、完成例を参考にCSSで装飾してください。
```html
<div id="index">
    <img src="images/main_logo.png" alt="main logo" class="main_logo">
</div>
```
完成例

<img src="https://i.imgur.com/I7Srzd0.jpg" width=700>

CSS参考例（一部）
```css
#index {
    width: calc(100vw - 3rem);
    height: calc(100vh - 130px);
    margin: 110px auto 0;
}
```

40. ## gridLayout
39で作成したdivの直下に以下のタグを追加し、`gridLayout`を用いて完成例のようなレイアウトに仕上げてください。
```html
<div id="about">
    <div class="about_title_container">
        <img src="images/title_about.png" alt="about" class="about_title">
    </div>
    <div class="about_text_container">
        <h2>
            “おいしい”と<br>
            “しあわせ”が広がる
        </h2>
        <p>
            横浜のパンケーキ専門店“PANCAKE”。
            安心と安全にこだわった、身体にやさしい素材を使用したパンケーキは、一枚一枚ていねいに焼き上げます。
            “おいしい”と“しあわせ”がたっぷり詰まったパンケーキをお試しください。
        </p>
    </div>
    <div class="about_image_container"></div>
</div>
```
完成例

<img src="https://i.imgur.com/9eojT3W.jpg" width=700>

CSS参考例（一部）
```css
#about {
    width: 100vw;
    display: grid;
    grid-template-rows: 330px 260px;
    grid-template-columns: 1fr 355px;
    padding: 1.5rem;
}
```
参考：[CSS Grid Layout を極める！（基礎編）](https://qiita.com/kura07/items/e633b35e33e43240d363)

41. ## flexBox
40で作成したdivの直下に以下のタグを追加し、flexBoxを用いて完成例のようなレイアウトに仕上げてください。
```html
<div id="menu">
    <img src="images/title_menu.png" alt="menu" class="menu_title">
    <ul class="menu_list_container">
        <li class="menu_list_item">
            <figure>
                <img src="images/menu_image_1.jpg" alt="menu image">
            </figure>
            <h3>フルーツパンケーキ</h3>
            <p>季節の果物をたっぷりつかった定番のパンケーキ。</p>
            <p class="price">
                税込
                <span>¥1,080</span>
            </p>
        </li>
        <li class="menu_list_item">
            <figure>
                <img src="images/menu_image_2.jpg" alt="menu image">
            </figure>
            <h3>ほうれん草ベジパンケーキ</h3>
            <p>ほうれん草を生地にねり込んだ、栄養たっぷりのベジパンケーキ。</p>
            <p class="price">
                税込
                <span>¥1,130</span>
            </p>
        </li>
        <li class="menu_list_item">
            <figure>
                <img src="images/menu_image_3.jpg" alt="menu image">
            </figure>
            <h3>ミニパンケーキ</h3>
            <p>プレーンなパンケーキ。アレルギー７品目不使用のやさしい味わい。</p>
            <p class="price">
                税込
                <span>¥980</span>
            </p>
        </li>
        <li class="menu_list_item">
            <figure>
                <img src="images/menu_image_4.jpg" alt="menu image">
            </figure>
            <h3>アフタヌーンセット</h3>
            <p>お好みのパンケーキ＋フルーツサンドイッチ＋日替わり紅茶の贅沢なセット。</p>
            <p class="price">
                税込
                <span>¥1,650</span>
            </p>
        </li>
    </ul>
</div>
```
完成例

<img src="https://i.imgur.com/A3JpdxU.jpg" width=700>

CSS参考例（一部）
```css
#menu {
    width: 100vw;
    height: 100vh;
    display: flex;
}
```

42. ## textLayout
41で作成したメニューリストを、完成例を参考にCSSで装飾してください。

完成例

<img src="https://i.imgur.com/tcYm8OP.jpg" width=700>

CSS参考例（一部）
```css
見出し {
    文字色: #452D2D;
    文字の位置: center;
    内側の余白: 1rem 0;
    外側の余白（下）: 1.5rem;
    下線: 1px solid #B29F9F;
}
本文 {
    文字サイズ: 0.9rem;
}
p.price {
    文字色: #452D2D;
    文字の位置: right;
    文字の間隔: 0.1rem;
    内側の余白: 1rem 0;
}
```

43. ## webFont
[Google Fonts](https://fonts.google.com/)を用いて`header`と`price`のフォントを変更してください。
フォントの種類に指定はありません。

完成例

<img src="https://i.imgur.com/BDfgg3X.jpg" width=700>

44. ## shopContainer
41-43で作成したdivの直下に以下のタグを追加し、背景画像に`shop_image.jpg`を設定してください。
また、`title_shop.png`が真ん中にくるようにCSSを追加してください。
```html
<div id="shop">
    <div class="shop_back_mask">
        <img src="images/title_shop.png" alt="shop" class="shop_title">
        <table cellspacing="0" class="shop_info_container">
            <tr>
                <th>店舗名</th>
                <td>PANCAKE　横浜のパンケーキ</td>
            </tr>
            <tr>
                <th>営業時間</th>
                <td>AM11:00〜PM21:00(L.O.20:30)</td>
            </tr>
            <tr>
                <th>休業日</th>
                <td>年中無休</td>
            </tr>
            <tr>
                <th>電話番号</th>
                <td>03-5456-8888</td>
            </tr>
            <tr>
                <th>所在地</th>
                <td>東京都渋谷区宇田川町４−３ メイクイット渋谷2F</td>
            </tr>
        </table>
    </div>
</div>
```

CSS参考例（一部）
```css
#shop {
    width: calc(100vw - 3rem);
    height: calc(100vh - 130px);
    border-radius: 1.5rem;
    margin: 0 auto;
}
.shop_title {
    display: block;
}
```

45. ## backgroundImageMask
`.shop_back_mask`を透明度50%の黒背景にしてください。
半透明の背景色は`rgba( red, green, blue, alpha)`を用いて設定することができます。
44でつくった`ShopContainer`にきれいにマスクがかかるようにサイズや形を調整し、中の要素をFlexBoxを用いて完成例のようにレイアウトしてください。

完成例

<img src="https://i.imgur.com/Jy52rua.jpg" width=700>

46. ## createTable
テーブルタグを、完成例を参考にCSSで装飾してください。

完成例

<img src="https://i.imgur.com/UhVEHBB.jpg" width=700>

CSS参考例
```css
table.shop_info_container {
    横幅: 45vw;
    外側の余白: 3rem auto;
}
table.shop_info_container th {
    横幅: 12vw;
    下線: 1px 実線 白色;
    内側の余白: 1rem;
}
table.shop_info_container td {
    下線: 1px 実線　白色（透明度50%）;
    内側の余白: 1rem;
}
```

47. ## accessMap
44-46で作成したdivの直下に以下のタグを追加してください。
追加したタグを、完成例を参考にCSSで装飾してください。マップ部分の枠線の色は`#B29F9F`です。
```html
<div id="access">
    <img src="images/title_access.png" alt="access" class="access_title">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.587112907458!2d139.69618831525833!3d35.66254298019856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca9246ebdc1%3A0x861d8636fb38accc!2z44CSMTUwLTAwNDIg5p2x5Lqs6YO95riL6LC35Yy65a6H55Sw5bed55S677yU4oiS77yT!5e0!3m2!1sja!2sjp!4v1558878895759!5m2!1sja!2sjp" width="100%" height="450" frameborder="0" class="access_map" allowfullscreen></iframe>
</div>
```
完成例

<img src="https://i.imgur.com/FYMkTog.png" width=700>


## footer
`<main>~</main>`の直下に`<footer>~</footer>`を追加し、指示に従ってメインコンテンツを作成してください。

48. ## footerContainer
フッター（footer）のCSSを、以下の条件にしたがって記述してください。
- 横幅はウィンドウサイズ一杯に広がるように
- 背景色： `#452D2D`
- 内側の余白： `3rem`
- リンクの色： `#ffffff`
- 背景画像： `footer_logo.png`（右寄せ）
- 背景画像の位置: `right 2rem center`


49. ## footerNav
48で作成したフッター内に、以下のナビゲーションタグを設置してください。
設置したナビゲーションを、完成例を参考にCSSを整えてください。
```html
<nav class="footer_nav">
    <ul class="footer_nav_container">
        <li><a href="#about">ABOUT PANCAKE</a></li>
        <li><a href="#menu">MENU</a></li>
        <li><a href="#shop">SHOP</a></li>
        <li><a href="#access">ACCESS</a></li>
    </ul>
    <p>
        <a href="#">求人情報</a>
        <a href="#">お問い合わせ</a>
    </p>
    <small>
        Copyright(c) 2019 PANCAKE. All Rights Reserved.
    </small>
</nav>
```
完成例

<img src="https://i.imgur.com/HdgcFaN.png" width=700>


50. ## footerAnchor
フッターナビゲーションのリンク色を、以下の条件にしたがって記述してください。
- デフォルトの色: `#ffffff`
- マウスを重ねた時の色： `#B29F9F`
- 色の切り替わりをフェードで処理する

# 完成例
<img src="answer/36-50_webSite/36-50_webSite.png" width=700>