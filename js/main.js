function calcular(tipo, valor) {
  if (tipo === 'acao') {

    if (valor === 'c') {
      document.getElementById('resultado').value = ''
    }

    if (valor === '/' || valor === '*' || valor === '-' || valor === '+') {
      let operador = document.getElementById('resultado').value
      if(operador.includes('/') || operador.includes('*') || operador.includes('+')) {
        return document.getElementById('resultado').value
      }
      document.getElementById('resultado').value += valor
    }

    if (valor === '=') {
      var resultado_campo = eval(document.getElementById('resultado').value)

      // caso o campo esteja vazio
      if (resultado_campo == undefined) {
        document.getElementById('resultado').value = 'Erro!'
        alert('Digite dois número para poder realizar o calculo')
        document.getElementById('resultado').value = ''
      } else {
        document.getElementById('resultado').value = resultado_campo
      }
    }
    
    if (valor === '.') {
      document.getElementById('resultado').value += valor      
    }
      
  } else if (tipo === 'valor') {
    document.getElementById('resultado').value += valor
    } 
  }