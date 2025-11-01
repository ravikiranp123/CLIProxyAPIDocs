# OpenAI 兼容供应商

### OpenAI 兼容上游提供商

通过 `openai-compatibility` 配置上游 OpenAI 兼容提供商（例如 OpenRouter）。

- name：内部识别名
- base-url：提供商基础地址
- api-key-entries：API密钥条目列表，支持可选的每密钥代理配置（推荐）
- api-keys：(已弃用) 简单的API密钥列表，不支持代理配置
- models：将上游模型 `name` 映射为本地可用 `alias`

支持每密钥代理配置的示例：

```yaml
openai-compatibility:
  - name: "openrouter"
    base-url: "https://openrouter.ai/api/v1"
    api-key-entries:
      - api-key: "sk-or-v1-...b780"
        proxy-url: "socks5://proxy.example.com:1080"
      - api-key: "sk-or-v1-...b781"
    models:
      - name: "moonshotai/kimi-k2:free"
        alias: "kimi-k2"
```

使用方式：在 `/v1/chat/completions` 中将 `model` 设为别名（如 `kimi-k2`），代理将自动路由到对应提供商与模型。