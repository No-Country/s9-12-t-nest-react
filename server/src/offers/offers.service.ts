import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Offer } from './entities/offer.entity';
import mongoose, { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class OffersService {
  constructor(
    @InjectModel(Offer.name)
    private readonly offerModel: Model<Offer>,
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {}

  async create(createOfferDto: CreateOfferDto) {
    try {
      const { ...offerData } = createOfferDto;
      const newOffer = await this.offerModel.create({ ...offerData });

      (await newOffer).offerOwnerId = new mongoose.Types.ObjectId(
        newOffer.offerOwnerId.toString(),
      );
      (await newOffer).offerTargetItem = new mongoose.Types.ObjectId(
        newOffer.offerTargetItem.toString(),
      );

      (await newOffer).offeredItems = offerData.offeredItems.map(
        (offeredItem) => {
          return new mongoose.Types.ObjectId(offeredItem.toString());
        },
      );

      const productTarget = await this.productModel.findById(
        offerData.offerTargetItem,
      );
      const userTarget = await this.userModel
        .findById(productTarget.owner)
        .exec();
      (await userTarget).incomingOffers.push(newOffer._id);
      (await userTarget).save();
      (await newOffer).save();

      return {
        newOffer: await newOffer,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  findAll() {
    return `This action returns all offers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} offer`;
  }

  update(id: number, updateOfferDto: UpdateOfferDto) {
    return `This action updates a #${id} offer`;
  }

  remove(id: number) {
    return `This action removes a #${id} offer`;
  }
}
