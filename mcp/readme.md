# mcp
chatbot->推理模型->Agent->创新->组织

- function call
  可以让LLM 突破自身的知识和能力的局限，通过调用外部工具或API来获取实时信息、执行计算操作，从而获取最新数据精确计算与外部系统交互的复杂任务

- mcp model Context Protocol
  是一个协议，web 开发中的Restful协议，如何讲外部资源暴露给LLM协议和编程风格
  是function Call的升级版

  在做各种Function Call优点乱的时候，mcp统一了一切。

- 安装

  LLM 本身不知道怎样调用地图、数据库、搜索引擎，MCP给一定了表追上下文交换方式，让大模型能像调用API一样去访问外部能力

## 举例
   高德地图MCP，请帮我规划从公司到机场的路线
