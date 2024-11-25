"use strict";(self.webpackChunktestpro=self.webpackChunktestpro||[]).push([[710],{1072:u=>{u.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/githubio-blog-with-docusaurus","metadata":{"permalink":"/zh-Hans/blog/githubio-blog-with-docusaurus","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-22-githubio-docusaurus-blog/001-githubio-docusaurus-blog.mdx","source":"@site/blog/2023-11-22-githubio-docusaurus-blog/001-githubio-docusaurus-blog.mdx","title":"\u4f7f\u7528 github.io \u548c Docusaurus \u642d\u5efa\u4e2a\u4eba\u535a\u5ba2\u7f51\u7ad9","description":"This blog is going to teach everyone how to build a github blog with URL like `username.github.io` with a popular document framework Docusaurus. Here, `username` refers to the nickname of your Github account.","date":"2023-11-22T00:00:00.000Z","tags":[{"inline":true,"label":"github","permalink":"/zh-Hans/blog/tags/github"},{"inline":true,"label":"githubio","permalink":"/zh-Hans/blog/tags/githubio"},{"inline":true,"label":"blog","permalink":"/zh-Hans/blog/tags/blog"},{"inline":false,"label":"Docusaurus","permalink":"/zh-Hans/blog/tags/docusaurus","description":"Docusaurus tag description"}],"readingTime":3.74,"hasTruncateMarker":false,"authors":[{"name":"wontonion","key":null,"page":null}],"frontMatter":{"title":"\u4f7f\u7528 github.io \u548c Docusaurus \u642d\u5efa\u4e2a\u4eba\u535a\u5ba2\u7f51\u7ad9","updated":"2023-11-22T00:00:00.000Z","author":"wontonion","slug":"/githubio-blog-with-docusaurus","tags":["github","githubio","blog","docusaurus"],"keywords":["github","githubio","blog","docusaurus"],"description":"This blog is going to teach everyone how to build a github blog with URL like `username.github.io` with a popular document framework Docusaurus. Here, `username` refers to the nickname of your Github account."},"unlisted":false},"content":"\x3c!-- TODO \u600e\u4e48\u5f15\u7528\u5728md/mdx\u91cc\u9762\u5f15\u7528description\uff1f --\x3e\\n\\n# Build a blog by utilizing **github.io** and **Docusaurus**\\n\\n\\n## 1. \u524d\u671f\u51c6\u5907\\n\u521b\u5efa\u535a\u5ba2\u4e4b\u524d\uff0c\u6211\u4eec\u5e94\u8be5\u5148\u5bf9\u73af\u5883\u548c\u8f6f\u4ef6\u505a\u4e00\u4e9b\u51c6\u5907\uff1a\\n1. Github\u5e10\u53f7\\n2. \u914d\u7f6e\u4e86\u548cgithub\u4e92\u901a\u7684git\u73af\u5883\uff0c\u53ef\u53c2\u8003[github\u5b98\u65b9\u6587\u6863](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)\u3002\u6216\u8005\u4f7f\u7528github desktop\u3002\\n3. \u4e00\u4e2a\u7ec8\u7aef\u3002\\n4. vscode \u6216\u5176\u4ed6\u7f16\u8f91\u5668\\n5. \u9700\u8981\u914d\u7f6e\u4e00\u4e0b\u672c\u5730\u7684nodejs\u73af\u5883\uff0c\u9700\u8981\u4f7f\u7528\u5230npm\u8fd9\u6837\u7684nodejs\u5305\u7ba1\u7406\u5de5\u5177\uff0c\u53ef\u81ea\u884c\u641c\u7d22nodejs\u548cnpm\u7684\u5b89\u88c5\u65b9\u5f0f\u3002npm\u5728windows\u4e0b\u6709\u70b9\u95ee\u9898\uff0c\u53ef\u4ee5\u4f7f\u7528yarn\u3002\\n\\n## 2. \u539f\u7406\u89e3\u91ca\\n1. \u6839\u636e\u8fd9\u4e2a[\u94fe\u63a5](https://pages.github.com/)\u4e0a\u7684\u4ecb\u7ecd\uff0c\u6240\u6709\u7684github\u5e10\u53f7\u90fd\u53ef\u4ee5\u4f7f\u7528`username.github.io`\u8fd9\u6837\u4e00\u4e2a\u7f51\u5740\u6765\u5f53\u4f5c\u81ea\u5df1\u7684\u514d\u8d39\u57df\u540d\u3002\u5b9e\u73b0\u65b9\u6cd5\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a`username.github.io`\u7684repo\u5373\u53ef\u3002\\n2. \u7531\u4e8edocusaurus\u662f\u4e00\u4e2a\u9759\u6001\u7f51\u7ad9\u6846\u67b6\uff0c\u6211\u4eec\u5199\u5b8c\u4e86\u535a\u5ba2\u7684`.md`\u6587\u4ef6\u4e4b\u540e\u7f51\u7ad9\u5e76\u4e0d\u4f1a\u81ea\u52a8\u66f4\u65b0\uff0c\u800c\u662f\u9700\u8981\u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u7f51\u7ad9\u5b8c\u6210\u66f4\u65b0\u3002\u6211\u4eec\u65e2\u53ef\u4ee5\u76f4\u63a5\u4e0a\u4f20\u7f16\u8bd1\u597d\u7684build\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7Github Action\u6765\u5b9e\u73b0CI/CD\u3002\u8fd9\u91cc\u7684CI/CD\u5c31\u662fcommit\u5199\u597d\u7684`.md`\u6587\u4ef6\u4e4b\u540e\uff0c\u7531github\u6765\u81ea\u52a8\u5e2e\u52a9\u6211\u4eec\u5b8c\u6210\u7f16\u8bd1\u548c\u90e8\u7f72\u3002\u56e0\u540e\u8005\u6bd4\u8f83\u4f18\u96c5\uff0c\u6545\u672c\u6559\u7a0b\u4f7f\u7528\u540e\u8005\u3002\\n\\n## 3. \u5177\u4f53\u6b65\u9aa4\\n1. \u53ef\u4ee5\u5148\u5728github\u4e0a\u521b\u5efa\u4e00\u4e2a`username.github.io`\u7684\u4ed3\u5e93\\n2. \u4f7f\u7528git \u547d\u4ee4/github desktop\uff0c\u628a\u4ed3\u5e93\u62c9\u53d6\u5230\u672c\u5730\u3002\\n3. \u8fdb\u5165\u4ed3\u5e93\u8def\u5f84\\n4. \u6839\u636e[\u5b98\u65b9\u6587\u6863](https://docusaurus.io/docs/installation)\u7684\u547d\u4ee4`npx create-docusaurus@latest my-website classic` \u521b\u5efadocursaurus\u5e94\u7528\uff0c\u53ef\u4ee5\u76f4\u63a5\u8d77\u540d`my-website`\u3002\u8fd9\u4e2a\u6587\u4ef6\u5939\u7b49\u4e0b\u4f1a\u5220\u6389\uff0c\u95ee\u9898\u4e0d\u5927\uff0c\u672c\u6587\u4ee5\u8be5\u547d\u4ee4\u4e3a\u51c6\uff0c\u4f7f\u7528`my-website`\u4f5c\u4e3a\u9879\u76ee\u540d\u79f0\u3002\\n5. \u6839\u636e[\u5b98\u65b9\u6587\u6863](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions)\uff0c\u5728\u4ed3\u5e93\u76ee\u5f55\u4e2d\u521b\u5efa`.github`\u548c`.github/workflows`\u4e24\u4e2a\u6587\u4ef6\u5939\u3002\\n6. \u5728`.github/workflows`\u4e2d\uff0c\u521b\u5efa\u4e0a\u9762\u6587\u6863\u4e2d\u7684\u4e24\u4e2a\u6587\u4ef6`github/workflows/deploy.yml`\u548c`.github/workflows/test-deploy.yml`\uff0c\u5176\u4e2d\u8fd9\u4e24\u4e2a\u6587\u4ef6\u4e2d\u7684`yarn`\u547d\u4ee4\u9700\u8981\u6839\u636e\u81ea\u5df1\u7684\u5305\u7ba1\u7406\u5de5\u5177\u8fdb\u884c\u4fee\u6539\uff0c\u4fee\u6539\u65b9\u5f0f\u89c1\u4e0b\u56fe\\n   \\n    \x3c!-- ![Prompt for change yarn command to npm command](/img/docs/001-githubio-docusaurus-blog-image-0.png) --\x3e\\n\\n7. \u5b8c\u6210\u4ee5\u4e0a\u6b65\u9aa4\u540e\uff0c\u628a`my-website`\u4e2d\u7684\u6240\u6709\u6587\u4ef6\u526a\u5207\u5904\u7406\uff0c\u653e\u5230\u548c`.github`\u540c\u4e00\u5c42\u4e0b\uff0c\u5982\u4e0b\u56fe\u3002\u7136\u540e\u53ef\u4ee5\u5220\u9664\u7a7a\u6587\u4ef6\u5939`my-website`\u3002\\n   \\n    \x3c!-- ![Tree structure of Operating folders](/img/docs/001-githubio-docusaurus-blog-image-1.png) --\x3e\\n\\n8.  \u628a\u4ed3\u5e93push\u5230github\u4e0a\\n9.  push\u5b8c\u6210\u540e\u6d4f\u89c8\u5668\u767b\u5f55\u8d26\u6237\uff0c\u8fdb\u5165\u8be5\u4ed3\u5e93\uff0c\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e\\n\x3c!-- ![Github action setting](/img/docs/001-githubio-docusaurus-blog-image-2.png) --\x3e\\n\u5728\u8be5\u6b65\u9aa4\u4e2d\uff0c\u53ef\u80fd\u6b65\u9aa43\u7684gh-pages\u6ca1\u5f97\u9009\uff0c\u9700\u8981\u7b49\u5f85github\u7f16\u8bd1\u5b8c\u6210\u540e\u624d\u4f1a\u51fa\u73b0\uff0c\u53ef\u4ee5\u8fdb\u5165\u8fd9\u91cc\u67e5\u770bgithub action\u7684\u7f16\u8bd1\u8fdb\u5ea6\u3002\u9996\u6b21\u7f16\u8bd1\u6210\u529f\u624d\u4f1a\u51fa\u73b0\u8be5\u5206\u652f\u3002\\n\\n\\n    \x3c!-- ![Verify the compile status](/img/docs/001-githubio-docusaurus-blog-image-3.png) --\x3e\\n    \\n10. \u5982\u679c\u4ee5\u4e0a\u6b65\u9aa4\u987a\u5229\uff0c\u7b49\u5f85github action\u7f16\u8bd1\u5b8c\u6210\u5c31\u53ef\u4ee5\u76f4\u63a5\u5728\u6d4f\u89c8\u5668\u5730\u5740\u680f\u8f93\u5165\u7f51\u5740`username.github.io`\u8fdb\u884c\u67e5\u770b\uff0c\u73b0\u5728\u5e94\u8be5\u770b\u5230\u7684\u662fdocusaurus\u7684tutorilal\u9875\u9762\u3002`username`\u5f53\u7136\u662f\u4f60\u81ea\u5df1\u7684github\u8d26\u6237\u540d\u5b57\uff0c\u4e0d\u4f1a\u770b\u5230\u8fd9\u91cc\u624d\u660e\u767d\u5427\u3002"}]}}')}}]);