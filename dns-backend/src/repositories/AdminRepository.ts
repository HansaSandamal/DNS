import AdminModel, {Admin} from "../models/Admin";

/**
 * create new Admin in mongo db
 * @param newAdmin
 */
const createAdmin = async (newAdmin: Admin) => {
  return await AdminModel.create(
    {
      userName: newAdmin.userName,
      email: newAdmin.email,
      contactNumber: newAdmin.phoneNo,
      address: newAdmin.adress,
  
    }
  );
};
/**
 * Sent all Admins
 */
const getAllAdmins = async () => {
  return AdminModel.find();
}

/**
 * Not permanently delete from db. Change status only 1 > 3
 * @param id
 * @param Admin
 */
const updateAdmin = async (id: number, Admin:any) => {
  return AdminModel.findOneAndUpdate({_id: id})
}

/**
 * Not permanently delete from db. Change status only 1 > 3
 * @param id
 */
const deleteAdmin = async (id: number) => {
  return AdminModel.findOneAndUpdate({_id: id})
}

export default {
  createAdmin,
  getAllAdmins,
  updateAdmin,
  deleteAdmin,
}
