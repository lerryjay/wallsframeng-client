import axios from "axios";

export const createOrUpdateUser = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/create-or-update-user`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const currentUser = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/current-user`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};


export const currentAdmin = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/current-admin`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const registerUser = async (authtoken, fullname, telephone) => {
  return await axios.post(`${process.env.REACT_APP_API}/user/register`,
    {
      fullname, telephone
    },
    {
      headers: {
        authtoken,
      },
    }
  );
}

export const registerVendor = async (authtoken, storename, telephone) => {
  return await axios.post(`${process.env.REACT_APP_API}/vendor/register`,
    {
      storename, telephone
    },
    {
      headers: {
        authtoken,
      },
    }
  );
}
