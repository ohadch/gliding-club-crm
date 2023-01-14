export interface IActionDB {
    ActionPKCode: number
    ActionDate: string
}

export interface IMemberDB {
    MemPKCode: number,
    Email: string,
    EnFirstName: string,
    EnLastName: string,
    FirstName: string,
    LastName: string,
    HomePhone: string,
    MobilePhone: string,
}

export interface IEmailMessageDB {
    ID: number,
    EmailAddress: string,
    SentAt: string,
    EmailContent: string,
}

export interface IGliderTypeDB {
    ID: number,
    Type: string,
}

export interface IAircraftDB {
    GPKCode: number,
    RadioCall: string,
    SeatCount: number,
    ClubOwner: number,
    Gtype: string,
}

export interface IFlightTypeDB {
    FlightTypeCode: number,
    FlightType: string,
}

export interface IMemberStatusTypeDB {
    ID: number,
    Type: string,
}

export interface ITowTypeDB {
    TowingTypeCode: number,
    TowingType: string,
}

export interface IPayerTypeDB {
    PayersTypesCode: number,
    PayersType: string,
}

export interface IPaymentMethodDB {
    ID: number,
    Type: string,
}

export interface IFlightDB {
    FlightPKcode: number,
    TakeOffTime: string,
    LandTime: string,
    ActionPageFlightStatus: string,
    ActionFKCode: number,
    RadioCallIDSC: number,
    FlightTypeIDSC: number,
    Pilot1NameIDSC: number,
    Pilot1TypeIDSC: number,
    Pilot2NameIDSC: number,
    Pilot2TypeIDSC: number,
    DragPlaneRadioCallIDSC: number,
    DragPilotIDSC: number,
    DragTypeIDSC: number,
    PayersTypeIDSC: number,
    PayerNameIDSC: number,
    PaymentTypeID: number,
    RecivePayNameIDSC: number,

    // __action: IAction,
    // __glider: IAircraft,
    // __flight_type: IFlightType,
    // __pilot_1: IMember,
    // __pilot_1_type: IMemberStatusType,
    // __pilot_2: IMember,
    // __pilot_2_type: IMemberStatusType,
    // __drag_airplane: IAircraft,
    // __drag_pilot: IMember,
    // __drag_type: ITowType,
    // __payers_type: IPayerType,
    // __third_member_paying: IMember,
    // __payment_method: IPaymentMethod,
    // __payment_receiver: IMember,
}

export interface IActionCommentDB {
    ID: number,
    Text: string,
    createdAt: string,
    ActionFKCode: number,

    // __action: IFlight,
}

export interface IFlightCommentDB {
    ID: number,
    Text: string,
    createdAt: string,
    FlightFKCode: number,

    // __flight: IFlight,
}
