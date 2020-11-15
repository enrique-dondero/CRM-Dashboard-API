import { IsNumber, IsOptional, IsPositive } from "class-validator";
import { Type } from "class-transformer";

export class BrowserQueryRequest implements QueryRequest {
  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  @IsOptional()
  limit?: number;

  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  @IsOptional()
  page?: number;
}
