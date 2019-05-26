# Make IT for Designer - 50knocks
Make IT デザイナー研修用プログラム
## 目標
- HTML／CSS／JavaScriptの基礎の理解
- 完成見本（カンプ）を元に適切なコーディングができる

[※解答手順はこちらを参照](./answer/example/回答手順.md)  
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
また、aタグの色を (黒字) になるようにCSSを使って変更しなさい。
下線をCSSプロパティを使って削除してください。

<img src="https://i.imgur.com/tP2tphE.gif" width=700>


8. ## anchor+
上下左右画面一杯に広がる色が異なるdiv3つを作成しなさい。
各div内に他色のdiv要素へ飛ぶリンクを設置しなさい。

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
CSSfilterを使って任意の画像を加工してください。 grayscaleを使ったモノクロ画像、sepiaを使ったセピア画像、blurを使ったぼかし画像を作成してください。

![](https://i.imgur.com/e8gE9MJ.png)


12. ## shadow
hover時box-shadow今風の影にハイライトするようにしてください。

![](https://i.imgur.com/zu8gbSa.gif)

13. ## nav
横並びのナビゲーションバーを実装してください。

```
コンテンツは6つ
マウスオーバーした際に色が変わること![](https://i.imgur.com/T40XPOF.png)
![](https://i.imgur.com/1BPhRgX.png)

```
![](https://i.imgur.com/tifeg6E.gif)

14. ## onImage
画面に画像を表示し、その画像の上にタイトルを表示してください。 画像のタイトルだけかっこいいフォントを使ってください。

![](https://i.imgur.com/KD8NVbD.png)


15. ## video
画面いっぱいに広がる動画を配置してください。画面中央にタイトル文字を表示してください。
動画は自動再生、ループ再生するように。

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
floatを使い、100px四方のdiv群を以下のように並べてください。

![](https://i.imgur.com/Po8tWIG.png)

18. ## flexbox
flexboxを使い、100px四方のdiv群を以下のように並べてください。

![](https://i.imgur.com/j7Tcq5n.png)

19. ## mediaQuery
11番で作成したflexboxのdiv群をスマホ使用時に縦一列に並ぶように改変しなさい。

![](https://i.imgur.com/JbWss8I.gif)

20. ## grid
Gridを使い、以下のようなレイアウトを作りなさい。文字・画像は任意とします。


![](https://i.imgur.com/uoGJxHF.png)

21. ## position
スクロールしても動かないdivと、途中から途中まで固定されるdivを作ってください。

![](https://i.imgur.com/xaKAUgY.gif)

22. ## drawing
CSSを使ってキャラクターを一人書いてください。

![](https://i.imgur.com/jwCAFzR.png)


23. ## boxSizing
ファイル作成を二つ行いそれぞれ違ったbox-sizingを使用して違いを確認しなさい。 (hint:divを二つ作成 を記載する)
<img src="https://i.imgur.com/8HA8zUe.png" width=400>


24. ## transform
横に長い棒Divを二つ作り,CSSプロパティを使用してバッテンにしてください。

![](https://i.imgur.com/XUmKKh3.png)

25. ## transition
100px四方のブロックを作成し、hover時に500x100ピクセルに変形するアニメーションをcss-transition を用いて作成しなさい。
また、変形の際に色が変わるアニメーションも追加してください。

![](https://i.imgur.com/vFqwO80.gif)

26. ## keyframes
適当な文字を左から右に無限にスライドするアニメーションをcssのkeyframesを用いて作成しなさい。

![](https://i.imgur.com/ruKEwer.gif)

27. ## unit
画面サイズによってサイズが変わる文字、div要素を作成しなさい。

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
1 ~ 100の数値を順番に列挙し、列挙している数値が３で割り切れる場合は'fizz'を5で割り切れる場合は'buzz'を、15の倍数になるものは'fizzbuzz'をコンソール出力してください。
hint:繰り返し処理（for）や演算について調べてみよう。

<img src="https://i.imgur.com/60SJpmX.png" width=300>


35. ## JavaScript-総合問題② changeColor
背景色・適当な文字列を設置しボタンを押すたびに背景色、文字サイズが変わるボタンを作成しなさい。※関数を使用すること！

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

## header
以下の要素は`<header>~</header>`内に記述してください。

36. ## headerContainer
37. ## headerMenu
38. ## headerLabel

## main
以下の要素は`<main>~</main>`内に記述してください。

39. ## firstViewWrap
40. ## gridBox
41. ## position
42. ## createSection
43. ## webFont
44. ## flexBox
45. ## backgroundImageMask
46. ## createTable
47. ## accessMap

## footer
以下の要素は`<footer>~</footer>`内に記述してください。

48. ## footerContainer
49. ## footerContents
50. ## copyRight