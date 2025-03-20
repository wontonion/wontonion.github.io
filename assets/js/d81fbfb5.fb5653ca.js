"use strict";(self.webpackChunktestpro=self.webpackChunktestpro||[]).push([[7261],{2392:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(758);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}},3206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"java-multithreading/java-multithread-keyword","title":"java-multithread-keyword","description":"Java sychronoused lock uses mesa style.","source":"@site/docs/java-multithreading/java-multithread-keyword.mdx","sourceDirName":"java-multithreading","slug":"/java-multithreading/java-multithread-keyword","permalink":"/docs/java-multithreading/java-multithread-keyword","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java-multithreading/java-multithread-keyword.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Multithreading in Java","permalink":"/docs/category/multithreading-in-java"},"next":{"title":"Preemptive multitasking","permalink":"/docs/java-multithreading/multitasking-model"}}');var a=n(6070),s=n(2392);const i={},o=void 0,d={},u=[];function l(e){const t={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Java ",(0,a.jsx)(t.code,{children:"sychronoused"})," lock uses mesa style."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-Java",children:'class Demonstration {\n\n    public static void main(String args[]) throws InterruptedException {\n        InterruptExample.example();\n    }\n}\n\nclass InterruptExample {\n\n    static public void example() throws InterruptedException {\n\n        final Thread sleepyThread = new Thread(new Runnable() {\n\n            public void run() {\n                try {\n                    System.out.println("I am too sleepy... Let me sleep for an hour.");\n                    Thread.sleep(1000 * 60 * 60);\n                } catch (InterruptedException ie) {\n                    System.out.println("The interrupt flag is cleard : " + Thread.interrupted() + " " + Thread.currentThread().isInterrupted());                  \n                    Thread.currentThread().interrupt();\n                    System.out.println("Oh someone woke me up ! ");\n                    System.out.println("The interrupt flag is set now : " + Thread.currentThread().isInterrupted() + " " + Thread.interrupted());                                    \n                  \n                }\n            }\n        });\n\n        sleepyThread.start();\n\n        System.out.println("About to wake up the sleepy thread ...");\n        sleepyThread.interrupt();\n        System.out.println("Woke up sleepy thread ...");\n\n        sleepyThread.join();\n    }\n}\n\n'})}),"\n",(0,a.jsxs)(t.p,{children:["two method to exmaine the interrupt status of a thread, ",(0,a.jsx)(t.code,{children:"Thread.interrupted()"})," and ",(0,a.jsx)(t.code,{children:"Thread.currentThread().isInterrupted()"}),". The former will clear the interrupt status of the thread, but the latter won't."]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}}}]);