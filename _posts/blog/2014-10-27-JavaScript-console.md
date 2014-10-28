---
layout: post
title: JavaScript-console对象
description: 各种被玩坏的Console。
category: blog
---

##console.log()，console.warn()，console.error()，console.info()，console.debug()

`console.log()`用于在console窗口显示信息。

参数可以是普通字符串、格式字符串

```
console.log("duan");                                //duan
console.log("zhi","lei");                           //zhi lei
console.log("%s","D-ZL");                           //D-ZL
console.log("%cD-ZL","font-size:20px;color:red;");  //D-ZL(red)
```

> %s      字符串
> %d,%i   整数
> %f      浮点数
> %o      对象的链接
> %c      CSS格式字符串






