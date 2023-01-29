import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateSocialDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsUrl()
  readonly link: string;

  @IsString()
  readonly imgUrl: string = '';
}
