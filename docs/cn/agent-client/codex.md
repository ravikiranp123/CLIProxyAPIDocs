# Codex

启动 CLI Proxy API 服务器, 修改 `~/.codex/config.toml` 和 `~/.codex/auth.json` 文件。

config.toml:
```toml
model_provider = "cliproxyapi"
model = "gpt-5-codex" # 或者是gpt-5，你也可以使用任何我们支持的模型
model_reasoning_effort = "high"

[model_providers.cliproxyapi]
name = "cliproxyapi"
base_url = "http://127.0.0.1:8317/v1"
wire_api = "responses"
```

auth.json:
```json
{
  "OPENAI_API_KEY": "sk-dummy"
}
```