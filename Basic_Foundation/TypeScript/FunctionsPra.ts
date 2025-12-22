
 const Espresso= function(groundBeans:String,hotWater:String):void{

    console.log(`Main Required Items to make Espresso ${groundBeans},${hotWater}`)
    
    Americano(hotWater)

}
const Americano= function(hotWater:String):void{

    console.log(`Main Required Items to make Americano ${hotWater},Espresso shot`)

}
const ColdBrew =(coldWater:String,groundBeans:String):void=>{
    console.log(`Main Required Items to make ColdBrew ${coldWater},${groundBeans},sleepTime(12-24hrs)`)

}
const FilterCoffee=(groundBeans:String,milk:String):void=>{
    console.log(`Main Required Items to make FilterCoffee ${groundBeans},${milk}`)
}

const groundBeans:String="Ground Coffee or beans";
const hotWater:String="hot water";
const coldWater:String="cold water";
const milk:String="milk";


Espresso(groundBeans,hotWater)
ColdBrew(coldWater,groundBeans)
FilterCoffee(groundBeans,milk)
