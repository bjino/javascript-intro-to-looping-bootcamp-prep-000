
function whileLoop(n){

   while(n>0)
     console.log(n--);
   return "done";
}


function forLoop(arr){

   for(var i=0; i<25; i++){

      if(i==1)
         arr.push("I am 1 strange loop.");
      else
         arr.push("I am ${i} strange loops.");

   }

   return arr;
}



function doWhileLoop(arr){
   function maybeTrue() {
     return Math.random() >= 0.5
   }


   do{arr.pop()
   } while(maybeTrue() && arr.length>0);

 return arr;
}
