import { Router } from "express";

import commit from "./commit.route";
import user from "./user.route";

const router: Router = Router();

router.use([commit, user]);

export default router;
