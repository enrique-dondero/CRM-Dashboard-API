import { Model } from "mongoose";
import { AccountType } from "root/types/enums";
import { MasterProps, ManagerProps, IntroducerProps } from "root/models";
import { introducerModel, managerModel, masterModel } from "root/providers";

export const getUserModel = (userRole: string): Model<MasterProps | ManagerProps | IntroducerProps> => {
  switch (userRole) {
  case AccountType.ADMIN: {
    return masterModel();
  };
  case AccountType.MANAGER: {
    return managerModel();
  };
  case AccountType.INTRODUCER: {
    return introducerModel();
  };
  default: {
    return masterModel();
  }
  }
};
