import axios from "axios";

const checkEmailInServer = async (email) => {
  try {
    const params = {
      email: email,
    };
    const response = await axios.get("http://localhost:3000/checkEmail", {
      params,
    });
    return response.status;
  } catch (error) {
    return error.response.data.message;
  }
};

export default checkEmailInServer;
