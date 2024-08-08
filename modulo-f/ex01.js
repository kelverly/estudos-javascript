let a = ['maça', 'banana', 'uva']
a[3]= 'laranja'                                 //Arrays e como adicionar um conteudo 
a.push('abacaxi')
console.log(a)
console.log(`Nosso array é ${a.length}`) //para saber quantas posições tem no array


let num = [1, 5, 2, 8, 9]
num.sort()   // dessa forma coloca em ordem crescente 
console.log(num)
console.log(`O valor tem ${num.length} posições`)
console.log(`O primeiro valor do array é ${num[0]}`)




let valores = [ 8, 5 , 2, 4, 1, 9]
for (let pos= 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)   // Forma melhor de apresentar o conteudo usando for 
}

//forma simples usando for de um jeito diferente 
for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}




let poss = num.indexOf(8)
console.log(`O valor 8 está na posição ${poss}`)
