import{_}from"./FormInput.78c786b0.js";import{_ as v}from"./Stats.eb4b5505.js";import{_ as q}from"./Share.6aba5fb6.js";import{u as b,_ as V}from"./useModelData.f512d420.js";import{r as D,a as g,b as h,e as t,w as m,F as M,f as r,o as w,u as s}from"./entry.109cc120.js";const x=r("article",{class:"prose"},[r("h2",null,"Calculadora de datas"),r("p",null,"Você já precisou saber quantos dias se passaram entre duas datas ou quantos dias faltam para um evento importante? Se sim, você sabe que nem sempre é fácil fazer esse cálculo mentalmente ou usando um calendário. Você pode se confundir com os meses com diferentes números de dias ou as mudanças de horário. Além disso, você pode querer saber o resultado em outras unidades de tempo, como semanas, meses ou anos. Por isso, neste site você encontra uma calculadora de diferença entre datas que pode te ajudar a obter essa informação rapidamente e com precisão."),r("p",null,"A calculadora de diferença entre datas é uma das calculadoras gratuitas e informativas que este site oferece. Ela faz parte da categoria de datas, que também inclui outras calculadoras como adicionar dias em uma data e remover dias em uma data. Para usar a calculadora de diferença entre datas, basta inserir as duas datas que você quer comparar e obter o resultado em segundos. O resultado aparece em dias, semanas, meses e anos, para facilitar a sua compreensão."),r("p",null,"Essa calculadora pode ser útil para vários propósitos, como planejar viagens, organizar eventos, controlar prazos, calcular idades, contar aniversários e muito mais. Você pode usar essa calculadora para saber quantos dias faltam para o seu próximo aniversário, quantos meses se passaram desde o seu casamento, quantas semanas você tem até a sua formatura ou quantos anos você tem em relação a outra pessoa. ")],-1),E={__name:"diferenca-entre-datas",setup(z){const a=b({data1:void 0,data2:void 0}),o=D(null),i=function(){const u=new Date(a.data1),e=new Date(a.data2),n=Math.abs(u.getTime()-e.getTime()),l=Math.ceil(n/(1e3*3600*24));o.value=l},c=g(()=>[{title:"Diferença em dias",value:o.value+" dias"},{title:"Diferença em meses",value:Math.ceil(o.value/30)+" meses"},{title:"Diferença em semanas",value:Math.ceil(o.value/7)+" semanas"},{title:"Diferença em anos",value:Math.ceil(o.value/365)+" anos"}]);return(u,e)=>{const n=_,l=v,p=q,f=V;return w(),h(M,null,[t(f,{calcular:i,title:"Calcule a diferença entre datas"},{form:m(()=>[t(n,{type:"date",label:"Data 1",modelValue:s(a).data1,"onUpdate:modelValue":e[0]||(e[0]=d=>s(a).data1=d),required:""},null,8,["modelValue"]),t(n,{type:"date",label:"Data 2",modelValue:s(a).data2,"onUpdate:modelValue":e[1]||(e[1]=d=>s(a).data2=d),required:""},null,8,["modelValue"])]),resultado:m(()=>[t(l,{stats:s(c)},null,8,["stats"]),t(p,{"model-value":s(a)},null,8,["model-value"])]),_:1}),x],64)}}};export{E as default};
