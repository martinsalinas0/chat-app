 export const signUp = (req, res) => {
  
  const {fullName, email, password } = req.body

  try {
       //hash password  



  } catch (error) {
    
  }
}


export const login = (req, res) => {
  res.send("sign in route");
}


export const logout = (req, res) => {
  res.send("sign out route");
}