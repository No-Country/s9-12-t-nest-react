import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  generateJwt(payload) {
    return this.jwtService.sign(payload);
  }

  async signIn(user) {
    if (!user) {
      throw new BadRequestException('Unauthenticated');
    }

    const userExists = await this.findUserByEmail(user.email);

    if (!userExists) {
      return this.registerUser(user);
    }

    return this.generateJwt({
      sub: userExists.id,
      email: userExists.email,
    });
  }

  async registerUser(user: CreateUserDto) {
    try {
      const { password, ...userData } = user;

      const newUser = this.userModel.create({
        ...userData,
        //password: bcrypt.hashSync(password, 10), (¿?)
      });

      (await newUser).save();
      

      return this.generateJwt({
        sub: (await newUser)._id,
        email: (await newUser).email,
      });
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async findUserByEmail(email) {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      return null;
    }

    return user;
  }
}
// import { ClientProxy } from '@nestjs/microservices';
// import { EventEmitter2 } from '@nestjs/event-emitter';
// import { Injectable, HttpException, HttpStatus, Inject } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { compareHash, generateHash } from './utils/handleBcrypt';
// import { User } from '../users/entities/user.entity';
// import { LoginAuthDto } from './dto/login-auth.dto';
// import { RegisterAuthDto } from './dto/register-auth.dto';
import { UsersModule } from '../users/users.module';

// @Injectable()
// export class AuthService {
//   constructor(
//     private readonly jwtService: JwtService,
//     private readonly eventEmitter: EventEmitter2,
//     @InjectModel(User.name) private readonly userModel: Model<User>,
//     @Inject('MAIL_SERVICE') private readonly clientMailService:ClientProxy
//   ) {}

//   /**
//    * Iniciar sesion
//    * @param userLoginBody
//    * @returns
//    */
//   public async login(userLoginBody: LoginAuthDto) {
//     const { password } = userLoginBody;

//     const userExist = await this.userModel.findOne({
//       email: userLoginBody.email,
//     });
//     if (!userExist) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

//     const isCheck = await compareHash(password, userExist.password);
//     if (!isCheck)
//       throw new HttpException('PASSWORD_INVALID', HttpStatus.CONFLICT);

//     const userFlat = userExist.toObject();
//     delete userFlat.password;

//     const payload = {
//       id: userFlat._id,
//     };

//     const token = this.jwtService.sign(payload);

//     const data = {
//       token,
//       user: userFlat,
//     };
//     this.eventEmitter.emit('user.login', data);

//     return data;
//   }

//   /**
//    * Registrar un usuario
//    * @param userBody
//    * @returns
//    */
//   public async register(userBody: RegisterAuthDto) {
//     const { password, ...user } = userBody;

//     const userParse = {
//       ...user,
//       password: await generateHash(password),
//     };

//     const newUser = await this.userModel.create(userParse);

//     /**
//      * Enviar (evento) de email
//      */

//     this.clientMailService.emit('user.created', newUser);

//     return newUser;
//   }
// }