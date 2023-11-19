// Função para realizar a divisão
function realizarDivisao(numero1, numero2) {
    return numero1 / numero2;
  }
  
  // Bloco try para capturar exceções
  try {
    // Solicita dois números ao usuário
    let inputNumero1 = parseFloat(prompt("Digite o primeiro número:"));
    let inputNumero2 = parseFloat(prompt("Digite o primeiro número:"));
  
    // Verifica se a conversão foi bem-sucedida e se o divisor não é zero
    if (isNaN(numero1) || isNaN(numero2)) {
      throw new Error("Digite números válidos.");
    }
  
    if (numero2 === 0) {
      throw new Error("Não é possível dividir por zero.");
    }
  
    // Realiza a operação
    let resultado = realizarDivisao(numero1, numero2);
  
    // Exibe o resultado
    console.log("Resultado da divisão: " + resultado);
  } catch (erro) {
    console.erro("Ocorreu um erro: " + erro.message);
  } finally {
    console.log("Fim da operação");
  }