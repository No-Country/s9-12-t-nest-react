import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';

@Schema()
export class Product extends Document {
  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  description: string;

  @ApiProperty()
  @Prop({ default: 20 })
  price: number;

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
  @Prop({ array: true, ref: 'Subcategory' })
  subcategories: Types.ObjectId[];
}
export const ProductSchema = SchemaFactory.createForClass(Product);
