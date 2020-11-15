import { IsNotEmpty, IsString } from "class-validator";

export class OrgIdRequest implements QueryRequest {
  @IsNotEmpty()
  @IsString()
  orgId: string;
}
