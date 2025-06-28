"use strict";
class Organizer {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}
class MyEvent {
    constructor(id, name, description, startTime, endTime) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.startTime = startTime;
        this.endTime = endTime;
    }
    display() {
        console.log(this.name);
    }
}
class Venue {
    constructor(id, name, description, address) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }
    display() {
        console.log(this.name);
    }
}
const organizer = new Organizer(1, 'Rajesh');
const myEvent = new MyEvent(2, 'Birthday', 'Birthday party', new Date(), new Date());
const venue = new Venue(3, 'Venue', 'Venue description', 'Address');
organizer.display();
myEvent.display();
venue.display();
