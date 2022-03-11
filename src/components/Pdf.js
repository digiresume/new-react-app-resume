import React from 'react';
import './Pdf.css';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";





function Pdf(props) {

    let { formData } = props;

    const pdfDownload = (e) => {
        const input = document.getElementById('print');

        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();

                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save('test.pdf');
            })

    }



    console.log(formData);


    return (
        <div className='app'>
            <div id='print'>

                {/* resumeHeader-START */}
                <div className='resumeHeader'>
                    <div className='userInfo'>

                        {/* firstname and lastname */}
                        <div className='resumeName'>
                            <h2>{formData.firstname}</h2><h2>{formData.lastname}</h2>
                        </div>

                        {/* job title */}
                        <div className='resumeTitle'>
                            <h3>{formData.jobtitle}</h3>
                        </div>

                        {/* email */}
                        <div className='resumeEmail'>
                            <h3>{formData.email}</h3>
                        </div>

                        {/* phone */}
                        <div className='resumePhone'>
                            <h3>{formData.phone}</h3>
                        </div>

                        {/* Social Links */}
                        <div className='socialLinks'>
                            <a href={formData.linkedin}><h3>{formData.linkedin ? <i className="fab fa-linkedin fa-2x" /> : ''}</h3></a>
                            <a href={formData.github}><h3>{formData.github ? <i className="fab fa-github fa-2x" /> : ''}</h3></a>
                        </div>
                    </div>

                    {/* Profile Photo */}
                    <div className='profilePic'>
                        <img src={formData.photo} style={{ 'width': '10%', 'borderRadius': '6rem' }} alt="profile pic" />
                    </div>
                    <br />
                    <div className='borderBottom'></div>
                </div>

                {/* resumeHeader- END */}


                {/* resumeBody-START */}
                <div className='resumeBody'>
                    {/* Objective */}
                    <div className='resumeObjective'>
                        <h2>Objective</h2>
                        <br />
                        <p>{formData.objective}</p>
                        <br />
                    </div>
                    <div className='borderBottom'></div>

                    {/* Skill */}
                    <div className='resumeSkill'>
                        <h2>Skill</h2>
                        <br />
                        <ul className="talent ">
                            {formData.skill.map((i, key) => (
                                <li key={key}>{i.skill}</li>
                            ))}
                        </ul>
                        <br />
                    </div>
                    <div className='borderBottom'></div>

                    {/* Work */}
                    <div className='resumeWork'>
                        <h2>Work</h2>
                        <br />
                        <div className='jobTitle'>
                            <h4>{formData.fdjob}</h4><span></span>
                            <h4>{formData.fdduration}</h4>
                        </div>
                        <div className='jobCompany'>
                            <h4>{formData.fdcompany}</h4>
                            <p>{formData.fddescription}</p>
                        </div>
                        <br />
                    </div>
                    <div className='borderBottom'></div>



                </div>


            </div>
            <br /><br />
            <button onClick={pdfDownload}>Download</button>

        </div>
    );
}

export default Pdf;
