import { Router } from "express";
import {
  createUser,
  signinUser,
  verifyUser,
} from "../controller/userController";

const router: Router = Router();

router.route("/create-user").post(createUser);
router.route("/verify-user").patch(verifyUser);
router.route("/sign-in-user").patch(signinUser);

export default router;
