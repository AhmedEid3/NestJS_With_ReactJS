import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsUrl,
  Min,
} from 'class-validator';
import { Pages } from '../enums/pages.enum';

export class BaseDto {
  @IsBoolean()
  @IsOptional()
  readonly isActive: boolean;

  @IsNumber()
  @Min(1)
  @IsOptional()
  readonly ordering: number;

  @IsUrl()
  @IsOptional()
  readonly imgUrl: string;

  @IsUrl({}, { each: true })
  @IsOptional()
  readonly links: Array<string>;

  @IsEnum(Pages, { each: true })
  @IsOptional()
  readonly showOnlyPages: Array<Pages>;
}
