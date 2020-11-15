import { IsNotEmpty, IsString } from "class-validator";

export class CreateCollectionRequest implements BodyRequest {
  @IsString()
  @IsNotEmpty()
  name: string;
}
