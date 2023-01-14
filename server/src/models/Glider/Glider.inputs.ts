import { Field, InputType } from 'type-graphql';
import { Glider } from './Glider.model';

@InputType()
export class CreateGliderInput implements Partial<Glider> {
    @Field()
    callSign: string;

    @Field()
    numSeats: number;
}

@InputType()
export class UpdateGliderInput implements Partial<Glider> {
    @Field({ nullable: true })
    callSign: string;

    @Field({ nullable: true })
    numSeats: number;
}
