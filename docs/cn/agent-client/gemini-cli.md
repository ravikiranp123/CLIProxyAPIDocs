# Gemini CLI

启动 CLI 代理 API 服务器，然后将 `CODE_ASSIST_ENDPOINT` 环境变量设置为 CLI 代理 API 服务器的 URL。

```bash
export CODE_ASSIST_ENDPOINT="http://127.0.0.1:8317"
```

服务器将中继 `loadCodeAssist`、`onboardUser` 和 `countTokens` 请求。并自动在多个账户之间轮询文本生成请求。

> [!NOTE]  
> 此功能仅允许本地访问，因为找不到一个可以验证请求的方法。
> 所以只能强制只有 `127.0.0.1` 可以访问。
