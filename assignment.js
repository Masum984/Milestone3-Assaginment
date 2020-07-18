      // feetToMile
    function feetToMile(feet){
        var mile = feet / 5280;
        return mile;
        }
        var result = feetToMile(132000);
        console.log(result);



    //   woodCalculator
  function woodCalculator(chair, table, bed){
        var chairCount = chair * 1;
        var tableCount = table * 3;
        var bedCount   = bed   * 5;
        var totalwood  = chair + table + bed;

        return totalwood;
    }
        var woodresult = woodCalculator(14, 5, 12);
        console.log(woodresult);



        //    tinyFriend
   function tinyFriend(friends){
     
         var tiny = friends[0];
     for(var i = 0; i < friends.lenght; i++){
        var currentfriend = friends[i];
        if(currentfriend.lenght <= tiny.lenght){
          tiny = currentfriend;
       }

     }
     return tiny;
   }
  var tinyboy = tinyFriend([ 'MasumBillah','sumon', 'Umayma', 'kaku']);
  console.log(tinyboy);



  