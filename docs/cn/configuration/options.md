# 配置选项

| 参数                                                   | 类型       | 默认值                | 描述                                                                        |
|------------------------------------------------------|----------|--------------------|---------------------------------------------------------------------------|
| `port`                                               | integer  | 8317               | 服务器将监听的端口号。                                                               |
| `auth-dir`                                           | string   | "~/.cli-proxy-api" | 存储身份验证令牌的目录。支持使用 `~` 来表示主目录。如果你使用Windows，建议设置成`C:/cli-proxy-api/`。        |
| `proxy-url`                                          | string   | ""                 | 代理URL。支持socks5/http/https协议。例如：socks5://user:pass@192.168.1.1:1080/       |
| `request-retry`                                      | integer  | 0                  | 请求重试次数。如果HTTP响应码为403、408、500、502、503或504，将会触发重试。                          |
| `remote-management.allow-remote`                     | boolean  | false              | 是否允许远程（非localhost）访问管理接口。为false时仅允许本地访问；本地访问同样需要管理密钥。                     |
| `remote-management.secret-key`                       | string   | ""                 | 管理密钥。若配置为明文，启动时会自动进行bcrypt加密并写回配置文件。若为空，管理接口整体不可用（404）。                   |
| `remote-management.disable-control-panel`            | boolean  | false              | 当为 true 时，不再下载 `management.html`，且 `/management.html` 会返回 404，从而禁用内置管理界面。 |
| `quota-exceeded`                                     | object   | {}                 | 用于处理配额超限的配置。                                                              |
| `quota-exceeded.switch-project`                      | boolean  | true               | 当配额超限时，是否自动切换到另一个项目。                                                      |
| `quota-exceeded.switch-preview-model`                | boolean  | true               | 当配额超限时，是否自动切换到预览模型。                                                       |
| `debug`                                              | boolean  | false              | 启用调试模式以获取详细日志。                                                            |
| `logging-to-file`                                    | boolean  | true               | 是否将应用日志写入滚动文件；设为 false 时输出到 stdout/stderr。                                |
| `usage-statistics-enabled`                           | boolean  | true               | 是否启用内存中的使用统计；设为 false 时直接丢弃所有统计数据。                                        |
| `api-keys`                                           | string[] | []                 | 兼容旧配置的简写，会自动同步到默认 `config-api-key` 提供方。                                   |
| `gemini-api-key`                                     | object[] | []                 | Gemini API 密钥配置，支持为每个密钥设置可选的 `base-url` 与 `proxy-url`。                    |
| `gemini-api-key.*.api-key`                           | string   | ""                 | Gemini API 密钥。                                                            |
| `gemini-api-key.*.base-url`                          | string   | ""                 | 可选的 Gemini API 端点覆盖地址。                                                    |
| `gemini-api-key.*.headers`                           | object   | {}                 | 可选的额外 HTTP 头部，仅在访问覆盖后的 Gemini 端点时发送。                                      |
| `gemini-api-key.*.proxy-url`                         | string   | ""                 | 可选的单独代理设置，会覆盖全局 `proxy-url`。                                              |
| `generative-language-api-key`                        | string[] | []                 | （兼容别名）旧管理接口返回的纯密钥列表。通过该接口写入会更新 `gemini-api-key`。                          |
| `codex-api-key`                                      | object   | {}                 | Codex API密钥列表。                                                            |
| `codex-api-key.api-key`                              | string   | ""                 | Codex API密钥。                                                              |
| `codex-api-key.base-url`                             | string   | ""                 | 自定义的Codex API端点                                                           |
| `codex-api-key.proxy-url`                            | string   | ""                 | 针对该API密钥的代理URL。会覆盖全局proxy-url设置。支持socks5/http/https协议。                    |
| `claude-api-key`                                     | object   | {}                 | Claude API密钥列表。                                                           |
| `claude-api-key.api-key`                             | string   | ""                 | Claude API密钥。                                                             |
| `claude-api-key.base-url`                            | string   | ""                 | 自定义的Claude API端点，如果您使用第三方的API端点。                                          |
| `claude-api-key.proxy-url`                           | string   | ""                 | 针对该API密钥的代理URL。会覆盖全局proxy-url设置。支持socks5/http/https协议。                    |
| `claude-api-key.models`                              | object[] | []                 | Model alias entries for this key.                                         |
| `claude-api-key.models.*.name`                       | string   | ""                 | Upstream Claude model name invoked against the API.                       |
| `claude-api-key.models.*.alias`                      | string   | ""                 | Client-facing alias that maps to the upstream model name.                 |
| `openai-compatibility`                               | object[] | []                 | 上游OpenAI兼容提供商的配置（名称、基础URL、API密钥、模型）。                                      |
| `openai-compatibility.*.name`                        | string   | ""                 | 提供商的名称。它将被用于用户代理（User Agent）和其他地方。                                        |
| `openai-compatibility.*.base-url`                    | string   | ""                 | 提供商的基础URL。                                                                |
| `openai-compatibility.*.api-keys`                    | string[] | []                 | (已弃用) 提供商的API密钥。建议改用api-key-entries以获得每密钥代理支持。                            |
| `openai-compatibility.*.api-key-entries`             | object[] | []                 | API密钥条目，支持可选的每密钥代理配置。优先于api-keys。                                         |
| `openai-compatibility.*.api-key-entries.*.api-key`   | string   | ""                 | 该条目的API密钥。                                                                |
| `openai-compatibility.*.api-key-entries.*.proxy-url` | string   | ""                 | 针对该API密钥的代理URL。会覆盖全局proxy-url设置。支持socks5/http/https协议。                    |
| `openai-compatibility.*.models`                      | object[] | []                 | Model alias definitions routing client aliases to upstream names.         |
| `openai-compatibility.*.models.*.name`               | string   | ""                 | Upstream model name invoked against the provider.                         |
| `openai-compatibility.*.models.*.alias`              | string   | ""                 | Client alias routed to the upstream model.                                |


> [!NOTE]
> 当指定了 `claude-api-key.models` 时，只有提供了别名的模型才会被注册到模型注册表中（此行为与 OpenAI 的兼容模式一致），并且该凭证的默认 Claude 其他未定义模型将无法访问。


