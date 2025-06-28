"use strict";
class TouchScreenLaptop {
    constructor(ram, hd, processor) {
        this.ram = ram;
        this.hd = hd;
        this.processor = processor;
    }
    scroll() {
        console.log("Scrolling Touch Screen Laptop");
    }
}
class DellLaptop extends TouchScreenLaptop {
    constructor(ram, hd, processor, mobileAccess) {
        super(ram, hd, processor);
        this.mobileAccess = mobileAccess;
    }
    scroll() {
        console.log("Scrolling Dell Laptop");
    }
}
class HPLaptop extends TouchScreenLaptop {
    constructor(ram, hd, processor, selfRecovery) {
        super(ram, hd, processor);
        this.selfRecovery = selfRecovery;
    }
    scroll() {
        console.log("Scrolling HP Laptop");
    }
}
let touchScreenLaptop = new TouchScreenLaptop(8, 512, 'i7');
touchScreenLaptop.scroll();
let dellLaptop = new DellLaptop(8, 512, 'i7', true);
dellLaptop.scroll();
let hpLaptop = new HPLaptop(8, 512, 'i7', true);
hpLaptop.scroll();
