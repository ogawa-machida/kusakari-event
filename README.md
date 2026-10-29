草刈り活動記録 Ver.2.9

追加：管理者専用「助成金」タブ、領収書画像/PDFのFirebase保存、経費台帳、対象区分、経費CSV、実績報告下書きTXT、印刷/PDF保存。

重要：Firebase Realtime DatabaseとStorageのセキュリティルールで kusakari/events/2026-11-29/receipts および subsidy、同じStorage配下のreceiptsへの読み書きを許可する必要があります。既存ルールを上書きせず適切に追加してください。簡易管理者コードはサーバー側の認可ではないため、領収書には個人情報を含めないか、Firebase Auth/Rulesで管理者専用に制限してください。

OCR自動読取・指定様式PDFへの直接記入・原本一括ZIPは未実装です。領収書は個別に開いて保存できます。
