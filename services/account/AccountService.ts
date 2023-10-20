import {BaseService} from "~/services/shared/bases/BaseService";

export class AccountService extends BaseService {
  constructor() {
    super('/api/admin/accounts');
  }
}
