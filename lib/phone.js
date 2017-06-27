function Phone(phoneNumber){
  this.phoneNumber=phoneNumber;
  Phone.prototype.callPhone=function(phoneNumber){
    console.log(this.phoneNumber +""+phoneNumber);

  };
}


module.exports=Phone;