interface Information{
    id:number,
    name:string
}

interface Organizer extends Information{
    display():void
}

interface MyEvent extends Information{
    description:string,
    startTime:Date,
    endTime:Date,
    display():void
}

interface Venue extends Information{
    description:string,
    address:string,
    display():void
}

class Organizer implements Organizer{
    id:number;
    name:string;
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    display(){
        console.log(this.name);
    }
}

class MyEvent implements MyEvent{
    id:number;
    name:string;
    description:string;
    startTime:Date;
    endTime:Date;
    constructor(id:number,name:string,description:string,startTime:Date,endTime:Date){
        this.id=id;
        this.name=name;
        this.description=description;
        this.startTime=startTime;
        this.endTime=endTime;
    }
    display(){
        console.log(this.name);
    }
}

class Venue implements Venue{
    id:number;
    name:string;
    description:string;
    address:string;
    constructor(id:number,name:string,description:string,address:string){
        this.id=id;
        this.name=name;
        this.description=description;
        this.address=address;
    }
    display(){
        console.log(this.name);
    }
}


const organizer=new Organizer(1,'Rajesh');
const myEvent=new MyEvent(2,'Birthday','Birthday party',new Date(),new Date());
const venue=new Venue(3,'Venue','Venue description','Address');

organizer.display();
myEvent.display();
venue.display();