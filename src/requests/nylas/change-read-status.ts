import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class ChangeReadStatusRequest implements QueryRequest {
  @IsNotEmpty()
  @IsString()
  messageId: string;

  @IsOptional()
  @IsBoolean()
  readStatus: boolean;
}
