(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4844:function(e,s,t){Promise.resolve().then(t.t.bind(t,4671,23)),Promise.resolve().then(t.bind(t,101)),Promise.resolve().then(t.bind(t,9296)),Promise.resolve().then(t.bind(t,5312)),Promise.resolve().then(t.t.bind(t,1930,23))},101:function(e,s,t){"use strict";t.d(s,{default:function(){return n}});var i=t(7437),l=t(6830),r=t.n(l);function n(){let e=e=>{let s=document.getElementById(e),t=document.querySelector("nav").offsetHeight;if(s){let e=s.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:e-t,behavior:"smooth"})}};return(0,i.jsx)("nav",{className:"fixed top-0 left-0 w-full",style:{zIndex:1010,borderBottom:"solid 2px #396D83"},children:(0,i.jsx)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8",style:{height:68},children:(0,i.jsxs)("div",{className:"flex justify-between h-16",children:[(0,i.jsx)("div",{className:"flex-shrink-0 flex items-center title",children:(0,i.jsx)("a",{className:"".concat(r().className," text-2xl font-bold"),style:{color:"#396D83",fontStyle:"italic"},children:"NP VISUALIZER"})}),(0,i.jsx)("div",{className:"hidden md:flex space-x-8",style:{cursor:"pointer"},children:(0,i.jsx)("a",{onClick:()=>e("projects"),className:"hover:text-gray-900 text-lg navItem",children:"I'm Confused"})})]})})})}},9296:function(e,s,t){"use strict";var i=t(2265);s.default=()=>((0,i.useEffect)(()=>{window.scrollTo(0,0)},[]),null)},5312:function(e,s,t){"use strict";t.d(s,{default:function(){return m}});var i=t(7437),l=t(2265),r=t(6648);function n(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"w-full h-full bg-white p-5",children:[(0,i.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"A Brief Intro to P vs. NP and the Significance"}),(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{className:"mb-2",children:[(0,i.jsx)("strong",{children:"NP"})," is a classification for a certain type of problem: the set of all ",(0,i.jsx)("span",{style:{backgroundColor:"#b6f0e7"},children:"decision problems"})," that can be ",(0,i.jsx)("span",{style:{backgroundColor:"#b6f0e7"},children:"verified"})," in polynomial time or better, but cannot be solved in polynomial time or better. In other words, problems that do not have a solution better than brute-force."]}),(0,i.jsxs)("p",{className:"mb-2",children:["On the other hand, ",(0,i.jsx)("strong",{children:"P"})," is the set of all decision problems that can be ",(0,i.jsx)("span",{style:{backgroundColor:"#b6f0e7"},children:"solved"})," in polynomial time or better."]}),(0,i.jsxs)("p",{className:"mb-2",style:{textAlign:"center",fontSize:26},children:[(0,i.jsx)("strong",{children:"Is P = NP?"}),(0,i.jsx)("br",{})]}),(0,i.jsxs)("p",{className:"mb-2",style:{textAlign:"center"},children:["This is considered to be one of the most important questions in computer science!",(0,i.jsx)("br",{}),"We still don't know the answer."]}),(0,i.jsx)("div",{className:"w-full flex items-center justify-center",children:(0,i.jsx)("img",{src:"${process.env.NEXT_PUBLIC_BASE_PATH}/p-np.svg",width:400,height:300,className:"hidden md:block",alt:"Is P = NP?",style:{width:"auto",height:"auto"}})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Significance and Open Questions"}),(0,i.jsx)("p",{className:"mb-2",children:"NP problems are significant in computer science because they include many problems that are critical in various fields such as cryptography, scheduling, and optimization. The relationship between NP problems and another class called P (problems that can be solved in polynomial time) is a central question in computational complexity theory."}),(0,i.jsxs)("p",{className:"mb-2",children:['The famous open question, "Does P equal NP?" asks whether every problem for which a solution can be quickly verified can also be quickly solved. ',(0,i.jsx)("strong",{children:"This question remains one of the most important unsolved problems in computer science."})]})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Key Terms"}),(0,i.jsxs)("p",{className:"mb-2",children:[(0,i.jsx)("strong",{children:"Decision Problem:"})," A problem with a yes or no answer."]}),(0,i.jsxs)("p",{className:"mb-2",children:[(0,i.jsx)("strong",{children:"Verification:"}),' The process of checking whether a given solution to a decision problem results in a "yes" result or a "no" result.']}),(0,i.jsxs)("div",{className:"mt-8",children:[(0,i.jsx)("p",{style:{marginTop:-10,marginBottom:24},children:"Famous examples of NP problems include 3SAT, vertex cover, clique, traveling salesperson (TSP), independent set, Hamiltonian path, and Hamiltonian cycle."}),(0,i.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Polynomial-Time Mapping Reductions"}),(0,i.jsx)("p",{className:"mb-2",children:(0,i.jsx)("span",{style:{color:"blue"},children:(0,i.jsx)("a",{href:"https://eecs376.github.io/notes/complexity.html#polynomial-time-mapping-reductions",target:"_blank",rel:"noopener noreferrer",children:"More detailed notes available here"})})}),(0,i.jsxs)("p",{className:"mb-2",children:["One method used in proving that a prolem is in NP is to construct a method of mapping instances of one NP problem to another. The reduction is successful if we can always map an arbitrary yes instance of one problem to a yes instance of the problem we're trying to prove is in NP, and likewise for false instances.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"For example, the reduction from 3SAT to vertex cover could be depicted as:"]}),(0,i.jsx)("div",{className:"flex items-center justify-center mt-8",children:(0,i.jsx)(r.default,{src:"/mapping.svg",width:500,height:300,className:"hidden md:block",alt:"Polynomial-time mapping reduction image",style:{width:"auto",height:"auto"}})})]})]})]})]})})}function a(){return(0,i.jsxs)("div",{className:"w-full h-full bg-white p-5",children:[(0,i.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"3-Satisfiability"}),(0,i.jsx)("p",{className:"mb-2",children:(0,i.jsx)("span",{style:{color:"blue"},children:(0,i.jsx)("a",{href:"https://eecs376.github.io/notes/complexity.html#sat",target:"_blank",rel:"noopener noreferrer",children:"More detailed notes available here"})})}),(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{className:"mb-2",children:["The ",(0,i.jsx)("strong",{children:"3-SAT"})," problem, also known as the 3-Satisfiability problem, is a specific case of the more general ",(0,i.jsx)("span",{style:{backgroundColor:"#b6f0e7"},children:"Boolean satisfiability"})," problem (SAT). SAT involves determining whether there exists an assignment of truth values to variables that makes a given Boolean formula true. In the case of 3SAT, the Boolean formula is expressed in a specific format called ",(0,i.jsx)("span",{style:{backgroundColor:"#b6f0e7"},children:"Conjunctive Normal Form (CNF)"}),", where each clause contains exactly three literals."]}),(0,i.jsx)("p",{className:"mb-2",children:"A Boolean formula in CNF is a conjunction (AND) of one or more clauses, where each clause is a disjunction (OR) of literals. A literal is either a variable or its negation. For example:"}),(0,i.jsx)("div",{className:"w-full flex items-center justify-center mb-6",children:(0,i.jsx)(r.default,{src:"/formula.png",width:250,height:200,className:"hidden md:block",alt:"3SAT example image"})}),(0,i.jsx)("p",{className:"mb-2",children:"is an example of a 3-SAT instance, with 5 variables and 2 clauses."}),(0,i.jsx)("div",{children:(0,i.jsxs)("p",{className:"mb-2",children:["3SAT's NP-complete status was established as part of a seminal result by Stephen Cook in 1971, known as ",(0,i.jsx)("span",{style:{backgroundColor:"#b6f0e7"},children:"Cook's Theorem"}),". This theorem demonstrated that the general SAT problem is NP-complete, and subsequent research showed that even the restricted version, 3SAT, retains this complexity. Understanding 3SAT and its implications helps in grasping the broader challenges of computational complexity and the limits of efficient computation, making it a fundamental concept in theoretical computer science."]})})]}),(0,i.jsxs)("div",{style:{marginLeft:50},children:[(0,i.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Characteristics"}),(0,i.jsxs)("p",{className:"mb-2",children:[(0,i.jsx)("strong",{children:"n"})," variables",(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"m"})," clauses",(0,i.jsx)("br",{}),"OR: ",(0,i.jsx)("strong",{children:"⋁"}),(0,i.jsx)("br",{}),"AND: ",(0,i.jsx)("strong",{children:"⋀"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Negation is indicated with the horizontal bar"]})]}),(0,i.jsx)("div",{className:"mt-8",style:{height:80}})]})]})}function o(){return(0,i.jsxs)("div",{className:"w-full h-full bg-white p-5",children:[(0,i.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Vertex Cover"}),(0,i.jsx)("p",{className:"mb-2",children:(0,i.jsx)("span",{style:{color:"blue"},children:(0,i.jsx)("a",{href:"https://eecs376.github.io/notes/complexity.html#vertex-cover",target:"_blank",rel:"noopener noreferrer",children:"More detailed notes available here"})})}),(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{className:"mb-2",children:["A ",(0,i.jsx)("strong",{children:"vertex cover"})," of a graph is a set of vertices such that each edge of the graph is incident to at least one vertex from this set. In other words, a vertex cover ",(0,i.jsx)("span",{style:{backgroundColor:"#b6f0e7"},children:'"covers" all the edges'})," of the graph. The problem is typically presented as follows: given a graph, find the smallest possible set of vertices that constitutes a vertex cover."]}),(0,i.jsx)("p",{className:"mb-2",children:"Consider this example below. We have a graph, and we are wondering if it's possible to produce a vertex cover that's size 3 or less."}),(0,i.jsx)("div",{className:"w-full flex items-center justify-center mb-6",children:(0,i.jsx)(r.default,{src:"/vertex-cover.svg",width:300,height:200,className:"hidden md:block",alt:"Vertex cover example image"})}),(0,i.jsx)("p",{className:"mb-2",children:"The red circled vertices indicate the vertices that would be a part of our subset."}),(0,i.jsx)("div",{children:(0,i.jsx)("p",{className:"mb-2",children:"Despite its complexity, the Vertex Cover problem has practical applications in various fields such as network security, bioinformatics, and logistics. For instance, in network security, a vertex cover can represent a set of crucial monitoring nodes in a network to ensure all communications are observed. While finding an exact solution is computationally challenging, there are approximation algorithms and heuristics that can provide good enough solutions in reasonable time for practical purposes."})})]}),(0,i.jsxs)("div",{style:{marginLeft:50},children:[(0,i.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Characteristics"}),(0,i.jsxs)("p",{className:"mb-2",children:["Graph ",(0,i.jsx)("strong",{children:"G=(V,E)"}),(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"V"})," vertices",(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"E"})," edges",(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"k"})," = budget"]})]}),(0,i.jsx)("div",{className:"mt-8",style:{height:80}})]})]})}function c(){return(0,i.jsxs)("div",{className:"w-full h-full bg-white p-5",children:[(0,i.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Clique"}),(0,i.jsx)("p",{className:"mb-2",children:(0,i.jsx)("span",{style:{color:"blue"},children:(0,i.jsx)("a",{href:"https://eecs376.github.io/notes/complexity.html#clique",target:"_blank",rel:"noopener noreferrer",children:"More detailed notes available here"})})}),(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{className:"mb-2",children:["The ",(0,i.jsx)("strong",{children:"clique"})," problem is an NP-complete problem in graph theory. Given a graph G=(V,E) and a positive integer k, the problem asks whether there exists a subset of k vertices such that every pair of vertices in the subset is connected by an edge. In other words, a clique is a ",(0,i.jsx)("span",{style:{backgroundColor:"#b6f0e7"},children:"fully connected subgraph"})," of size k where every vertex is adjacent to every other vertex."]}),(0,i.jsx)("p",{className:"mb-2",children:"Consider this example below. We are given a graph with 8 vertices, with a budget of k = 4:"}),(0,i.jsx)("div",{className:"w-full flex items-center justify-center mb-6",children:(0,i.jsx)(r.default,{src:"/clique.svg",width:300,height:200,className:"hidden md:block",alt:"Clique example image"})}),(0,i.jsx)("p",{className:"mb-2",children:"The red edges show a k-sized clique that exists within the graph."}),(0,i.jsx)("div",{children:(0,i.jsx)("p",{className:"mb-2",children:"The clique problem has practical applications across various fields. For example, in social network analysis, cliques can be used to identify tightly-knit communities. In data mining, the problem can be used for clustering highly correlated or similar items, such as in market basket analysis or recommendation systems. Additionally, in computational chemistry, cliques can be used to detect specific molecular structures with defined bonding pattern during chemical compound analysis."})})]}),(0,i.jsxs)("div",{style:{marginLeft:50},children:[(0,i.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Characteristics"}),(0,i.jsxs)("p",{className:"mb-2",children:["Graph ",(0,i.jsx)("strong",{children:"G=(V,E)"}),(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"V"})," vertices",(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"E"})," edges",(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"k"})," = budget"]})]}),(0,i.jsx)("div",{className:"mt-8",style:{height:80}})]})]})}function h(){return(0,i.jsxs)("div",{className:"w-full h-full bg-white p-5",children:[(0,i.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Set Cover"}),(0,i.jsx)("p",{className:"mb-2",children:(0,i.jsx)("span",{style:{color:"blue"},children:(0,i.jsx)("a",{href:"https://eecs376.github.io/notes/complexity.html#set-cover",target:"_blank",rel:"noopener noreferrer",children:"More detailed notes available here"})})}),(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{className:"mb-2",children:["A ",(0,i.jsx)("strong",{children:"set cover"})," instance is made up of a universal set ",(0,i.jsx)("strong",{children:"U"})," and a collection of ",(0,i.jsx)("strong",{children:"n"})," subsets of U: ",(0,i.jsxs)("strong",{children:["S",(0,i.jsx)("sub",{children:"1"}),", ... S",(0,i.jsx)("sub",{children:"n"})]}),". The problem asks whether it is possible to ",(0,i.jsxs)("span",{style:{backgroundColor:"#b6f0e7"},children:["select ",(0,i.jsx)("strong",{children:"k"})," subsets from S whose union equals U"]}),". In other words, the goal is to cover all elements of the universal set in k subsets."]}),(0,i.jsx)("p",{className:"mb-2",children:"Consider this example below. We have U's elements as the natural numbers from 1 through 7, and 6 subsets:"}),(0,i.jsx)("div",{className:"w-full flex items-center justify-center mb-6",children:(0,i.jsx)(r.default,{src:"/set-cover.svg",width:300,height:200,className:"hidden md:block",alt:"Set cover example image"})}),(0,i.jsx)("p",{className:"mb-2",children:"The highlighted subsets indicate a set cover of size k that would cover all the elements in U."}),(0,i.jsx)("div",{children:(0,i.jsx)("p",{className:"mb-2",children:"Set cover has useful applications in network design, resource allocation, data compression, scheduling, and logistics. It can also be applied to genome sequencing and improve the efficiency of drug design."})})]}),(0,i.jsxs)("div",{style:{marginLeft:50},children:[(0,i.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Characteristics"}),(0,i.jsxs)("p",{className:"mb-2",children:["Universal set ",(0,i.jsx)("strong",{children:"U"}),(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"n"})," subsets of U",(0,i.jsx)("br",{}),(0,i.jsx)("strong",{children:"k"})," = budget"]})]}),(0,i.jsx)("div",{className:"mt-8",style:{height:80}})]})]})}function d(){return(0,i.jsxs)("div",{className:"w-full h-full bg-white p-5",children:[(0,i.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"About This Site"}),(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,i.jsx)("div",{children:(0,i.jsxs)("p",{className:"mb-2",children:["This resource was created with the intention of helping others understand the process of converting an instance of one NP-complete problem into an instance of another NP-complete problem.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"It is by no means a complete and mathematically rigorous proof of the NP-complete problems shown. Rather, users can play around with the inputs and observe the different reductions. Through the step-by-step walkthroughs, hopefully this resource can help to make rather abstract reductions have more concrete significance.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"The content of this visualizer is adapted from the course\xa0",(0,i.jsx)("span",{style:{color:"blue"},children:(0,i.jsx)("a",{href:"https://eecs376.org/",children:"EECS 376: Foundations of Computer Science"})}),", at the University of Michigan –\xa0Ann Arbor.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]})}),(0,i.jsxs)("div",{style:{marginLeft:50},children:[(0,i.jsx)("h2",{className:"text-xl font-semibold mb-2",children:"Contact"}),(0,i.jsxs)("p",{className:"mb-2",children:["If you have questions, suggestions for improvement, notice any errors, or want to reach out to the creator, please email:\xa0",(0,i.jsx)("span",{style:{color:"blue"},children:(0,i.jsx)("a",{href:"mailto:rinnyfan@umich.edu",children:"rinnyfan@umich.edu"})})]})]}),(0,i.jsx)("div",{className:"mt-8",style:{height:80}})]})]})}function m(){let[e,s]=(0,l.useState)("Tab1"),t=e=>{s(e)};return(0,i.jsx)("div",{className:"w-full",style:{height:300,backgroundColor:"#EAF1F2"},children:(0,i.jsxs)("div",{className:"p-4",children:[(0,i.jsxs)("div",{className:"flex border-b",children:[(0,i.jsx)("button",{className:"py-2 px-4 ".concat("Tab1"===e?"border-b-2 border-blue-500 bg-white":""),onClick:()=>t("Tab1"),children:"NP Problems"}),(0,i.jsx)("button",{className:"py-2 px-4 ".concat("Tab2"===e?"border-b-2 border-blue-500 bg-white":""),onClick:()=>t("Tab2"),children:"3-SAT"}),(0,i.jsx)("button",{className:"py-2 px-4 ".concat("Tab3"===e?"border-b-2 border-blue-500 bg-white":""),onClick:()=>t("Tab3"),children:"Vertex Cover"}),(0,i.jsx)("button",{className:"py-2 px-4 ".concat("Tab4"===e?"border-b-2 border-blue-500 bg-white":""),onClick:()=>t("Tab4"),children:"Clique"}),(0,i.jsx)("button",{className:"py-2 px-4 ".concat("Tab5"===e?"border-b-2 border-blue-500 bg-white":""),onClick:()=>t("Tab5"),children:"Set Cover"}),(0,i.jsx)("button",{className:"py-2 px-4 ".concat("Tab6"===e?"border-b-2 border-blue-500 bg-white":""),onClick:()=>t("Tab6"),children:"About"})]}),(0,i.jsxs)("div",{className:"mt-4",children:["Tab1"===e&&(0,i.jsx)(n,{}),"Tab2"===e&&(0,i.jsx)(a,{}),"Tab3"===e&&(0,i.jsx)(o,{}),"Tab4"===e&&(0,i.jsx)(c,{}),"Tab5"===e&&(0,i.jsx)(h,{}),"Tab6"===e&&(0,i.jsx)(d,{})]})]})})}},1930:function(){},4671:function(e){e.exports={style:{fontFamily:"'__Inter_97762d', '__Inter_Fallback_97762d'",fontStyle:"normal"},className:"__className_97762d"}}},function(e){e.O(0,[959,813,606,83,971,23,744],function(){return e(e.s=4844)}),_N_E=e.O()}]);