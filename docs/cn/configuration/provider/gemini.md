# Gemini API 配置

使用 `gemini-api-key` 参数来配置 Gemini API 密钥；每个条目都可以选择性地提供 `base-url`、`headers` 与 `proxy-url`。`headers` 仅会附加到访问覆盖后 Gemini 端点的请求，不会转发给代理服务器。旧的 `generative-language-api-key` 管理接口仍提供纯密钥视图以保持兼容——通过该接口写入会替换整个 Gemini 列表，并丢弃任何额外配置，同时该字段不再持久化到 `config.yaml`。
