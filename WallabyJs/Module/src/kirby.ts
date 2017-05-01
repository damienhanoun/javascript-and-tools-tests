export default class Kirby {
  constructor(isDevil:boolean){
    if(isDevil)
      throw Error("Kirby can't be devil!");
    else
        console.log("EveryThing is fine");
  }
}
