# 開発ログ

## 2026-05-31

### やったこと

* Vite + React を使用したゲームポートフォリオサイト作成開始
* ゲーム一覧をカード形式で表示するレイアウトを作成
* カードを2列表示に調整
* ゲームサムネイル、説明文、Playボタン、GitHubボタンを実装
* カードデザインの配色を検討
* 白背景ベースの落ち着いたグレートーンデザインを採用
* Playボタンをシックなグレー系デザインへ調整
* サムネイル画像表示レイアウトを調整
* object-fit: cover / contain の挙動を検証
* サムネイル画像のアスペクト比問題を調査
* 画像比率を 16:10 に変更し、画像の見切れ・余白問題を解消
* ホバー時のカードアニメーションを追加
* サイト内検索機能を実装
* 検索キーワードに応じてゲーム一覧をフィルタリングする処理を追加

### GitHub連携

* games.js による手動管理から GitHub API による自動取得方式へ移行
* useGithubGames カスタムフックを作成
* GitHub REST API を利用してリポジトリ一覧を取得
* API取得結果のデバッグを実施
* Console を利用したレスポンス確認方法を学習
* React側で発生した game.tech エラーを調査・修正
* GitHub API取得データに合わせてデータ構造を整理

### GitHub Pages連携

* GitHub Pages 公開済みゲームとの連携を実施
* Playボタンと GitHub Pages URL を紐付け
* GitHubリポジトリに thumbnail.png を配置
* サムネイル画像を GitHub リポジトリから自動取得する仕組みを構築

### Topics対応

* GitHub Topics 機能を調査
* ゲーム用リポジトリに game トピックを設定
* Topics によるゲームリポジトリの自動抽出方式を導入
* 将来的にゲーム以外のリポジトリを除外できる構成へ変更

### 公開・運用方針検討

* GitHub Pages による無料公開方式を採用
* 独自ドメイン利用可否を調査
* DNS と GitHub Pages の連携方法を確認
* Google検索への掲載方法を調査
* Google Search Console の利用方法を確認
* sitemap.xml・robots.txt の必要性を確認
* SEO向け title / meta description の設計方針を整理

### 発生した課題

* games.js 管理方式と GitHub API 管理方式が混在し、一時的に表示不能状態となった
* GitHub API取得データに tech プロパティが存在せずエラー発生
* Topics取得可否の確認方法が分からずデバッグを実施
* thumbnail.png が存在しないリポジトリで画像表示エラーが発生
* homepage 未設定リポジトリで Play ボタンが機能しない問題を確認・解決

### 現在の状態

* GitHub API によるゲーム情報の自動取得が動作
* GitHub Topics によるゲーム抽出が動作
* GitHub Pages の Play ボタン連携が動作
* サムネイル画像の自動表示が動作
* サイト内検索機能が動作
* ゲーム追加時は GitHub へ Push → Topics 設定 → GitHub Pages 公開のみでサイトへ反映可能な状態
