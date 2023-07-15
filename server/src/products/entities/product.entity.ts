import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';

interface iGeo {
  lat: string;
  lon: string;
}

@Schema()
export class Product extends Document {
  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  description: string;

  @ApiProperty()
  @Prop({ array: true })
  images: string[];

  @ApiProperty()
  @Prop({ ref: 'User' })
  owner: Types.ObjectId;

  @ApiProperty()
  @Prop({ ref: 'Category' })
  category: Types.ObjectId;

  @ApiProperty()
  @Prop({ ref: 'Subcategory' })
  subcategory: Types.ObjectId;

  @ApiProperty()
  @Prop({ type: Object })
  geolocation: iGeo;

  @ApiProperty()
  @Prop()
  location: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: null })
  updatedAt: Date;

  @Prop({ default: null })
  deletedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
