var borrar = false;

function eliminarCarac() {
   var caja2 = document.getElementById("valores2").value;
   if (caja2 == "" || caja2 == "0" || caja2.length == 1) {
      document.getElementById("valores2").value = "0";
   }
   else if (caja2 != "") {
      var res = caja2.substring(0, caja2.length - 1);
      document.getElementById("valores2").value = res;
   }
}

function escribir(num) {
   var caja2 = document.getElementById("valores2").value;
   if (borrar == true) {
      document.getElementById("valores2").value = "";
      borrar = false;
      document.getElementById("valores2").value = num;
   }
   else if (caja2 == "0" && num != ".") {
      caja = caja2.replace("0", "")
      document.getElementById("valores2").value = caja + num;
   }
   else {
      document.getElementById("valores2").value = caja2 + num;
   }
}

function raiz() {
   var caja1 = document.getElementById("valores1").value;
   var caja2 = document.getElementById("valores2").value;
   document.getElementById("valores1").value = "Math.sqrt(" + caja2 + caja1 + ")";
   document.getElementById("valores2").value = "";
}

function calcular() {
   var caja1 = document.getElementById("valores1").value;
   var caja2 = document.getElementById("valores2").value;
   document.getElementById("valores2").value = eval(caja1 + caja2);
   document.getElementById("valores1").value = "";
   borrar = true;
}






















function arit(o) {
   var caja1 = document.f1.txtcaja1.value;
   var caja2 = document.f1.txtcaja2.value;
   var unum = caja1.substring(caja1.length - 1);
   calcular()
   if (unum == "+" || unum == "-" || unum == "*" || unum == "/") {
      unum = unum.replace(unum, o);
      var res = caja1.substring(0, caja1.length - 1);
      document.f1.txtcaja1.value = res + unum;
   }
   if (caja1 == "" && caja2 != "") {
      document.f1.txtcaja1.value = caja2 + o;
   }
   else {
      document.f1.txtcaja1.value = caja1 + caja2 + o;
   }
   borrar = true;
}

function masmenos() {
   var caja2 = document.f1.txtcaja2.value;
   if (caja2 > 0) {
      document.f1.txtcaja2.value = "(-" + caja2 + ")";
   }
   else {
      cajaplus = caja2.replace(/[-|(|)]/g, "");
      document.f1.txtcaja2.value = cajaplus;
   }
}