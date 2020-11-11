class Tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.TreeWidth=450;
		this.TreeHeight=600;
		this.wallThickness=10;
		
		this.image=loadImage("sprites/tree.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.TreeWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(0, this.y-this.TreeHeight/2, this.wallThickness, this.TreeHeight, {isStatic:false})
		this.rightWallBody=Bodies.rectangle(this.x+this.TreeWidth/2, this.y-this.TreeHeight/2, this.wallThickness, this.TreeHeight, {isStatic:false})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.TreeHeight/2,this.TreeWidth, this.TreeHeight)
			pop()
			
	}

}