import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const { lat, lon, ...productData } = createProductDto;

      const newProduct = this.productModel.create({
        ...productData,
        geolocation: { lat, lon },
      });

      (await newProduct).category = new mongoose.Types.ObjectId(
        productData.category.toString(),
      );

      (await newProduct).subcategory = new mongoose.Types.ObjectId(
        productData.subcategory.toString(),
      );

      (await newProduct).owner = new mongoose.Types.ObjectId(
        productData.owner.toString(),
      );
/*
      (await newProduct).subcategories = productData.subcategories.map(
        (subcategory) => {
          return new mongoose.Types.ObjectId(subcategory.toString());
        },
      );
*/
      (await newProduct).save();

      return {
        newItem: await newProduct,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      const newProductList = this.productModel.find();
      return await newProductList;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  async findOne(id: string) {
    try {
      const product = await this.productModel.findById(id);
      if (!product) {
        throw new Error(`Product ${id} not found`);
      }
      return product;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findByCategory(id: string) {
    try {
      const productList = await this.productModel
        .find()
        .where({ category: id });
      if (!productList) {
        throw new Error(`Product ${id} not found`);
      }
      return productList;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findBySubCategory(id: string) {
    try {
      /*
      const productList = await this.productModel
        .find({ category: { $in: id } })
        .exec();
      */
      const productList = await this.productModel
        .find()
        .where({ subcategory: id });
      if (!productList) {
        throw new Error(`Product ${id} not found`);
      }
      return productList;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const productUpdate = await this.productModel.findByIdAndUpdate(
      id,
      updateProductDto,
      { new: true },
    );
    if (!productUpdate) {
      throw new Error(`Invoice ${id} not found`);
    }
    return productUpdate;
  }

  async remove(id: number) {
    throw new HttpException(
      `#${id}: You can't delete any product`,
      HttpStatus.FORBIDDEN,
    );
  }
}
