---
title: 安装
description: 使用exe安装程序自动完成安装
layout: doc
---

# 准备工作 {#prepare}

## 1. 下载并安装C++ runtime

### 1.1. 下载C++ runtime
访问[微软官方地址](https://aka.ms/vs/17/release/vc_redist.x64.exe)进行下载

### 1.2. 安装C++ runtime  
双击下载下来的文件，先勾选`我同意许可条款和条件`，再点击`安装`。  
![](https://tc.ets2la.cn/d/img/25-12/20251202103155.png)  
如果你双击打开C++ runtime的安装程序是这样的，这表明你已经有了基础的环境，直接点击 `关闭`即可。 
![](https://tc.ets2la.cn/d/img/25-12/20251202094207.png)

::: tip 提示

仍在使用Windows 8及更低版本系统的用户不建议使用ETS2LA

:::

# 安装软件

## 2.下载安装程序并完成安装

### 2.1. 下载安装程序
前往软件在[GitHub](https://github.com)上的[发布页](https://github.com/ETS2LA/installer/releases)，下载最新地安装程序
![](https://tc.ets2la.cn/d/img/25-12/20251202105027.png)
::: tip 提示
如果你无法通过GitHub下载到安装程序，我们同样提供[镜像下载](https://www.ets2la.cn/installer)  
<font color="#ff0000">PS</font>:使用镜像下载的文件会在文件名中携带更新日期信息，例如：`ETS2LA-Windows-Installer(update-10-10).exe`
:::

### 2.2. 运行安装程序
双击运行刚才下载的安装程序，可能会出现`Windows defender`的提示，直接点击`更多信息`，展开之后选择`仍要运行`即可。
![](https://tc.ets2la.cn/d/img/25-12/20250721084016.png)  
在完成上一步之后会来到选择语言的界面，选择`Simplified Chinese`并点击OK即可。  
![](https://tc.ets2la.cn/d/img/25-12/20251202125608.png)  
之后会进入到安装向导，点击`下一步`即可  
![](https://tc.ets2la.cn/d/img/25-12/20251202125735.png)  
点击`我接受`以同意许可协议    
![](https://tc.ets2la.cn/d/img/25-12/20251202125809.png)  
勾选`我已知晓，若曾为此安装程序付费，即表示我已受骗`并点击`下一步`  
![](https://tc.ets2la.cn/d/img/25-12/20251202125900.png)  
选择软件`安装目录`；建议使用**盘符根目录**以避免使用**中文目录**带来的无法安装的问题  
![](https://tc.ets2la.cn/d/img/25-12/20251202130133.png)  
仓库地址选择`CNB`,Pypi Mirror选择`USTC`或`Aliyun`，然后点击下一步  
![](https://tc.ets2la.cn/d/img/25-12/20251202130358.png)  
根据自己需要选择是否创建`开始菜单快捷方式和桌面快捷方式`，然后点击安装  
![](https://tc.ets2la.cn/d/img/25-12/20251202130552.png)  
安装过程中点击`显示详情`可以查看安装进度，点击`显示详情`也是在安装出现问题时最直接能够看出问题出现在什么地方的方式
![](https://tc.ets2la.cn/d/img/25-12/20251202130738.png)  
当出现这样的内容时，稍作等待，最终需要的时间取决于各位的硬盘速度以及网络环境  
![](https://tc.ets2la.cn/d/img/25-12/20251202131000.png)  
安装完成后**取消**勾选`启动ETS2LA`，然后点击完成  
![](https://tc.ets2la.cn/d/img/25-12/20251202131048.png)
::: tip 提示
这里建议取消勾选`启动ETS2LA`，因为在启动ETS2LA时会下载一些文件，如果你的网络不好，可能会卡在下载文件上，导致每次启动都会出现警告；在后面的教程中
会教如何解决
:::