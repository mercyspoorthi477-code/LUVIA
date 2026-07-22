import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() => {

    const savedUser = localStorage.getItem("luvia_user");

    return savedUser
      ? JSON.parse(savedUser)
      : null;

  });


  const [token, setToken] = useState(() =>
    localStorage.getItem("luvia_token") || null
  );


  const [loading, setLoading] = useState(false);



  useEffect(() => {

    if (token) {

      localStorage.setItem(
        "luvia_token",
        token
      );

    } else {

      localStorage.removeItem(
        "luvia_token"
      );

    }

  }, [token]);




  useEffect(() => {

    if (user) {

      localStorage.setItem(
        "luvia_user",
        JSON.stringify(user)
      );

    } else {

      localStorage.removeItem(
        "luvia_user"
      );

    }

  }, [user]);






  const login = async (email, password) => {

    setLoading(true);

    try {

      const res = await api.post(
        "/auth/login",
        {
          email,
          password
        }
      );


      const {
        token: authToken,
        user: userData
      } = res.data;



      // Convert MongoDB _id to frontend id
      if (userData._id) {
        userData.id = userData._id;
      }



      setToken(authToken);

      setUser(userData);


      setLoading(false);


      return {
        success:true,
        user:userData
      };


    } catch(err) {


      setLoading(false);


      return {
        success:false,
        error:
        err.response?.data?.message ||
        "Login failed"
      };

    }

  };







  const register = async(formData)=>{

    setLoading(true);


    try{


      const res = await api.post(
        "/auth/register",
        formData
      );



      const {
        token:authToken,
        user:userData
      } = res.data;



      if(userData._id){

        userData.id = userData._id;

      }



      setToken(authToken);

      setUser(userData);


      setLoading(false);



      return {
        success:true,
        user:userData
      };



    }catch(err){


      setLoading(false);


      return {

        success:false,

        error:
        err.response?.data?.message ||
        "Registration failed"

      };


    }


  };







  const logout = ()=>{


    setToken(null);

    setUser(null);


    localStorage.removeItem(
      "luvia_token"
    );


    localStorage.removeItem(
      "luvia_user"
    );


  };







  const updateCycleData = (updatedFields)=>{


    setUser(prev=>{


      const updated = {
        ...prev,
        ...updatedFields
      };


      localStorage.setItem(
        "luvia_user",
        JSON.stringify(updated)
      );


      return updated;


    });


  };








  return (

    <AuthContext.Provider

      value={{

        user,

        token,

        isAuthenticated:!!token,

        loading,

        login,

        register,

        logout,

        updateCycleData

      }}

    >

      {children}

    </AuthContext.Provider>

  );


};






export const useAuth = ()=>{


  const context = useContext(AuthContext);



  if(!context){

    throw new Error(
      "useAuth must be used within AuthProvider"
    );

  }



  return context;


};