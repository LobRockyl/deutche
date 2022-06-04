import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import axios from 'axios';
import { User } from '../../models';
import { successResponse, errorResponse, uniqueId } from '../../helpers';
import {Article} from '../../models';

export const getArticles = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const limit = 2;
    const articles = await Article.findAndCountAll({
        where: {
            isPublished: true
            },
      order: [['createdAt', 'DESC']],
      offset: (page - 1) * limit,
      limit,
    });
    return successResponse(req, res, { articles });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
export const getDraftArticles = async (req, res) => {
    try {
      const page = req.params.page || 1;
      const limit = 2;
      const articles = await Article.findAndCountAll({
          where: {
              isPublished: true
              },
        order: [['createdAt', 'DESC']],
        offset: (page - 1) * limit,
        limit,
      });
      return successResponse(req, res, { articles });
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
};
export const getArticlesOfUser = async (req, res) => {
    try {
      
      const user = req.user;
      const limit = 2;
      const articles = await Article.findAndCountAll({
          where: {
              creator_id: user.userId
              },
        order: [['createdAt', 'DESC']],
        //offset: (page - 1) * limit,
        //limit,
      });
      return successResponse(req, res, { articles });
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
};