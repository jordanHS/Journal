function Journal() {
    this.entries = []
}


// function Entry() {
//     this.body = "";
// }

var Entry = function(body) {
    this.body = body
}

Journal.prototype.getTeaser = function(body) {
    var sentences = body.split(". ");
    var words =  sentences[0].split(" ");
    for(i = 0; i < words.length; i++) {
        if(words.length > 7) {
            return words.slice(0, 8);
    } else {
            return words;
        }
    }
};


var Journal = new Journal();

//////////front end//////////////
$(document).ready(function(){


    $('form#FormOne').submit(function(event){
      event.preventDefault();
      var entry = $('input#entry').val();

      var NewEntry = new Entry(entry);


      var result = Journal.getTeaser(NewEntry.body);

      console.log(result);

    //   $('p#currentBalance').text(initialDeposit);
  
    });
    // $('form#funds').submit(function(event){
    //   event.preventDefault();
    //   add = $('input#deposit').val();
    //   $('p#currentBalance').text(account.deposit(add));
    //   initialDeposit = account.deposit(add);
    //   subtract = $('input#withdrawal').val();
    //   $('p#currentBalance').text(account.withdrawal(subtract));
    //   initialDeposit = account.withdrawal(subtract);
    // });
  });
