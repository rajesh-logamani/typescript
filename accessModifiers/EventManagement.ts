class Organizer{
    private _id:number;
    private _name:string;
    private static instance:Organizer;

    /**
     * This method is used to get the instance of the Organizer class.
     * The instance is created only if it does not exist.
     * @returns {Organizer} The instance of the Organizer class.
     */
    static getInstance():Organizer{
        if(!Organizer.instance){
            Organizer.instance=new Organizer(1,'Rajesh');
        }
        return Organizer.instance;
    }

    constructor(id:number,name:string){
        this._id=id;
        this._name=name;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get name():string{
        return this._name;
    }

    set name(name:string){
        this._name=name;
    }
}

class MyEvent{
    private _id:number;
    private _name:string;
    private _description:string;
    private _startTime:Date;
    private _endTime:Date;
    constructor(id:number,name:string,description:string,startTime:Date,endTime:Date){
        this._id=id;
        this._name=name;
        this._description=description;
        this._startTime=startTime;
        this._endTime=endTime;
    }

    get id():number{
        return this._id;
    }

    set id(id:number){
        this._id=id;
    }

    get name():string{
        return this._name;
    }

    set name(name:string){
        this._name=name;
    }

    get description():string{
        return this._description;
    }

    set description(description:string){
        this._description=description;
    }

    get startTime():Date{
        return this._startTime;
    }

    set startTime(startTime:Date){
        this._startTime=startTime;
    }

    get endTime():Date{
        return this._endTime;
    }

    set endTime(endTime:Date){
        this._endTime=endTime;
    }
}

class Venue{
    private _id:number;
    private _name:string;
    private _description:string;
    private _address:string;
    constructor(id:number,name:string,description:string,address:string){
        this._id=id;
        this._name=name;
        this._description=description;
        this._address=address;
    }

    get id():number{
        return this._id;
    }

    set id(id:number){
        this._id=id;
    }

    get name():string{
        return this._name;
    }

    set name(name:string){
        this._name=name;
    }

    get description():string{
        return this._description;
    }

    set description(description:string){
        this._description=description;
    }

    get address():string{
        return this._address;
    }

    set address(address:string){
        this._address=address;
    }
}

const organizer = new Organizer(1,'Rajesh');
console.log(organizer.name);

organizer.name = 'Suresh';
console.log(organizer.name);

const myEvent = new MyEvent(2,'Birthday','Birthday party',new Date(),new Date());
myEvent.name = 'Marriage Event';
console.log(myEvent.name);

myEvent.description = 'Marriage party';
console.log(myEvent.description);

myEvent.startTime = new Date();
console.log(myEvent.startTime);

myEvent.endTime = new Date();
console.log(myEvent.endTime);

const venue = new Venue(3,'Venue','Venue description','Address');
console.log(venue.address);

venue.address = 'New Address';
console.log(venue.address);

venue.description = 'New Description';
console.log(venue.description);