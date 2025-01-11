"use strict";(self.webpackChunktestpro=self.webpackChunktestpro||[]).push([[1438],{8310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"java-multithreading/process-and-thread","title":"Program","description":"A program is a set of instructions and associated data that resides on the disk and is loaded by the operating system to perform some task. An executable file or a python script file are examples of programs. In order to run a program, the operating system\u2019s kernel is first asked to create a new process, which is an environment in which a program executes.","source":"@site/docs/java-multithreading/process-and-thread.mdx","sourceDirName":"java-multithreading","slug":"/java-multithreading/process-and-thread","permalink":"/docs/java-multithreading/process-and-thread","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java-multithreading/process-and-thread.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Mutex, Semaphore, Monitor","permalink":"/docs/java-multithreading/mutex-semaphore-monitor"},"next":{"title":"types-of-computation","permalink":"/docs/java-multithreading/types-of-computation"}}');var r=n(6070),s=n(8637);const o={},i="Program",c={},l=[{value:"Serial execution",id:"serial-execution",level:2},{value:"Concurrent execution",id:"concurrent-execution",level:2},{value:"Parallel execution",id:"parallel-execution",level:2},{value:"Concurrency vs Parallelism",id:"concurrency-vs-parallelism",level:2}];function d(e){const t={h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"program",children:"Program"})}),"\n",(0,r.jsx)(t.p,{children:"A program is a set of instructions and associated data that resides on the disk and is loaded by the operating system to perform some task. An executable file or a python script file are examples of programs. In order to run a program, the operating system\u2019s kernel is first asked to create a new process, which is an environment in which a program executes."}),"\n",(0,r.jsx)(t.h1,{id:"process",children:"Process"}),"\n",(0,r.jsx)(t.p,{children:"A process is a program in execution. A process is an execution environment that consists of instructions, user-data, and system-data segments, as well as lots of other resources such as CPU, memory, address-space, disk and network I/O acquired at runtime. A program can have several copies of it running at the same time but a process necessarily belongs to only one program."}),"\n",(0,r.jsx)(t.h1,{id:"thread",children:"Thread"}),"\n",(0,r.jsx)(t.p,{children:"Thread is the smallest unit of execution in a process. A thread simply executes instructions serially.\nA process can have multiple threads running as part of it. Usually, there would be some state associated with the process that is shared among all the threads and in turn each thread would have some state private to itself. The globally shared state amongst the threads of a process is visible and accessible to all the threads, and special attention needs to be paid when any thread tries to read or write to this global shared state."}),"\n",(0,r.jsx)(t.h1,{id:"concurrency-and-parallelism",children:"Concurrency and Parallelism"}),"\n",(0,r.jsx)(t.h2,{id:"serial-execution",children:"Serial execution"}),"\n",(0,r.jsx)(t.p,{children:"When programs are serially executed, they are scheduled one at a time on the CPU. Once a task gets completed, the next one gets a chance to run. Each task is run from the beginning to the end without interruption."}),"\n",(0,r.jsx)(t.h2,{id:"concurrent-execution",children:"Concurrent execution"}),"\n",(0,r.jsx)(t.p,{children:"A concurrent program is one that can be decomposed into constituent parts and each part can be executed out of order or in partial order without affecting the final outcome.\nA system capable of running several distinct programs or more than one independent unit of the same program in overlapping time intervals is called a concurrent system.\nA concurrent system can have two programs in progress at the same time where progress doesn\u2019t imply execution. One program can be suspended while the other executes. Both programs are able to make progress as their execution is interleaved.\nIn concurrent systems, the goal is to maximize throughput and minimize latency. For example, a browser running on a single core machine has to be responsive to user clicks but also be able to render HTML on screen as quickly as possible. Concurrent systems achieve lower latency and higher throughput when programs running on the system require frequent network or disk I/O."}),"\n",(0,r.jsx)(t.p,{children:"The classic example of a concurrent system is that of an operating system running on a single core machine. Such an operating system is concurrent but not parallel. It can only process one task at any given point in time but all the tasks being managed by the operating system appear to make progress because the operating system is designed for concurrency. Each task gets a slice of the CPU time to execute and move forward."}),"\n",(0,r.jsx)(t.h2,{id:"parallel-execution",children:"Parallel execution"}),"\n",(0,r.jsx)(t.p,{children:"A parallel system is one which necessarily has the ability to execute multiple programs at the same time.\nUsually, this capability is aided by hardware in the form of multicore processors on individual machines or as computing clusters where several machines are hooked up to solve independent pieces of a problem simultaneously. Remember an individual problem has to be concurrent in nature, that is portions of it can be worked on independently without affecting the final outcome before it can be executed in parallel."}),"\n",(0,r.jsx)(t.h2,{id:"concurrency-vs-parallelism",children:"Concurrency vs Parallelism"}),"\n",(0,r.jsx)(t.p,{children:"concurrency is not necessarily parallelism, whereas a parallel system is indeed concurrent.\nAdditionally, a system can be both concurrent and parallel e.g. a multitasking operating system running on a multicore machine."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8637:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(758);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);