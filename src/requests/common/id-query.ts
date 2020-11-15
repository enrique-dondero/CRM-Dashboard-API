import { IsNotEmpty, IsString } from "class-validator";

export class IdQueryRequest implements QueryRequest {
  @IsNotEmpty()
  @IsString()
  id: string;
}
