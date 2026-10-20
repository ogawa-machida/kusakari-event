# 草刈り活動記録 Ver.2.1

公開URL: https://ogawa-machida.github.io/kusakari-event/

- manifestのidを `/kusakari-event/ogawa-kusakari-app` に絶対パスで明示。Ver.2.0の相対idと同一の識別URLを維持するため、別アプリ扱いになる変更はしません。
- start_urlを `/kusakari-event/`、scopeを `/kusakari-event/` に明示。
- 画面表示バージョンをVer.2.1に変更。
- Firebaseデータ・ルールは変更なし。
- GitHub Pagesの `/kusakari-event/` にZIPの6ファイルを同一階層で配置。

重要: これはパス指定を明確化する修正であり、Android/Chrome側のPWA起動エラーを確実に解消するものではありません。既存の他アプリやChrome全体のデータを削除しないでください。
