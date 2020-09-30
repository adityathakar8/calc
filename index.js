 function insert(num){
   document.form.disp.value= document.form.disp.value+ num;
 }

function clean() {
  document.form.disp.value="";

}

function equal(){
  var exp = document.form.disp.value;
  if (exp){
    document.form.disp.value= eval(exp);

  }
}
