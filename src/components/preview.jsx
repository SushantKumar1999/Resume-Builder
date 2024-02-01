import { useSelector,connect } from "react-redux";
import "./css/preview.css";

let Preview = (props) => {
  

  let { fname, lname, city, state, email, contactdetails,summary,pincode, cgpa, college, degree, year ,skill1,skill2,skill3,skill4,skill5,skill6,skill7,skill8,experienceduration,jobprofile,joblocation,jobdetail1,jobdetail2,jobdetail3,jobdetail4,} =
    useSelector((state) => {
        console.log(state)
        return state.details}) || {};

  let templateCode = useSelector((state) => state.template);

  
    let firstLetter = fname.charAt(0);
    let lastLetter = lname.charAt(0);
    let boxletter = firstLetter+lastLetter;
  

  return (
    
      <div className="preview-container">
        <h3 className="m-4">PERSONAL & PROFESSIONAL  SUMMARY</h3>
        <div className={'divider'}></div>

        <div className="resumeContainer">
          <div className="header">
            <div className="profile">{boxletter}</div>
            <div className="nameContainer">
              <div className={`cvName-${templateCode}`}>{fname}{" "}{lname}</div>
            < div className="personalDetails">
              <div className="email detail">{email}</div>
              <div className="contact detail">{contactdetails}</div>
              <div className="state detail">{state}</div>
              <div className="city detail">{city}</div>
              <div className="pincode detail">{pincode}</div>
            </div>

            </div>
          </div>

          <div className="main">
            <div className="row1">
                  <div className="summary">
                    <div className="textSummary">Professional Summary</div>
                    <p>{summary}</p>
                  </div>
            </div>

            <div className="row2">
              <div className="education">
                <div className="college">Education</div>
                <div className="clgDetails">
                  <p className="clgName">{college}</p>
                  <p className="degree">{degree}</p>
                  <p className="cgpa">{cgpa}</p>
                  <p className="passingYear">{year}</p>
                </div>
              </div>
            </div>

            <div className="row3">
              <div className="skillWrapper">

              <div className="skills">Skills</div>
              <div className="skillContainer">
                  <div className="skillRow">
                      <p>{skill1}</p>
                      <p>{skill2}</p>
                      <p>{skill3}</p>
                      <p>{skill4}</p>
                  </div>
                <div className="skillRow">
                      <p>{skill5}</p>
                      <p>{skill6}</p>
                      <p>{skill7}</p>
                      <p>{skill8}</p>
                </div>
              </div>
              </div>
            </div>

            <div className="row4">
              <div className="experienceContainer">
                <div className="experienceText">Experience</div>
                <div className="experienceDetails">
                  <div className="experienceDate bold">{experienceduration}</div>
                  <div className="jobProfile bold">{jobprofile}</div>
                  <div className="location bold">{joblocation}</div>
                  <br />
                  <ul className="list">
                    <li>{jobdetail1}</li>
                    <li>{jobdetail2}</li>
                    <li>{jobdetail3}</li>
                    <li>{jobdetail4}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

  );
};
export default (Preview);