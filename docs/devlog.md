こんな感じで良いと思います。今回のチャットで出てきた内容を「実際に学んだこと」寄りにまとめてみました。

# 開発ログ

## 2026-06-27

### やったこと

* 吹き出しコメント（思考バブル）実装
* 吹き出しとドットを一体化
* タイトル横への吹き出し配置調整
* `position: absolute` の基礎理解
* `padding` と `margin` の違い学習
* フッターデザイン追加
* フッター背景色設定
* フッター余白調整
* OGPタグ追加
* SEO用metaタグ追加
* favicon設定確認
* React多言語化(i18next)導入開始
* `useTranslation()` 利用
* `ja.json` / `en.json` 作成
* ブラウザ言語による表示切替検討
* SEOと多言語対応方針整理

---

### ハマった

* 吹き出しを右へ移動したかったが `padding` を変更していた
* `position: absolute` の基準要素を理解できていなかった
* 吹き出し内の `h3` が意図しない表示になった
* `useTranslation is not defined`

  * import漏れ
* `Invalid hook call`

  * i18next初期化不足
* `GET /src/i18n.js 500`

  * i18next設定ファイル読み込みエラー
* Reactで使える記法とHTMLで使える記法の違い

  * `index.html` では `{t("title")}` が使えない
* SEO用metaタグとOGPタグの役割の違いが曖昧だった

---

### 学んだこと

#### CSS

* `padding`

  * 要素の内側余白
* `margin`

  * 要素の外側余白
* `left`
* `right`
* `top`
* `bottom`

は位置調整用

* `width`
* `height`
* `padding`

はサイズ調整用

* `position: absolute`
  は親要素(`position: relative`)を基準に配置される

---

#### React

* Hookは関数コンポーネント内でしか使えない
* `useTranslation()` を使うには

  * `react-i18next`
  * `i18next`
  * `i18n.js`
    が必要
* React(JSX)とHTMLでは記法が異なる

---

#### SEO

* `<title>`

  * Google検索結果のタイトル候補
* `meta description`

  * 検索結果の説明文候補
* `og:title`

  * SNS共有時のタイトル
* `og:description`

  * SNS共有時の説明
* `og:image`

  * SNS共有時の画像

---

### 次やる

* i18next導入完了
* JA / EN切替ボタン作成
* フッター整備
* プロフィールセクション追加検討
* ハンバーガーメニュー構成検討
* Google Search Console登録
* sitemap.xml作成
* OGP画像作成
* Analytics導入

---