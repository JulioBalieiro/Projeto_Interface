
    

window.onload = function () {

var botao = document.getElementById('moonbtn')



botao.addEventListener('click', function(){document.getElementById('mainly').style.backgroundColor = "#000222";

                                        document.getElementById('logo').src ='images/logo2.png';

                                        document.getElementById('logo').style.backgroundColor= "#000222";

                                        document.getElementById('logo_conti').style.backgroundColor = '#000222';

                                        document.getElementById('menos').style.color = '#f9f9f9';

                                        document.getElementById('menos').style.color = '#f9f9f9';

                                        document.getElementById('mais').style.color = '#f9f9f9';

                                        document.getElementById('display').style.color = '#f9f9f9';

                                        document.getElementById('lua branca').src = 'images/Sem título.png';

                                        document.getElementById('sol branco').src = 'images/sun--v2.png';

                                        document.getElementById('sol branco').src = 'images/sun--v2.png';

                                        document.getElementById('division').src = 'images/division_white.png'})

                                    

    var botao2 = document.getElementById('sunbtn')



botao2.addEventListener('click', function parar() {document.getElementById('mainly').style.backgroundColor = "#FFFFFF"; 

                                        document.getElementById('logo').src ='images/logo2preto.png';

                                        document.getElementById('logo').style.backgroundColor= "#F6B201";

                                        document.getElementById('logo_conti').style.backgroundColor = '#F6B201';

                                        document.getElementById('menos').style.color = '#000000';

                                        document.getElementById('menos').style.color = '#000000';

                                        document.getElementById('mais').style.color = '#000000';

                                        document.getElementById('display').style.color = '#000000';

                                        document.getElementById('lua branca').src = 'images/Sem título02.png';

                                        document.getElementById('sol branco').src = 'images/sun--v1.png';

                                        document.getElementById('sol branco').src = 'images/sun--v1.png';

                                        document.getElementById('division').src = 'images/unnamed.png' 



          

})



                                    

    var soma =document.getElementById('mais')                                             

   



    var counti =0 ;



    var count =0 ;





                                    







                soma.addEventListener('click',function Acrescentar() {



                    if (count<=25) {count++; 

                                            display.innerHTML = count+'°'

                        

                    }

                                             

                                            

                                        

                                        })



     

                                        

                                        

                                        

       var sub = document.getElementById('menos')                                 

                                        

     var action = sub.addEventListener('click', function diminuir(){



        if (count>0) {count--; 

                                            display.innerHTML = count+'°'

                        

                    }

                                             

                           



          })



if (count <= 0) { function parar(){

stop().count++

         display.inner.html = 0+'°'}}



if (count >= 35) { display.innerHTML = 35+'°'}

    



                

    }



                    



                          





                           









