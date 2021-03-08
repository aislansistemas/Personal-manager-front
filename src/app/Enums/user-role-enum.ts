export abstract class UserRoleEnum {
    static admin: string = "Admin";
    static menber: string = "Menber";

    static getRoleAdmin() {
        return this.admin;
    }

    static getRoleMenber() {
        return this.menber;
    }
}

const admin = UserRoleEnum.getRoleAdmin();
const menber = UserRoleEnum.getRoleMenber();