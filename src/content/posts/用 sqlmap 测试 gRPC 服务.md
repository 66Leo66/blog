---
title: 用 sqlmap 测试 gRPC 服务
time: "2023-08-11T16:30+08:00"
tags:
  - sec
---

## 简介

[`sqlmap`](https://sqlmap.org) 是一个开源的渗透测试工具，可以用来自动化的检测，利用SQL注入漏洞，获取数据库服务器的权限。

然而，sqlmap 本身只支持HTTP或直连数据库进行测试。这意味着对于gRPC目标，我们需要一点点额外的工作。

## grpcui

一个不用自己造轮子的方案是 [grpcui](https://github.com/fullstorydev/grpcui)。

`grpcui` 是一个命令行工具，可以让我们通过浏览器与 gRPC 服务器进行交互。它有点像 Postman，但用于 gRPC API 而不是 REST。

```bash
$ grpcui -plaintext localhost:12345 # 如果要 TLS 加密则省略 -plaintext
gRPC Web UI available at http://127.0.0.1:60551/...
```

按照提示在浏览器中打开 Web UI，grpcui 会自动通过 `gRPC ServerRefelction` 获取可用服务并展示在下拉列表。我们可以通过这个界面手动构造请求、发送并查看结果。

## REST

非常自然地，我们会想到把对于目标服务器的 gRPC 交互转化为对于 grpcui 的 HTTP 交互。

在Web端通过 grpcui 发送请求，然后：

1. 通过浏览器 DevTools 查看网络请求，找到对于 `/invoke/[SERVICE]` 的 POST请求，右键并分别复制请求标头、复制请求数据
2. **或者** 通过 BurpSuite 抓包并直接全选 Raw Request，`右键 -> Copy to File`

最终得到形如这样的的请求文件：
```
POST /invoke/SimpleApp.getInfo HTTP/1.1
Host: 127.0.0.1:60551
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/116.0
Accept: */*
Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2
Accept-Encoding: gzip, deflate
Content-Type: application/json
x-grpcui-csrf-token: xxxxxxxxxxxxxxxxxxx
X-Requested-With: XMLHttpRequest
Content-Length: 195
Origin: http://127.0.0.1:60551
Connection: close
Referer: http://127.0.0.1:60551/
Cookie: _grpcui_csrf_token=xxxxxxxxxxxxxxxxxxx
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin

{"metadata":[{"name":"token","value":"whatever"}],"data":[{"id":"114514"}]}
```

## sqlmap

保持 grpcui 运行，接下来开始调用 sqlmap，注意不要让 sqlmap 自动刷新 csrf token。

```bash
$ sqlmap -r ~/REQFILE
        ___
       __H__
 ___ ___["]_____ ___ ___  {1.7.5#stable}
|_ -| . [(]     | .'| . |
|___|_  [,]_|_|_|__,|  _|
      |_|V...       |_|   https://sqlmap.org

[!] legal disclaimer: Usage of sqlmap for attacking targets without prior mutual consent is illegal. It is the end user's responsibility to obey all applicable local, state and federal laws. Developers assume no liability and are not responsible for any misuse or damage caused by this program

[*] starting @ 11:45:11 /1919-08-10/

[16:28:33] [INFO] parsing HTTP request from '/home/someuser/REQFILE'
JSON data found in POST body. Do you want to process it? [Y/n/q] Y
Cookie parameter '_grpcui_csrf_token' appears to hold anti-CSRF token. Do you want sqlmap to automatically update it in further requests? [y/N] N

[SOME SQLMAP OUTPUT]
```

The end.