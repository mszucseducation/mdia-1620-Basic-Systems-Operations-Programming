function costcoMembership(name, paid) {

    if(paid == 60){
      console.log(`${name} you are a Gold Star Member`)
    }
    else if(paid == 120){
      console.log(`${name} you are an Executive Gold Star Member`)
    } else{
      console.log(`${name} you are not a member`)
    }
  }
  
  costcoMembership("Timmy", 60) //"Sarah you are a Gold Star Member"
  costcoMembership("John", 120) //"George you are an Executive Gold Star Member"
  costcoMembership("Akira", 0) //"Akira you are not a member"
