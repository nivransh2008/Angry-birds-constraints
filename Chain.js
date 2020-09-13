class Chain{
constructor(bodya,bodyb){

var options={
    bodyA:bodya, 
    bodyB:bodyb, 
    stiffness:0.04,
    length:10
}
this.chain= Matter.Constraint.create(options)
World.add(world,this.chain)

}

display(){
var bodiesa= this.chain.bodyA.position
var bodiesb = this.chain.bodyB.position 
strokeWeight(2)
line(bodiesa.x,bodiesa.y,bodiesb.x,bodiesb.y)

}



}