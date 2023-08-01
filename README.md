# Twitter, Replace image with Original

[Twitter, Replace image with Original \- Chrome ウェブストア](https://chrome.google.com/webstore/detail/twitter-replace-image-wit/nbmclnmpljdfgbpoilipbapbnhlbnbai)

Google Chrome 拡張機能。Twitter Web App (twitter.com) のツイート内画像を元画像へ自動で置き換えます。

通常 Twitter のタイムラインにはリサイズされた画像が読み込まれていますが、この拡張機能はそれをオリジナルサイズの画像へ自動で置き換えます。

画像のプレビュー時に大きな画像により見やすくなる他、「新しいタブで画像を開く」際にも最大サイズの画像が表示されるようになります。

2023年7月頃より Twitter の仕様変更でタイムラインのサムネイルが webp 形式で読み込まれるようになっていますが、それらについても元の jpg, png 形式で表示するように暫定の対策を組んであります。

---

## 注意事項

- 大きな画像に置き換えるという仕組み上、タイムラインに大量の画像がある場合などに Twitter の読み込みの処理が多少重くなります。
- この拡張機能を使用中に Twitter Web App の挙動に問題が発生した場合、Twitter の仕様変更とこの拡張機能の相性問題が疑われます。まずは一度この拡張機能を無効にしてみてください。
- 本拡張機能では Twitter 内に「orig」というパラメータで保持されている画像へ置き換えます。観測範囲内ではこのパラメータを指定した場合に投稿時と同じサイズの画像が返ってくることを確認していますが、それであっても Twitter による処理を経ているため、厳密な元画像ではない部分もあります。たとえば投稿前に存在した Exif 情報は保持されていません。
- 日本語表示選択時を対象に開発しています。理論上は他言語表示でも問題なく動くはずですが、検証はしていません。
- Google Chrome を対象に開発しています。拡張機能互換を謳う Chromium 系ブラウザでもおそらくは動きますが、検証はしていません。

## 不具合報告など

- [Chrome ウェブストアのページ](https://chrome.google.com/webstore/detail/twitter-replace-image-wit/nbmclnmpljdfgbpoilipbapbnhlbnbai)の「サポート」タブからご連絡ください。
- 「表示される画像と表示されない画像がある」といった場合、可能であれば問題の生じているツイートの URL を示していただけると助かります。
- 自分用ツールの延長線上での公開であり、対応優先順位としてはあまり高くありません。すべてに即時対応可能ではない旨をご了承ください。

## 更新履歴

[こちら](https://github.com/Y-dash/twitter-replace-image-with-original/releases)をご覧ください。

---

[![クリエイティブ・コモンズ・ライセンス](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)  
この 作品 は [クリエイティブ・コモンズ 表示 - 非営利 - 継承 4.0 国際 ライセンス](http://creativecommons.org/licenses/by-nc-sa/4.0/)の下に提供されています。

---