---
title: How I manage packages across systems
description: Managing packages on MacOS and Windows
date: 2025-10-28
tags:
  - systems
  - packages
---

After I tried Linux, I saw the convenience of using a package manager.
I like how easy it is to install a package just by knowing its name.
So I tried to implement this approach on Mac and Windows.

On __MacOS__ there is a wonderful third-party package manager called
[Homebrew](https://brew.sh/).
It has almost all the software I need and I never had issues with it.

On __Windows__ there is now a built-in package manager called
[WinGet](https://github.com/microsoft/winget-cli).
It is unfortunately missing some software,
but it is constantly improving.

It is important to save packages list,
this would help you reinstall the system later.
Also, some of them have configuration files
located in home directory, called __dotfiles__.
I store all of this on
[GitHub](https://github.com/Efimish/dotfiles).
