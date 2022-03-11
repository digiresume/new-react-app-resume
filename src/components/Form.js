import React, { useState } from 'react';
import PersonInfo from './PersonInfo';
// import EducationalData from './formComponents/EducationalData';
import Work from './Work';
import './Form.css';
// import TemplateOne from '../../Pages/resume templates/template one/TemplateOne';
import { useNavigate } from 'react-router-dom';
import Skills from './Skills';
// import Honors from './formComponents/Honors';
// import Project from './formComponents/Project';
// import { useLocation } from 'react-router';
import Pdf from './Pdf';

function Form(props) {

    // const { chosenNum } = props;
    const [page, setPage] = useState(0);

    // const location = useLocation();
    let navigate = useNavigate();
    // console.log(chosenNum.location.state);

    const [formData, setFormData] = useState({
        firstname: "", lastname: "", photo: '', photoname: '', email: "", phone: "", jobtitle: "", objective: "",
        location: "", dob: "", linkedin: "", github: "",
        degreeug: "", universityug: "", yearsug: "", achievementsug: "", schoolXII: "", boardXII: "",
        yearsXII: "", achievementsXII: "", schoolX: "", boardX: "", yearsX: "", achievementsX: "",
        fdjob: "", fdcompany: "", fdduration: "", fddescription: "", skill: [{ skill: '' }], date: [{ date: '' }], certificationTitle: [{ certificationTitle: '' }], authorityOfCertification: [{ authorityOfCertification: '' }], title: [{ title: '' }], domain: [{ domain: '' }], duration: [{ duration: '' }], description: [{ description: '' }]
    });






    const FormTitles = ["Personal Information", "Education", "Work Experience", "Projects", "Skills", "Honours & Certifications", "Resume Template"];

    // For Switching between pages
    const PageDisplay = () => {
        if (page === 0) {
            return <PersonInfo formData={formData} setFormData={setFormData} />
        } else if (page === 1) {
            return <PersonInfo formData={formData} setFormData={setFormData} />
        } else if (page === 2) {
            return <Work formData={formData} setFormData={setFormData} />
        } else if (page === 3) {
            return <PersonInfo formData={formData} setFormData={setFormData} />
        } else if (page === 4) {
            return <Skills formData={formData} setFormData={setFormData} />
        } else if (page === 5) {
            return <PersonInfo formData={formData} setFormData={setFormData} />
        }
        else if (page === 6) {
            return <Pdf formData={formData} />
        }
    }

    return (
        <div className='form'>
            {/* <div className="progressbar">
                <div
                    style={{ width: page === 0 ? "14.28%" : page === 1 ? "28.56%" : page === 2 ? "42.84%" : page === 3 ? "57.12%" : page === 4 ? "71.4%" : page === 5 ? "85.68%" : "100%" }}
                ></div>
            </div> */}

            <div className='form-container'>
                {/* Form Title */}
                <div className='header'>
                    <h1>{FormTitles[page]}</h1>
                </div>

                {/* Form Body */}
                <div className='body'>{PageDisplay()}</div>
                <br />

                {/* Form Buttons */}
                <div className='footer'>
                    <button
                        disabled={page === 0}
                        onClick={() => { setPage((currPage) => currPage - 1) }}
                    >Back</button>
                    <button
                        onClick={() => {
                            if (page === FormTitles.length - 1) {
                                // alert("Resume successfully completed!");
                                // console.log(formData);
                                navigate('/resume');
                                // return < TemplateOne formData={formData} />
                            } else {
                                setPage((currPage) => currPage + 1);
                            }
                        }}
                    >
                        {page === FormTitles.length - 1 ? "Continue" : "Next"}   </button>
                </div>
            </div>
            <br /><br />

        </div>
    );
}

export default Form;