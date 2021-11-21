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
  // Examplos de máscaras js para campos comuns

  // Números

function numeros(v){

    // Remove os caracteres não numéricos
  
    v.value=v.value.replace(/\D/g,"");
  
  }
  // Data
  function data(v){
  
    v.value=v.value.replace(/\D/g,"");
  
    //Adiciona a barra entre o dia e o mês 
  
    v.value=v.value.replace(/^(\d{2})(\d)/,"$1/$2");
  
    //Adiciona a barra entre o mês e o ano
  
    v.value=v.value.replace(/(\d{2})(\d)/,"$1/$2");
  
  }
  //Telefone com DDD
  function telefone(v){
  
    v.value=v.value.replace(/\D/g,"");
  
    //Adiciona parênteses no DDD
  
    v.value=v.value.replace(/^(\d\d)(\d)/g,"($1) $2");
  
    //Adiciona hífen no número do telefone
  
    v.value=v.value.replace(/(\d{4})(\d)/,"$1-$2");
  
  }
  // CPF
  function cpf(v){
  
    v.value=v.value.replace(/\D/g,"");
  
    //Adiciona ponto após os três primeiros números
  
    v.value=v.value.replace(/^(\d{3})(\d)/,"$1.$2");
  
    //Adiciona ponto após os seis primeiros números
  
    v.value=v.value.replace(/(\d{3})(\d)/,"$1.$2");
  
    //Adiciona o hífen antes dos últimos 2 caracteres
  
    v.value=v.value.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
  
  }