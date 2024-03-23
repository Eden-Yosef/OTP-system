import axios from "axios";

const handleRegister = async (email, firstName, lastName, phone, birth) => {
  let response;
  try {
    response = await axios.post("http://localhost:3000/saveDetails", {
      email: email,
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      birth: birth,
    });
    if (response.status === 200) {
      alert("Registered successfully!");
    }
    return response.status;
  } catch (error) {
    return error.response.data.message;
  }
};

export default handleRegister;
