import { IsNotEmpty, IsString, IsEnum, IsDate, IsOptional, IsArray } from "class-validator";
import { IntroducerType, PreferredTermType, HobbiesAndInterestsEnum } from "root/types/enums";
import { Type } from "class-transformer";

export class AcceptIntroduerInviteRequest implements BodyRequest {
  @IsNotEmpty()
  @IsString()
  token: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  contactNumber: string;

  @IsNotEmpty()
  @IsEnum(IntroducerType)
  introducerType: IntroducerType;

  @IsOptional()
  @IsString()
  companyName?: string;

  @Type(()=> Date)
  @IsNotEmpty()
  @IsDate()
  birthday: Date;

  @Type(() => Array)
  @IsOptional()
  @IsArray()
  @IsEnum(HobbiesAndInterestsEnum, {
    each: true,
  })
  hobbiesAndInterests?: Array<HobbiesAndInterestsEnum>;

  @IsNotEmpty()
  @IsEnum(PreferredTermType)
  preferredTerm: PreferredTermType;

  @IsOptional()
  customFields?: Record<string, any>;
}
