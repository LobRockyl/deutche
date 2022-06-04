import express from 'express';
import validate from 'express-validation';

import * as userController from '../controllers/user/user.controller';
import * as userValidator from '../controllers/user/user.validator';
import * as articleController from '../controllers/article/article.controller';
import apiAuth from '../middleware/apiAuth'
const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.get('/me', userController.profile);
router.get('/published/articles', articleController.getArticles);
router.get('/user/articles', apiAuth ,articleController.getArticlesOfUser);
router.get('/draft/articles', articleController.getDraftArticles);

router.post(
  '/changePassword',
  validate(userValidator.changePassword),
  userController.changePassword,
);


module.exports = router;
