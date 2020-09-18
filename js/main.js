function calcular(tipo, valor) {
  if (tipo === 'acao') {

    if (valor === 'c') {
      document.getElementById('resultado').value = ''
    }

    if (valor === '/' || valor === '*' || valor === '-' || valor === '+') {
      document.getElementById('resultado').value += valor
    }

    if (valor === '=') {
      var resultado_campo = eval(document.getElementById('resultado').value)

      document.getElementById('resultado').value = resultado_campo
    }

    if (valor === '.') {
      document.getElementById('resultado').value += valor
    }
      
  } else if (tipo === 'valor') {
    document.getElementById('resultado').value += valor
    } 
  }