function parimpar (n){
    if (n%2 == 0){
        return 'Par!'
    }else{
        return 'Impar!'
    }
}
console.log(parimpar(50)) // minha chamada e o 50 é o meu parametro




function soma (n1=0, n2=0){
    return n1 + n2
}
console.log(soma(1, 5))


let v = function(x){
    return x*5
}                                              //Uma variavel pode receber uma função 
console.log(v(50))



function fatorial(n){
    let fat = 1
    for(let c =n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))




//recursividade
function fatoriall (n){
    if( n==1){
        return 1
    }else {
        return n * fatoriall(n-1)
    }
}
console.log(fatoriall(5))