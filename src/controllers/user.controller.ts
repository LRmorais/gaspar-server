/* eslint-disable consistent-return */
import { Request, Response } from 'express';
import md5 from 'md5';
import { User } from '../database/models/user.model';

export const findAllUsers = async (
  req: Request,
  res: Response,
) => {
  try {
    const users = await User.findAll();

    if (!users) {
      res.status(400).json({
        users: null,
        message: 'nenhum usuario encontrado',
      });
    }
    return res.status(200).json(users);
  } catch (e) {
    return res.status(400).json({
      users: null,
      message: e,
    });
  }
};
export const login = async (
  req: Request,
  res: Response,
) => {
  const {
    email,
    password,
  } = req.body;
  try {
    const users = await User.findOne({
      where: {
        email,
      },
    });
    if (!users) {
      res.status(400).json({
        users: null,
        message: 'nenhum usuario cadastrado',
      });
    }
    const encryptpassword = md5(password);
    // @ts-ignore
    if (encryptpassword !== users.password) {
      res.status(400).json({
        users: null,
        message: 'senha errada',
      });
    }

    return res.status(200).json(users);
  } catch (e) {
    return res.status(400).json({
      users: null,
      message: e,
    });
  }
};
export const createUser = async (
  req: Request,
  res: Response,
) => {
  const {
    hasIfood,
    name,
    idIfood,
    email,
    phone,
    typeModel,
    profileImage,
    cnhImageFront,
    cnhImageBack,
    cpf,
    password,
  } = req.body;

  try {
    const user = await User.findOne({
      where: {
        cpf,
        email,
      },
    });

    if (user) {
      return res.status(400).json({
        user,
        message: 'usuario já cadastrado',
      });
    }
    const encryptpassword = md5(password);
    console.log(password);
    let newUser;

    if (hasIfood === 1) {
      newUser = await User.create({
        hasIfood,
        name,
        idIfood,
        email,
        phone,
        typeModel,
        cpf,
        password: encryptpassword,
      });
    } else if (hasIfood === 0) {
      newUser = await User.create({
        hasIfood,
        name,
        idIfood,
        email,
        phone,
        typeModel,
        profileImage,
        cnhImageFront,
        cnhImageBack,
        cpf,
        password: encryptpassword,
      });
    }

    return res.status(200).json(newUser);
  } catch (e) {
    return res.status(400).json({
      users: null,
      message: e,
    });
  }
};
