# Codex

启动 CLI Proxy API 服务器, 修改 `~/.codex/config.toml` 和 `~/.codex/auth.json` 文件。

config.toml:
```toml
approval_policy = "never" # 无需确认是否执行操作，危险指令，初次接触codex删除该指令
sandbox_mode = "danger-full-access" # 沙箱模式超高权限，危险指令，初次接触codex删除该指令

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
