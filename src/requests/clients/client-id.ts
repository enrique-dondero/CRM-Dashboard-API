import { IsNotEmpty, IsString } from "class-validator";

export class ClientIdRequest implements QueryRequest {
  @IsNotEmpty()
  @IsString()
  clientId: string;
}
