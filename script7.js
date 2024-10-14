let carros_vendidos = parseInt(prompt("quantos carros vendidos ?"))
let valor_dasvendas = parseInt(prompt("digite o valor das vendas"))
let salario_fixo = parseInt(prompt("digite o salario fixo"))
let comissão = 0.5
let valor_por_carrovendido = parseInt(prompt("digite o valor por carro vendido"))
let total = carros_vendidos + (carros_vendidos + valor_dasvendas) + (salario_fixo + valor_por_carrovendido) + comissão
alert ("o salario final é:" + total)