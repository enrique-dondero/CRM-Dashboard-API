import { IsNotEmpty, IsString } from "class-validator";

export class NylasCallbackRequest implements QueryRequest {
  @IsNotEmpty()
  @IsString()
  code: string;
}
