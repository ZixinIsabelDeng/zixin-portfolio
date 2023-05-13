"use client"

import '../styles.css'
import { Box } from '@mui/material';
import ResumeSection from './ResumeSection';

const Resume = () => {
  return (
    <Box sx={{ m: 3 }}>
      <ResumeSection title="Education">
        Bachelor of CompSci – Computer Science Co-op 2022- 2025 (Expected)
        Concordia University, Montreal, QC
        GPA 3.92 /4.30
      </ResumeSection>

      <ResumeSection title="Skills and Qualifications">
        Operating Systems: Windows 10, macOS
        Programming Languages: C++, Java, Python, JavaScript, Html, CSS, PHP, R, Solidity
        Applications: R studio, Eclipse, Visual Studio Code, IntelliJ
        Other: React, Nodejs
        Languages: French (beginner), English (advanced), Mandarin (native)
      </ResumeSection>

      <ResumeSection title="Awards & Distinctions">
        Best Presentation in SCL case competition, provide engineering solutions to issues occur in remanufacturing Oct 2022
      </ResumeSection>

      <ResumeSection title="Volunteer Work">
        Student Volunteer, ConUhack, Montreal, Canada, Jan 2023
        Blockchain Student, SWUPEL DMS Developer team, Aug 2022
      </ResumeSection>

      <ResumeSection title="Interests">
        Crisis support, Hackathons (eg.CodeML, Olympic Hack, ConUhack,IEEE competitive programming)
      </ResumeSection>
    </Box>
  );
}

export default Resume;
