# Gemini CLI (Gemini OAuth 登录):

```bash
./cli-proxy-api --login
```

如果您是现有的 `Gemini Code` 用户，可能需要指定一个项目ID：

```bash
./cli-proxy-api --login --project_id <your_project_id>
```

本地 OAuth 回调端口为 `8085`。

选项：加上 `--no-browser` 可打印登录地址而不自动打开浏览器。本地 OAuth 回调端口为 `8085`。

