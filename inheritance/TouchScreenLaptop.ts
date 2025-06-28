class TouchScreenLaptop {
    ram:number;
    hd:number;
    processor:string;

    constructor(ram:number,hd:number,processor:string){
        this.ram=ram;
        this.hd=hd;
        this.processor=processor;
    }

    scroll():void{
        console.log("Scrolling Touch Screen Laptop");
    }
}

class DellLaptop extends TouchScreenLaptop {
    mobileAccess:boolean;

    constructor(ram:number,hd:number,processor:string,mobileAccess:boolean){
        super(ram,hd,processor);
        this.mobileAccess=mobileAccess;
    }

    scroll():void{
        console.log("Scrolling Dell Laptop");
    }
}

class HPLaptop extends TouchScreenLaptop {
    selfRecovery: boolean;

    constructor(ram:number,hd:number,processor:string,selfRecovery:boolean){
        super(ram,hd,processor);
        this.selfRecovery=selfRecovery;
    }

    scroll():void{
        console.log("Scrolling HP Laptop");
    }
}

let touchScreenLaptop:TouchScreenLaptop = new TouchScreenLaptop(8,512,'i7');
touchScreenLaptop.scroll();

let dellLaptop:DellLaptop = new DellLaptop(8,512,'i7',true);
dellLaptop.scroll();
let hpLaptop:HPLaptop = new HPLaptop(8,512,'i7',true);
hpLaptop.scroll();