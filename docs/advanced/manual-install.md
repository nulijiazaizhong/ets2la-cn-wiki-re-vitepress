---
title: 手动安装
description: 使用命令行的方式手动安装ETS2LA
layout: doc
---

# 手动安装
## 1. 安装git
从[git官网](https://git-scm.com/install/windows)下载并安装git，安装时默认一直 `next` 即可

## 2. 安装 UV
使用终端管理员运行以下命令
```angular2html
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```
当终端中出现下图所显示的内容时则表明完成安装
![](https://tc.ets2la.cn/d/img/25-12/20250911093034.png)

## 3. 克隆仓库
- 在无云端同步服务的文件夹下创建文件夹，文件夹名称使用纯英文
- 进入到创建的文件夹内，右键选择 `在终端中打开`
- 在打开的终端内执行以下命令
```angular2html
git clone https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist.git
```
- 命令运行完成之后进入到 `Euro-Truck-Simulator-2-Lane-Assist` 文件夹内再输入 `uv sync` 安装依赖
```angular2html
uv sync
```
- 依赖安装完成之后输入 `uv run main.py` 来启动ETS2LA
```angular2html
uv run main.py
```
::: danger 注意
如果你无法通过 `git clone https://github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist.git` 拉取数据
可尝试使用 `git clone https://proxy-gh.ets2la.cn/github.com/ETS2LA/Euro-Truck-Simulator-2-Lane-Assist.git` 来拉取数据
PS：该方法拉取的数据较慢，需要耐心等待，但保证可以拉取到数据

:::
    
## 4. 简化启动
可以通过创建批处理文件简化启动流程 在 `Euro-Truck-Simulator-2-Lane-Assist` 文件夹内新建文本文档，将以下内容复制到文本文档中，将文本文档重命名为 `start.bat` (该步骤需要在资源管理器中打开文件后缀显示才能更改成功)
```angular2html
@echo off
cd /d %~dp0
uv run main.py
pause
```