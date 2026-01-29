import UserModel from "../Model/userModel.js";

export const createUserController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const response = await UserModel.createUserModel({
      name,
      email,
      password
    });

    res.status(201).json({
      message: "User created successfully",
      userId: response
    });

  } catch (err) {
    console.log("Error:", err);

    res.status(500).json({
      message: "Failed to create user",
      error: err.message
    });
  }
};
