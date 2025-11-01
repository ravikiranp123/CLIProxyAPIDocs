# Codex 兼容供应商

通过 `codex-api-key` 配置上游 Codex 兼容供应商。

- api-key: 上游供应商的API key
- base-url: 上游供应商的端点覆盖地址
- proxy-url: 代理服务器地址（可选）

Example:
```yaml
codex-api-key:
  - api-key: "sk-atSM..."
    base-url: "https://www.example.com" # 使用第三方 Codex API 中转服务端点
    proxy-url: "socks5://proxy.example.com:1080" # 可选：针对该密钥的代理设置
```
