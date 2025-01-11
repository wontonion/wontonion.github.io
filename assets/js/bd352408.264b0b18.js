"use strict";(self.webpackChunktestpro=self.webpackChunktestpro||[]).push([[5659],{4416:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"java-multithreading/multitasking-model","title":"Preemptive multitasking","description":"In preemptive multitasking, the operating system preempts a program to allow another waiting task to run on the CPU. Programs or threads can\'t decide how long for or when they can use the CPU. The operating system\u2019s scheduler decides which thread or program gets to use the CPU next and for how much time. Furthermore, scheduling of programs or threads on the CPU isn\u2019t predictable. A thread or program once taken off of the CPU by the scheduler can\'t determine when it will get on the CPU next. As a consequence, if a malicious program initiates an infinite loop, it only hurts itself without affecting other programs or threads. Lastly, the programmer isn\'t burdened to decide when to give up control back to the CPU in code.","source":"@site/docs/java-multithreading/multitasking-model.mdx","sourceDirName":"java-multithreading","slug":"/java-multithreading/multitasking-model","permalink":"/docs/java-multithreading/multitasking-model","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java-multithreading/multitasking-model.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"java-multithread-keyword","permalink":"/docs/java-multithreading/java-multithread-keyword"},"next":{"title":"Mutex, Semaphore, Monitor","permalink":"/docs/java-multithreading/mutex-semaphore-monitor"}}');var r=o(6070),i=o(8637);const s={},a="Preemptive multitasking",c={},h=[{value:"sychronous",id:"sychronous",level:2},{value:"asynchronous",id:"asynchronous",level:2}];function u(e){const t={h1:"h1",h2:"h2",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"preemptive-multitasking",children:"Preemptive multitasking"})}),"\n",(0,r.jsx)(t.p,{children:"In preemptive multitasking, the operating system preempts a program to allow another waiting task to run on the CPU. Programs or threads can't decide how long for or when they can use the CPU. The operating system\u2019s scheduler decides which thread or program gets to use the CPU next and for how much time. Furthermore, scheduling of programs or threads on the CPU isn\u2019t predictable. A thread or program once taken off of the CPU by the scheduler can't determine when it will get on the CPU next. As a consequence, if a malicious program initiates an infinite loop, it only hurts itself without affecting other programs or threads. Lastly, the programmer isn't burdened to decide when to give up control back to the CPU in code."}),"\n",(0,r.jsx)(t.h1,{id:"cooperative-multitasking",children:"Cooperative multitasking"}),"\n",(0,r.jsx)(t.p,{children:"Cooperative Multitasking involves well-behaved programs to voluntarily give up control back to the scheduler so that another program can run. A program or thread may give up control after a period of time has expired or if it becomes idle or logically blocked. The operating system\u2019s scheduler has no say in how long a program or thread runs for. A malicious program can bring the entire system to a halt by busy waiting or running an infinite loop and not giving up control. The process scheduler for an operating system implementing cooperative multitasking is called a cooperative scheduler. As the name implies, the participating programs or threads are required to cooperate to make the scheduling scheme work."}),"\n",(0,r.jsx)(t.h1,{id:"sychronous-vs-asynchronous",children:"sychronous vs asynchronous"}),"\n",(0,r.jsx)(t.h2,{id:"sychronous",children:"sychronous"}),"\n",(0,r.jsx)(t.p,{children:"Synchronous execution refers to line-by-line execution of code. If a function is invoked, the program execution waits until the function call is completed. Synchronous execution blocks at each method call before proceeding to the next line of code. A program executes in the same sequence as the code in the source code file."}),"\n",(0,r.jsx)(t.p,{children:"Synchronous execution is synonymous to serial execution."}),"\n",(0,r.jsx)(t.h2,{id:"asynchronous",children:"asynchronous"}),"\n",(0,r.jsx)(t.p,{children:"Synchronous execution refers to line-by-line execution of code. If a function is invoked, the program execution waits until the function call is completed. Synchronous execution blocks at each method call before proceeding to the next line of code. A program executes in the same sequence as the code in the source code file. Synchronous execution is synonymous to serial execution."}),"\n",(0,r.jsx)(t.p,{children:"In contrast to synchronous execution, asynchronous execution doesn't necessarily execute code line by line, that is instructions may not run in the sequence they appear in the code. Async execution can invoke a method and move onto the next line of code without waiting for the invoked function to complete or receive its result. Usually, such methods return an entity sometimes called a future or promise that is a representation of an in-progress computation."})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8637:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>a});var n=o(758);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);