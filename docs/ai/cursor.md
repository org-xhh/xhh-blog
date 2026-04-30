# [Cursor](https://cursor.com/cn/docs/agent/overview)

## 编写规则

- 项目根目录下创建 .cursor/rules 文件夹
- 新建规则文件，使用 .mdc（Markdown with Metadata）格式

## Ctrl + K

选中部分代码后按 Ctrl + K，调用 AI 功能‌生成或修改代码‌。

## Ctrl + L

AI 聊天；

选中代码 => Add to Chat

## @ 符号增加上下文

## skills

- 内置 skill 所在目录： ~/.cursor/skills-cursor/，不要动

- 个人技能：~/.cursor/skills/技能名/SKILL.md

- 项目技能：项目根目录 .cursor/skills/技能名/SKILL.md

- 一键创建：/create-skill, 填写：名称、描述、指令等，自动生成

- 触发：自动激活相关技能；聊天框输入 /, 选择 skill，即可使用该技能


最小可用模板:
```
---
name: your-skill-name
description: Brief description of what this skill does and when to use it.
---

# Your Skill Name

## Instructions
Clear, step-by-step guidance for the agent.
```
