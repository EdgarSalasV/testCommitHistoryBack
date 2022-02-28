import { Router } from "express";

import commit from "./commit.route";
import user from "./user.route";
import repository from "./repository.route";

const router: Router = Router();

router.use("/api/v1",[commit, user, repository]);

export default router;
