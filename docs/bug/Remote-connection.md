---
title: 远程连接
description: 安装程序打不开
layout: doc
---

# 远程连接
(使用该功能需安装最新版本，之前安装过的需要卸载重新安装)
## 可视化
您可以使用外部设备（如平板电脑）连接到本地计算机上运行的 ETS2LA 实例

1.确保您的计算机和外部设备都连接到同一网络

2.确保在 ETS2LA 中启用了可视化插件

3.在设备的浏览器中打开 http://visualization.ets2la.com 或 https://visualization.ets2la.cn

        注意 HTTP 协议，不支持 HTTPS。 您将需要一个允许纯 HTTP 连接（如 Firefox）的浏览器

4.按红色的Remote Connection按钮连接到您的 PC

如果以上步骤不起作用，您可以按照以下故障排除步骤作

1.确保您的计算机可以访问 http://ets2la.local:37520
打开页面应显示 ETS2LA 版本

2.确保您的设备可以访问 http://ets2la.local:37520
如果不能，则问题出在您的设备和计算机之间。在这种情况下，我们无能为力，因为网络环境不是统一的

3.尝试手动键入计算机的 IP 地址，而不是按 Remote Connection 按钮
此 IP 地址在 可视化 插件设置中提供，您也可以通过在终端中运行 ipconfig 来找到它

## 网络前端
您还可以从外部设备控制计算机上的 ETS2LA 实例。这确实有一些限制，但大多数设置应该可用

1.确保您的计算机和设备都连接到同一网络

2.在设备的浏览器中打开 http://app.ets2la.com

        注意 HTTP 协议，不支持 HTTPS。 您将需要一个允许纯 HTTP 连接（如 Firefox）的浏览器

3.如果可以，该页面将自动连接到 ETS2LA 实例