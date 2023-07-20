import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Offer extends Document {
  @ApiProperty()
  @Prop({ default: 'pending' })
  status: string;

  @ApiProperty()
  @Prop({ ref: 'User' })
  offerOwnerId: Types.ObjectId;

  @ApiProperty()
  @Prop({ ref: 'Products' })
  offerTargetItem: Types.ObjectId;

  @ApiProperty()
  @Prop({ array: true, ref: 'Products' })
  offeredItems: Types.ObjectId[];
}

export const OfferSchema = SchemaFactory.createForClass(Offer);