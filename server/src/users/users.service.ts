import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const { password, ...userData } = createUserDto;

      const user = this.userModel.create({
        ...userData,
        //password: bcrypt.hashSync(password, 10), (¿?)
      });

      (await user).save();

      return {
        id: (await user)._id,
        //token: this.getJwtToken({ id: (await user)._id }),  (¿?)
      };
    } catch (error) {
      this.handleUserError(error);
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private handleUserError(error: any): never {
    if (error.code === 11000) {
      console.log(error);
      throw new BadRequestException(`${error.keyValue['email']} exists`);
    }
    throw new HttpException(error.response, error.status);
  }
}
