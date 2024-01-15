import{_ as V}from"./FormInputNumber.1a90f785.js";import{_ as k}from"./RemovableListItem.b4f76db5.js";import{_ as M}from"./Stats.eb4b5505.js";import{_ as $}from"./Share.6aba5fb6.js";import{u as j,_ as C}from"./useModelData.f512d420.js";import{k as R,b as h,e as u,w as b,F as y,f as e,o as _,j as g,c as S,u as o,t as n}from"./entry.109cc120.js";import"./FormInput.78c786b0.js";const B=e("h2",null,"Resultado",-1),E=e("h2",null,"Cálculo",-1),F={class:"steps steps-vertical"},N={class:"step"},Q={class:"step"},U={class:"step"},D=e("article",{class:"prose"},[e("h2",null,"Calculadora de Média Ponderada"),e("iframe",{allow:"clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:"",frameborder:"0",height:"315",src:"https://www.youtube.com/embed/nRxl0WUplf4",style:{"max-width":"100%"},title:"YouTube video player",width:"560"}),e("p",null,"A média ponderada é um cálculo que leva em consideração diferentes pesos para cada elemento do conjunto. É comumente utilizado para avaliar desempenho acadêmico, notas ou avaliações. Nossa calculadora online gratuita permite calcular facilmente a média ponderada de um conjunto de números, atribuindo os pesos correspondentes. Obtenha resultados precisos e tome decisões informadas."),e("p",null,"Para calcular a média ponderada, insira os valores e os respectivos pesos na nossa calculadora online. Você receberá o resultado imediatamente, facilitando suas análises e tomadas de decisão."),e("div",{itemscope:"",itemtype:"https://schema.org/FAQPage"},[e("div",{itemprop:"mainEntity",itemscope:"",itemtype:"https://schema.org/Question"},[e("h3",{itemprop:"name"},"Como calcular a média ponderada?"),e("div",{itemprop:"acceptedAnswer",itemscope:"",itemtype:"https://schema.org/Answer"},[e("p",{itemprop:"text"},"Para calcular a média ponderada, multiplique cada valor pelo seu peso correspondente, some os resultados e divida pela soma dos pesos. Por exemplo, para calcular a média ponderada de três notas com pesos 2, 3 e 4, multiplique a primeira nota por 2, a segunda por 3, a terceira por 4, some os resultados e divida pela soma dos pesos.")])]),e("div",{itemprop:"mainEntity",itemscope:"",itemtype:"https://schema.org/Question"},[e("h3",{itemprop:"name"},"Quando utilizar a média ponderada?"),e("div",{itemprop:"acceptedAnswer",itemscope:"",itemtype:"https://schema.org/Answer"},[e("p",{itemprop:"text"},"A média ponderada é utilizada quando se deseja atribuir diferentes pesos a elementos de um conjunto, levando em consideração sua importância relativa. É comumente aplicada em situações onde certos elementos têm maior relevância ou impacto na média final, como em cálculos de notas, avaliações ou desempenho acadêmico.")])]),e("div",{itemprop:"mainEntity",itemscope:"",itemtype:"https://schema.org/Question"},[e("h3",{itemprop:"name"},"Por que a média ponderada é importante?"),e("div",{itemprop:"acceptedAnswer",itemscope:"",itemtype:"https://schema.org/Answer"},[e("p",{itemprop:"text"},"A média ponderada é importante porque leva em consideração a relevância ou importância de cada elemento do conjunto, permitindo uma avaliação mais precisa e justa. Ao atribuir pesos diferentes, pode-se refletir a influência de certos elementos sobre o resultado final, fornecendo uma medida mais adequada em diversas situações, como avaliações acadêmicas, análises financeiras ou tomadas de decisão.")])])]),e("h3",null,"Referências"),e("ul",null,[e("li",null,[e("a",{href:"https://mundoeducacao.uol.com.br/matematica/media-ponderada.htm",target:"_blank"},"Média ponderada - Mundo Educação")]),e("li",null,[e("a",{href:"https://www.todamateria.com.br/media-ponderada/",target:"_blank"},"Média Ponderada - Toda Matéria")])])],-1),Y={__name:"media-ponderada",setup(z){const a=j({numeros:[void 0,void 0],pesos:[void 0,void 0]}),t=R({result:void 0,somaPesos:void 0,somaProdutos:void 0}),P=()=>{a.numeros.push(void 0),a.pesos.push(void 0)},A=r=>{a.numeros.splice(r,1),a.pesos.splice(r,1)},q=()=>{const r=[...a.numeros],m=[...a.pesos],d=m.reduce((p,c)=>p+c,0),f=r.reduce((p,c,l)=>p+c*m[l],0),v=f/d;t.result=v,t.somaPesos=d,t.somaProdutos=f},w=(r,m,d)=>{d==="numero"?a.numeros[m]=r:a.pesos[m]=r};return(r,m)=>{const d=V,f=k,v=M,p=$,c=C;return _(),h(y,null,[u(c,{calcular:q,title:"Calcule a média ponderada"},{form:b(()=>[(_(!0),h(y,null,g(o(a).numeros,(l,s)=>(_(),S(f,{key:s,index:s,onRemove:i=>A(s)},{default:b(()=>[u(d,{label:`Número ${s+1}`,"model-value":l,required:"",step:"any","onUpdate:modelValue":i=>w(i,s,"numero")},null,8,["label","model-value","onUpdate:modelValue"]),u(d,{label:`Peso ${s+1}`,"model-value":o(a).pesos[s],required:"",step:"any","onUpdate:modelValue":i=>w(i,s,"peso")},null,8,["label","model-value","onUpdate:modelValue"])]),_:2},1032,["index","onRemove"]))),128)),e("button",{class:"btn mt-6",type:"button",onClick:P},"Adicionar número")]),resultado:b(()=>{var l;return[B,u(v,{stats:[{title:"Média ponderada",value:(l=o(t).result)==null?void 0:l.toLocaleString("pt-BR",{maximumFractionDigits:2,useGroupping:!1})}]},null,8,["stats"]),u(p,{modelValue:o(a)},null,8,["modelValue"]),E,e("ul",F,[(_(!0),h(y,null,g(o(a).numeros,(s,i)=>(_(),h("li",{key:i,class:"step"},"Multiplique "+n(s)+" por seu peso "+n(o(a).pesos[i])+" = "+n(s*o(a).pesos[i]),1))),128)),e("li",N,"Some todos os resultados das multiplicações acima = "+n(o(t).somaProdutos),1),e("li",Q,"Some todos os pesos = "+n(o(t).somaPesos),1),e("li",U,"Divida o resultado da soma dos produtos pela soma dos pesos = "+n(o(t).somaProdutos)+" / "+n(o(t).somaPesos)+" = "+n(o(t).result),1)])]}),_:1}),D],64)}}};export{Y as default};
