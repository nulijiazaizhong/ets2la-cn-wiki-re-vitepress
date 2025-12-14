---
title: 无法安装
description: 这里总结了无法启动的问题
layout: doc
---


# 无法安装
## 安装程序打不开
我们使用名为 NSIS 的标准化安装程序。该程序也被许多其他应用程序使用。如果安装程序甚至无法打开，请检查您的防病毒设置以确保它没有被阻止。还要确保您从官方存储库（github.com）或国内镜像(ets2la.cn) 下载安装程序

# 安装时显示错误消息
如果安装程序引发错误消息，则可能是多种情况之一。要正确确定您面临的问题，请单击 确定 在错误消息上，然后单击 显示详细信息 安装程序窗口中的按钮。然后，您可以查看最新的日志，以将它们与下面看到的案例进行匹配

## WARNING: Retrying (Retry(total=4...
这意味着安装程序在连接到 python 服务器时遇到问题。请检查您的互联网连接并确保您可以访问 python。通常，再安装时勾选 aliyun mirror/USTC（china）；当然如果你有一些 特殊手段 也是可以的

## fatal: destination path ‘.’ already exists and is not an empty directory.
这意味着您尝试将 ETS2LA 安装到的目录不为空。如果您没有更改任何设置，则应删除 C：\ETS2LA 文件夹并重试

## fatal: unable to access ‘...’
这意味着安装程序无法连接到您选择的下载镜像。请检查您的互联网连接并确保您可以访问至少一个镜像。通常，国内用户可以通过选择CNB仓库来解决这个问题

## warning: Could not find remote branch rewrite to clone.
这意味着您仍在使用与存储库所做的更改不兼容的旧安装程序。请从[官方存储库](https://github.com/ets2la/installer/releases/latest)（github.com）或[国内镜像](https://download.ets2la.cn/s/Of0rWo)(ets2la.cn) 下载最新版本的安装程序