---
title: 崩溃
description: 
layout: doc
---

# 崩溃
本页面总结了可能遇到的崩溃问题及解决方案。

# 游戏 

## 崩溃/卡死
尽管 ETS2LA 导致您的游戏崩溃的可能性极小，但我们仍然可以执行一些故障排除步骤，看看我们是否可以找出问题所在。 转到 设置-SDK，尝试卸载并重新安装SDK。 如果重新进入游戏，游戏可以正常运行，那么就是SDK导致的问题。
::: warning 注意
当游戏出现重大更新时，建议重新安装一遍SDK，如果你很长时间没有使用 ETS2LA，那么我们也建议你在使用ETS2LA之前重新安装一下SDK。
:::

## ETS2LA
### 1. 缺少必要的Python子模块
如果在控制台中看到下面这张图中的内容，意味着 ETS2LA 缺少启动所需的 Python 子模块。 这通常发生在安装或更新失败后。要修复该错误，只需在 ETS2LA 安装目录中打开`activate.bat`文件并依次运行以下代码即可。
::: tip 修复方法
cd app

pip install -r requirements.txt

如果上面的命令卡住/失败，可尝试使用下面的命令

pip install -r requirements.txt -i https://pypi.mirrors.ustc.edu.cn/simple

:::
![](https://tc.ets2la.cn/d/img/25-12/20251213201502451.png)

### 2. 地图插件运行循环中出错
如果在控制台中看到下面这张图中的内容，意味着 ETS2LA 的地图插件在运行循环中出错。 这通常发生在地图插件代码中存在错误或异常时。要修复该错误，您需要检查地图插件代码并修复任何错误或异常。

![](https://tc.ets2la.cn/d/img/25-12/20251213201541914.png)


如果以上方法都无法解决您的问题，请通过[Discord](https://ets2la.com/discord)或者[kook](https://kook.vip/VZaUPP)联系我们。
