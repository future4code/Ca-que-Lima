```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  let salario = 2000
  const comissao = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05)
  return salario += comissao
}

```

```
function calculaPrecoTotal(quantidade) {
  if (quantidade < 12) {
    return quantidade * 1.3
  } else {
    return quantidade
  }
}
```