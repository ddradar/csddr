# Consumer DDR

[![release version](https://img.shields.io/github/v/release/ddradar/csddr "release version")](https://github.com/ddradar/csddr/releases)
[![studio-nuxt-build](https://github.com/ddradar/csddr/actions/workflows/node.yml/badge.svg)](https://github.com/ddradar/csddr/actions/workflows/node.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/ddradar/csddr/badge)](https://www.codefactor.io/repository/github/ddradar/csddr)
[![License](https://img.shields.io/github/license/ddradar/csddr)](LICENSE)
[![Nuxt Studio](https://img.shields.io/badge/Open%20in%20Nuxt%20Studio-18181B?&logo=nuxt.js&logoColor=3BB5EC)](https://nuxt.studio/@ddradar/csddr)

家庭用DDR作品の曲リストです。(powered by [@nuxt/content](https://content.nuxt.com/))

## Development

### Environment
- Node.js >= 18 (required)
- Visual Studio Code または他のエディタ

### CLI Commands

```bash
# 依存関係のインストール (Install Dependencies)
> npm install

# コードの記法チェック (run ESLint & Prettier)
> npm run lint
# コードの記法チェック & 自動修正 (run ESLint & Prettier with auto fix)
> npm run fix

# 開発サーバーの起動 (see https://nuxt.com/docs/api/commands/dev)
> npm run dev

# 本番ビルド (Production build)
> npm run build
# 本番ビルドした内容のプレビュー (Preview build assets)
> npm run preview
```

## Contributing

1. リポジトリをクローンし、新しいブランチを作成します。 / Clone this repository and create new branch.
1. コードを追加、または変更します。 / Add or fix these codes.
1. 変更箇所について、下記を確認します。 / Check your changes on:
    - コードの記法ルールに準拠しているか / Compliants lint rules (`npm run lint`)
    - 正しく表示されるか / Views correctly (`npm run dev`)
1. プルリクエストを送ります。 / Create a pull request.
    - 変更内容について、タイトルと詳細にわかりやすく記述してください。 / Please write a title and detail to clarify your changes.

### Add or Fix Page info

- [/content](./content) フォルダ内のMarkdownを編集、または追加します。 / Edit or Create Markdown files on [/content](./content) folder.
  - 新規の場合は、テンプレートを基に作成してください。 / Please create new flies from templetes. ([Series page](./content/.series-template.md)/[Song page](./content/.song-template.md))
