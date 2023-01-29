import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { SA_CountryCode } from 'src/common/constants/CountryCode';
import { BaseDto } from 'src/common/dto/base.dto';
import { CreateSocialDto } from './create-social.dto';

export class CreateContactDto extends BaseDto {
  @IsEmail()
  readonly email: string;

  @IsPhoneNumber(SA_CountryCode, { each: true })
  readonly phones: string;

  @IsString()
  readonly address: string;

  @IsString()
  readonly addressAr: string;

  @IsString()
  readonly slogan: string;

  @IsString()
  readonly sloganAr: string;

  @ValidateNested({ each: true })
  @IsNotEmpty()
  @Type(() => CreateSocialDto)
  readonly socials: Array<CreateSocialDto>;
}
