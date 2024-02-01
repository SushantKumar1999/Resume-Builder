import { useDispatch, useSelector } from "react-redux";
import Preview from "./preview";
import "./css/form.css";

import { detailCreator } from "../redux/actions/detailsActions";
import { saveResume } from "../redux/actions/saveActions";
import { useHistory } from "react-router";
let Qualifications = () => {
  let history = useHistory();
  let dispatch = useDispatch();
  
  let { degree, cgpa, year, college,experienceduration,jobprofile,joblocation,jobdetail1,jobdetail2,jobdetail3,jobdetail4,skill1,skill2,skill3,skill4,skill5,skill6,skill7,skill8, isPublic } = useSelector(
    (state) => state.details
  );

  let { id } = useSelector((state) => state.saveState);

  let details = useSelector((state) => state.details);
  let code = useSelector((state) => state.template);
  let { uid } = useSelector((state) => state.user);

  return (
    <>
      <div className="qual-container">
        <div className="qual-form">
          <h2 className="m-4">Professional Details</h2>
          <div class="row m-3">
          <div class="col-5">
              <input
                value={college}
                onChange={(e) => {
                  dispatch(detailCreator({ college: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="College Name"
              />
            </div>
            <div class="col-5">
              <input
                type="text"
                class="form-control"
                placeholder="Degree"
                value={degree}
                onChange={(e) => {
                  dispatch(detailCreator({ degree: e.currentTarget.value }));
                }}
              />
            </div>
            

            <div class="col-5">
              <input
                value={cgpa}
                onChange={(e) => {
                  dispatch(detailCreator({ cgpa: e.currentTarget.value }));
                }}
                type="number"
                class="form-control"
                placeholder="CGPA"
              />
            </div>
            
            <div class="col-5">
              <input
                value={year}
                onChange={(e) => {
                  dispatch(detailCreator({ year: e.currentTarget.value }));
                }}
                type="number"
                class="form-control"
                placeholder="Year of graduation"
              />
            </div>
            <div class="col-5">
              <input
                value={skill1}
                onChange={(e) => {
                  dispatch(detailCreator({ skill1: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Skill1"
              />
            </div>
            <div class="col-5">
              <input
                value={skill2}
                onChange={(e) => {
                  dispatch(detailCreator({ skill2: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Skill2"
              />
            </div>
            <div class="col-5">
              <input
                value={skill3}
                onChange={(e) => {
                  dispatch(detailCreator({ skill3: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Skill3"
              />
            </div>
            <div class="col-5">
              <input
                value={skill4}
                onChange={(e) => {
                  dispatch(detailCreator({ skill4: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Skill4"
              />
            </div>
            <div class="col-5">
              <input
                value={skill5}
                onChange={(e) => {
                  dispatch(detailCreator({ skill5: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Skill5"
              />
            </div>
            <div class="col-5">
              <input
                value={skill6}
                onChange={(e) => {
                  dispatch(detailCreator({ skill6: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Skill6"
              />
            </div>
            <div class="col-5">
              <input
                value={skill7}
                onChange={(e) => {
                  dispatch(detailCreator({ skill7: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Skill7"
              />
            </div>
            <div class="col-5">
              <input
                value={skill8}
                onChange={(e) => {
                  dispatch(detailCreator({ skill8: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Skill8"
              />
            </div>
            <div class="col-5">
              <input
                value={experienceduration}
                onChange={(e) => {
                  dispatch(detailCreator({experienceduration: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Experience Duration"
              />
            </div>
            <div class="col-5">
              <input
                value={jobprofile}
                onChange={(e) => {
                  dispatch(detailCreator({jobprofile: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Job Profile"
              />
            </div>
            <div class="col-5">
              <input
                value={joblocation}
                onChange={(e) => {
                  dispatch(detailCreator({joblocation: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Job Location"
              />
            </div>
            <div class="col-5">
              <input
                value={jobdetail1}
                onChange={(e) => {
                  dispatch(detailCreator({jobdetail1: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Job Detail1"
              />
            </div>
            <div class="col-5">
              <input
                value={jobdetail2}
                onChange={(e) => {
                  dispatch(detailCreator({jobdetail2: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Job Deatil2"
              />
            </div>
            <div class="col-5">
              <input
                value={jobdetail3}
                onChange={(e) => {
                  dispatch(detailCreator({jobdetail3: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Job Detail3"
              />
            </div>
            <div class="col-5">
              <input
                value={jobdetail4}
                onChange={(e) => {
                  dispatch(detailCreator({jobdetail4: e.currentTarget.value }));
                }}
                type="text"
                class="form-control"
                placeholder="Job Detail4"
              />
            </div>







            <div class="form-check m-4">
              <input
                class="form-check-input"
                type="checkbox"
                checked={isPublic}
                onClick={(e) => {
                  dispatch(
                    detailCreator({ isPublic: e.currentTarget.checked })
                  );
                }}
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
              Make public
              </label>
            </div>
          </div>

          <button
            onClick={() => {
              history.push("/personal");
            }}
            className="btn btn-primary ml-4"
          >
            Back
          </button>
        </div>
        <Preview />
      </div>
      <button  
      onClick={() => {
          alert(`localhost:3000/publicpreview/${id}`);
        }}
        className="btn btn-primary qual-gen"
      >
        Generate link</button>
      <button
        onClick={() => {
          dispatch(saveResume(uid, details, code));
        }}
        className="btn btn-primary qual-save"
      >
        Save to Database
      </button>
      <button
        onClick={() => {
          dispatch(saveResume(uid, details, code));
        }}
        className="btn btn-primary qual-download"
      >
        Download as PDF
      </button>
    </>
    
  );
};

export default Qualifications;