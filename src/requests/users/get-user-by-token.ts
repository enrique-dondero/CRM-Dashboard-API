import { IsNotEmpty, IsString } from "class-validator";

export class GetUserByTokenRequest implements QueryRequest {
  @IsNotEmpty()
  @IsString()
  token: string;
}
