# nexus.js
JavaScriptによる背景アニメーション.

## 使い方
[enchant.js](https://github.com/uei/enchant.js-builds)を読み込み、nexus.jsを読み込む.

#### `nexus.draw(rectSize, rectColor, density)`

* `rectSize` Integer
* `rectColor` String
* `density` Integer

`rectSize`px、色は`rectColor`(CSSと同じ記法て記述)の正方形で描画を開始する. `density`(1-15の数値)が大きいほどスプライトの数が多くなる. ページの読み込み完了後に実行する.
