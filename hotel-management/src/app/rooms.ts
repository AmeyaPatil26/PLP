export class Rooms {
    constructor(
        public roomId: number ,
        public hotelId: number,
        public hotelName: string,
        public hotelLicense: string,
        public amount: number,
        public roomCapacity: number,
        public roomCount: number,
        public roomType: string,
        public status: string

    ) {}
   }
