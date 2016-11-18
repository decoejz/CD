  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC-Ngxicxj16-kw0LtX9li7KqNw2QRZfFg",
    authDomain: "projeto2cd2016.firebaseapp.com",
    databaseURL: "https://projeto2cd2016.firebaseio.com",
    storageBucket: "projeto2cd2016.appspot.com",
    messagingSenderId: "220347843257"
  };
  firebase.initializeApp(config);

  database = firebase.database();

  logs = this.database.ref('projeto2cd2016');

 function envia(tipo_evt, user_id_var, tempo_var, versao_var){
  this.logs.push(
  {
  user_id: user_id_var,
  tempo: tempo_var,
  versao: versao_var,
  tipo: tipo_evt
  }
  );
 }


function tempo_inicial(){
  // definir tempo inicial
  var d = Date.now();
  // enviar para Firebase
  envia("inicio", id_pessoa, d, versao);
}

function tempo_final(){
  // definir tempo inicial
  var d = Date.now();
  // enviar para Firebase
  envia("fim", id_pessoa, d, versao);
}