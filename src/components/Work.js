import React from "react";

function Work({ formData, setFormData }) {
  return (
    <div className="container">
      <form>
        <div className="formInline">
          <label htmlFor="fname" className="labelFname">
            Job Title
          </label>
          <input
            type="text"
            name="jobtitle"
            placeholder="Enter your job title"
            value={formData.fdjob}
            onChange={(event) => { setFormData({ ...formData, fdjob: event.target.value }) }}
            required
          />
        </div>
        <div className="formInline">
          <label htmlFor="fname" className="labelFname">
            Company Name
          </label>
          <input
            type="text"
            name="companyname"
            placeholder="Enter your company name"
            value={formData.fdcompany}
            onChange={(event) => { setFormData({ ...formData, fdcompany: event.target.value }) }}
            required
          />
        </div>
        <div className="formInline">
          <label htmlFor="Sdate" className="labelFname">
            Years of experience
          </label>
          <input type="text" id="sdate" name="date" placeholder="Years of experience (start date - end date).." value={formData.fdduration}
            onChange={(event) => { setFormData({ ...formData, fdduration: event.target.value }) }} />

        </div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          placeholder="Write about your responsibilities and achievements"
          style={{ height: "100px" }}
          value={formData.fddescription}
          onChange={(event) => { setFormData({ ...formData, fddescription: event.target.value }) }}
        />
      </form>
    </div>
  );
}

export default Work;
