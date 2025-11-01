import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "CLIProxyAPI",
    description: "Wrap Gemini CLI, ChatGPT Codex, Claude Code, Qwen Code, iFlow as an OpenAI/Gemini/Claude/Codex compatible API service, allowing you to enjoy the free Gemini 2.5 Pro, GPT 5, Claude, Qwen model through API",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '首页', link: '/cn/'},
            {text: '快速开始', link: '/cn/introduction/quick-start'}
        ],

        sidebar: [
            {
                text: '介绍',
                items: [
                    {text: 'CLIProxyAPI是什么？', link: '/cn/introduction/what-is-cliproxyapi'},
                    {text: '快速开始', link: '/cn/introduction/quick-start'},
                    {text: 'GitHub', link: 'https://github.com/router-for-me/CLIProxyAPI'}
                ]
            },
            {
                text: '配置',
                items: [
                    {text: '基础配置', link: '/cn/configuration/basic'},
                    {text: '配置选项', link: '/cn/configuration/options'},
                    {text: '凭证目录', link: '/cn/configuration/auth-dir'},
                    {text: '热重载', link: '/cn/configuration/hot-reloading'},
                    {
                        text: '存储',
                        items:[
                            {text: 'Git 存储', link: '/cn/configuration/storage/git'},
                            {text: 'PostgreSQL 存储', link: '/cn/configuration/storage/pgsql'},
                            {text: '对象存储', link: '/cn/configuration/storage/s3'},
                        ]
                    },
                    {
                        text: '提供商',
                        items:[
                            {text: 'Gemini CLI', link: '/cn/configuration/provider/gemini-cli'},
                            {text: 'Claude Code', link: '/cn/configuration/provider/claude-code'},
                            {text: 'Codex', link: '/cn/configuration/provider/codex'},
                            {text: 'Qwen Code', link: '/cn/configuration/provider/qwen-code'},
                            {text: 'iFlow', link: '/cn/configuration/provider/iflow'},
                            {text: 'AI Studio', link: '/cn/configuration/provider/ai-studio'},
                            {text: 'OpenAI 兼容', link: '/cn/configuration/provider/openai-compatibility'},
                            {text: 'Claude Code 兼容', link: '/cn/configuration/provider/claude-code-compatibility'},
                            {text: 'Gemini 兼容', link: '/cn/configuration/provider/gemini-compatibility'},
                            {text: 'Codex 兼容', link: '/cn/configuration/provider/codex-compatibility'},
                        ]
                    },
                ]
            },
            {
                text: '管理',
                items: [
                    {text: 'Web UI', link: '/cn/management/webui'},
                    {text: '桌面客户端', link: '/cn/management/gui'},
                ]
            },
            {
                text: '代理客户端配置',
                items: [
                    {text: 'Claude Code', link: '/cn/agent-client/claude-code'},
                    {text: 'Codex', link: '/cn/agent-client/codex'},
                    {text: 'Gemini CLI', link: '/cn/agent-client/gemini-cli'},
                    {text: 'Factory Droid', link: '/cn/agent-client/droid'}
                ]
            },
            {
                text: 'Docker',
                items: [
                    {text: '使用 Docker', link: '/cn/docker/docker'},
                    {text: '使用 Docker Compose', link: '/cn/docker/docker-compose'},
                ]
            },

        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/router-for-me/CLIProxyAPI'}
        ],

        footer: {
            message: '基于 MIT 协议发布',
            copyright: '版权所有 © 2025-至今 Router-For.ME'
        },
    },
})