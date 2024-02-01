let initialState = {
    fname: "",
    lname: "",
    email: "",
    contactdetails: "",
    city: "",
    summary: "",
    state: "",
    degree: "",
    college: "",
    cgpa: "",
    year: "",
    skill1:"",
    skill2:"",
    skill3:"",
    skill4:"",
    skill5:"",
    skill6:"",
    skill7:"",
    skill8:"",
    experienceduration:"",
    jobprofile:"",
    joblocation:"",
    jobdeatil1:"",
    jobdeatil2:"",
    jobdeatil3:"",
    jobdeatil4:"",
    isPublic: false,
  };
  
  let detailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_DETAILS":
        return { ...state, ...action.payload };
  
      default:
        return state;
    }
  };
  
  export default detailsReducer;
  