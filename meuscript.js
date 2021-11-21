function soma(){
    var numero1 = parseInt(prompt("digite o primeiro número: "));
  
    var numero2 = parseInt(prompt("digite o segundo número: "));
  
    var soma = 0;
  
    soma = numero1 + numero2;
  
    return alert("A soma dos dois números é: "+soma);
  
  }

  function mostraSituacao(media){
      if(media >= 7){
          alert("Aprovado!");
      }
      else{
          alert("Reprovado!");
      }
  }

  function perguntaEndereco(){
      do{
          endereco = prompt("Insira o seu endereço: ");
          confirma = confirm("Seu endereço é " + enderco + "?");
      }while(!confirma);
      alert("A página será alterada...");
      document.write("Seu endereço é "+endereco+".");
  }

  function maiuscula(texto){

    texto.value = texto.value.toUpperCase();
  
  }
  function HabilitarCampo(opcao){

    if(opcao){
  
      document.formulario.nome.disabled = false;
  
    }
  
    else{
  
      document.formulario.nome.value = "";
  
      document.formulario.nome.disabled = true;
  
    }
  
  }

  function valida(){

    if(document.formularioBusca.busca.value == ""){
  
      alert("Preencha o campo BUSCA corretamente");
  
      document. formularioBusca.busca.focus();
  
      return false;
  
    }
  
    if(document.formularioBusca.busca.value.length < 3){
  
      alert("Informe pelo menos 3 letras!");
  
      document.formularioBusca.busca.focus();
  
      return false;
  
    }
  
    return true;
  
  }