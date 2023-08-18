import express ,{Request,Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const html=`<html>
<head>
  <meta content="text/html; charset=UTF-8" http-equiv="content-type" />
  <style type="text/css">
    ol {
      margin: 0;
      padding: 0;
    }
    table td,
    table th {
      padding: 0;
    }
    .c12 {
      border-right-style: solid;
      padding: 5pt 5pt 5pt 5pt;
      border-bottom-color: #000000;
      border-top-width: 1pt;
      border-right-width: 1pt;
      border-left-color: #000000;
      vertical-align: top;
      border-right-color: #000000;
      border-left-width: 1pt;
      border-top-style: solid;
      background-color: #c00000;
      border-left-style: solid;
      border-bottom-width: 1pt;
      width: 14.2pt;
      border-top-color: #000000;
      border-bottom-style: solid;
    }
    .c35 {
      border-right-style: solid;
      padding: 5pt 5pt 5pt 5pt;
      border-bottom-color: #000000;
      border-top-width: 1pt;
      border-right-width: 1pt;
      border-left-color: #000000;
      vertical-align: top;
      border-right-color: #000000;
      border-left-width: 1pt;
      border-top-style: solid;
      background-color: #92d050;
      border-left-style: solid;
      border-bottom-width: 1pt;
      width: 14.2pt;
      border-top-color: #000000;
      border-bottom-style: solid;
    }
    .c5 {
      border-right-style: solid;
      padding: 5pt 5pt 5pt 5pt;
      border-bottom-color: #000000;
      border-top-width: 1pt;
      border-right-width: 1pt;
      border-left-color: #000000;
      vertical-align: top;
      border-right-color: #000000;
      border-left-width: 1pt;
      border-top-style: solid;
      background-color: #92d050;
      border-left-style: solid;
      border-bottom-width: 1pt;
      width: 99pt;
      border-top-color: #000000;
      border-bottom-style: solid;
    }
    .c13 {
      border-right-style: solid;
      padding: 1pt 1pt 1pt 1pt;
      border-bottom-color: #000000;
      border-top-width: 1pt;
      border-right-width: 1pt;
      border-left-color: #000000;
      vertical-align: top;
      border-right-color: #000000;
      border-left-width: 1pt;
      border-top-style: solid;
      background-color: #92d050;
      border-left-style: solid;
      border-bottom-width: 1pt;
      width: 66.8pt;
      border-top-color: #000000;
      border-bottom-style: solid;
    }
    .c24 {
      border-right-style: solid;
      padding: 5pt 5pt 5pt 5pt;
      border-bottom-color: #000000;
      border-top-width: 1pt;
      border-right-width: 1pt;
      border-left-color: #000000;
      vertical-align: top;
      border-right-color: #000000;
      border-left-width: 1pt;
      border-top-style: solid;
      background-color: #92d050;
      border-left-style: solid;
      border-bottom-width: 1pt;
      width: 111.8pt;
      border-top-color: #000000;
      border-bottom-style: solid;
    }
    .c15 {
      border-right-style: solid;
      padding: 5pt 5pt 5pt 5pt;
      border-bottom-color: #000000;
      border-top-width: 1pt;
      border-right-width: 1pt;
      border-left-color: #000000;
      vertical-align: top;
      border-right-color: #000000;
      border-left-width: 1pt;
      border-top-style: solid;
      background-color: #ff0000;
      border-left-style: solid;
      border-bottom-width: 1pt;
      width: 99pt;
      border-top-color: #000000;
      border-bottom-style: solid;
    }
    .c41 {
      border-right-style: solid;
      padding: 5pt 5pt 5pt 5pt;
      border-bottom-color: #000000;
      border-top-width: 1pt;
      border-right-width: 1pt;
      border-left-color: #000000;
      vertical-align: top;
      border-right-color: #000000;
      border-left-width: 1pt;
      border-top-style: solid;
      border-left-style: solid;
      border-bottom-width: 1pt;
      width: 62.2pt;
      border-top-color: #000000;
      border-bottom-style: solid;
    }
    .c11 {
      border-right-style: solid;
      padding: 5pt 5pt 5pt 5pt;
      border-bottom-color: #000000;
      border-top-width: 1pt;
      border-right-width: 1pt;
      border-left-color: #000000;
      vertical-align: top;
      border-right-color: #000000;
      border-left-width: 1pt;
      border-top-style: solid;
      border-left-style: solid;
      border-bottom-width: 1pt;
      width: 158.2pt;
      border-top-color: #000000;
      border-bottom-style: solid;
    }
    .c29 {
      border-right-style: solid;
      padding: 5pt 5pt 5pt 5pt;
      border-bottom-color: #000000;
      border-top-width: 1pt;
      border-right-width: 1pt;
      border-left-color: #000000;
      vertical-align: top;
      border-right-color: #000000;
      border-left-width: 1pt;
      border-top-style: solid;
      border-left-style: solid;
      border-bottom-width: 1pt;
      width: 111.8pt;
      border-top-color: #000000;
      border-bottom-style: solid;
    }
    .c47 {
      border-right-style: solid;
      padding: 5pt 5pt 5pt 5pt;
      border-bottom-color: #000000;
      border-top-width: 1pt;
      border-right-width: 1pt;
      border-left-color: #000000;
      vertical-align: top;
      border-right-color: #000000;
      border-left-width: 1pt;
      border-top-style: solid;
      border-left-style: solid;
      border-bottom-width: 1pt;
      width: 84pt;
      border-top-color: #000000;
      border-bottom-style: solid;
    }
    .c30 {
      border-right-style: solid;
      padding: 5pt 5pt 5pt 5pt;
      border-bottom-color: #000000;
      border-top-width: 1pt;
      border-right-width: 1pt;
      border-left-color: #000000;
      vertical-align: top;
      border-right-color: #000000;
      border-left-width: 1pt;
      border-top-style: solid;
      border-left-style: solid;
      border-bottom-width: 1pt;
      width: 99pt;
      border-top-color: #000000;
      border-bottom-style: solid;
    }
    .c31 {
      border-right-style: solid;
      padding: 1pt 1pt 1pt 1pt;
      border-bottom-color: #000000;
      border-top-width: 1pt;
      border-right-width: 1pt;
      border-left-color: #000000;
      vertical-align: top;
      border-right-color: #000000;
      border-left-width: 1pt;
      border-top-style: solid;
      border-left-style: solid;
      border-bottom-width: 1pt;
      width: 66.8pt;
      border-top-color: #000000;
      border-bottom-style: solid;
    }
    .c42 {
      background-color: #ffffff;
      margin-left: 36pt;
      padding-top: 0pt;
      padding-bottom: 0pt;
      line-height: 1.5;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
    .c0 {
      margin-left: 5pt;
      padding-top: 0pt;
      padding-bottom: 0pt;
      line-height: 1.15;
      orphans: 2;
      widows: 2;
      text-align: left;
      height: 11pt;
    }
    .c2 {
      margin-left: 5pt;
      padding-top: 0pt;
      padding-bottom: 0pt;
      line-height: 1.15;
      orphans: 2;
      widows: 2;
      text-align: justify;
    }
    .c6 {
      margin-left: 5pt;
      padding-top: 0pt;
      padding-bottom: 0pt;
      line-height: 1.15;
      orphans: 2;
      widows: 2;
      text-align: center;
    }
    .c4 {
      background-color: #ffffff;
      padding-top: 0pt;
      padding-bottom: 0pt;
      line-height: 1.15;
      orphans: 2;
      widows: 2;
      text-align: justify;
    }
    .c22 {
      margin-left: 5pt;
      padding-top: 0pt;
      padding-bottom: 0pt;
      line-height: 1.15;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
    .c19 {
      background-color: #ffffff;
      padding-top: 0pt;
      padding-bottom: 0pt;
      line-height: 1.15;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
    .c1 {
      color: #222222;
      font-weight: 400;
      text-decoration: none;
      vertical-align: baseline;
      font-size: 11pt;
      font-family: "Times New Roman";
      font-style: normal;
    }
    .c3 {
      color: #222222;
      font-weight: 700;
      text-decoration: none;
      vertical-align: baseline;
      font-size: 12pt;
      font-family: "Times New Roman";
      font-style: normal;
    }
    .c10 {
      background-color: #ffffff;
      padding-top: 0pt;
      padding-bottom: 5pt;
      line-height: 1.15;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
    .c46 {
      background-color: #ffffff;
      padding-top: 0pt;
      padding-bottom: 8pt;
      line-height: 1.15;
      orphans: 2;
      widows: 2;
      text-align: justify;
    }
    .c34 {
      padding-top: 0pt;
      padding-bottom: 0pt;
      line-height: 1.15;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
    .c39 {
      padding-top: 0pt;
      padding-bottom: 0pt;
      line-height: 1.15;
      orphans: 2;
      widows: 2;
      text-align: justify;
    }
    .c16 {
      font-size: 12pt;
      font-family: "Times New Roman";
      color: #222222;
      font-weight: 700;
    }
    .c14 {
      border-spacing: 0;
      border-collapse: collapse;
      margin-right: auto;
    }
    .c8 {
      color: #222222;
      text-decoration: none;
      vertical-align: baseline;
      font-style: normal;
    }
    .c27 {
      color: #000000;
      text-decoration: none;
      vertical-align: baseline;
      font-style: normal;
    }
    .c32 {
      font-size: 12pt;
      font-family: "Times New Roman";
      font-weight: 700;
    }
    .c21 {
      font-weight: 700;
      font-size: 11pt;
      font-family: "Times New Roman";
    }
    .c20 {
      font-weight: 400;
      font-size: 11pt;
      font-family: "Arial";
    }
    .c7 {
      font-size: 12pt;
      font-family: "Times New Roman";
      font-weight: 400;
    }
    .c43 {
      background-color: #ffffff;
      max-width: 451.4pt;
      padding: 72pt 72pt 72pt 72pt;
    }
    .c26 {
      font-size: 7pt;
      font-family: "Times New Roman";
      font-weight: 400;
    }
    .c45 {
      font-family: "Times New Roman";
      font-weight: 400;
    }
    .c44 {
      font-family: "Times New Roman";
      font-weight: 700;
    }
    .c37 {
      height: 50.5pt;
    }
    .c38 {
      background-color: #ff0000;
    }
    .c48 {
      vertical-align: super;
    }
    .c9 {
      height: 25pt;
    }
    .c28 {
      height: 11pt;
    }
    .c18 {
      height: 37pt;
    }
    .c17 {
      height: 24.2pt;
    }
    .c40 {
      height: 37.8pt;
    }
    .c33 {
      height: 31pt;
    }
    .c25 {
      height: 64pt;
    }
    .c36 {
      color: #1155cc;
    }
    .c23 {
      color: #222222;
    }
    .title {
      padding-top: 0pt;
      color: #000000;
      font-size: 26pt;
      padding-bottom: 3pt;
      font-family: "Arial";
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
    .subtitle {
      padding-top: 0pt;
      color: #666666;
      font-size: 15pt;
      padding-bottom: 16pt;
      font-family: "Arial";
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
    li {
      color: #000000;
      font-size: 11pt;
      font-family: "Arial";
    }
    p {
      margin: 0;
      color: #000000;
      font-size: 11pt;
      font-family: "Arial";
    }
    h1 {
      padding-top: 20pt;
      color: #000000;
      font-size: 20pt;
      padding-bottom: 6pt;
      font-family: "Arial";
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
    h2 {
      padding-top: 18pt;
      color: #000000;
      font-size: 16pt;
      padding-bottom: 6pt;
      font-family: "Arial";
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
    h3 {
      padding-top: 16pt;
      color: #434343;
      font-size: 14pt;
      padding-bottom: 4pt;
      font-family: "Arial";
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
    h4 {
      padding-top: 14pt;
      color: #666666;
      font-size: 12pt;
      padding-bottom: 4pt;
      font-family: "Arial";
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
    h5 {
      padding-top: 12pt;
      color: #666666;
      font-size: 11pt;
      padding-bottom: 4pt;
      font-family: "Arial";
      line-height: 1.15;
      page-break-after: avoid;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
    h6 {
      padding-top: 12pt;
      color: #666666;
      font-size: 11pt;
      padding-bottom: 4pt;
      font-family: "Arial";
      line-height: 1.15;
      page-break-after: avoid;
      font-style: italic;
      orphans: 2;
      widows: 2;
      text-align: left;
    }
    
  </style>
</head>
<body class="doc-content">

  <p class="c19"><span class="c3">Dear Team,</span></p>
  <p class="c19"><span class="c8 c7">&nbsp;</span></p>
  <p class="c4">
    <span class="c7">Warm greetings from </span
    ><span class="c32"
      >Dr B R Ambedkar National Institute of Technology, Jalandhar
      (Punjab)</span
    ><span class="c7"
      >&nbsp;The institute is directly funded by the Ministry of Education,
      Govt. of India, New Delhi) The Institute is well known for providing
      technical education in various fields of </span
    ><span class="c32">Engineering, Management and applied sciences</span
    ><span class="c27 c7"
      >. The institute enjoys a very cordial and warm relationship with the
      industry.
    </span>
  </p>
  <p class="c4">
    <span class="c7 c23">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span
    ><span class="c16">Dr B R Ambedkar</span><span class="c7 c23">&nbsp;</span
    ><span class="c16"
      >National Institute of Technology, Jalandhar has bagged 46th</span
    ><span class="c16 c48">&nbsp;</span
    ><span class="c16"
      >rank among the Top 200 engineering colleges, in the recently declared
      NIRF (National Institutional Ranking Framework) ranking.</span
    ><span class="c7 c23"
      >&nbsp;This remarkable achievement has been possible due to continuous
      efforts put in by the institute administration, faculty, staff,
      students, alumni and to a great extent by esteemed recruiters who have
      always shown great enthusiasm and confidence in recruiting graduates
      from various engineering, management and applied science streams for
      diverse business as well as R&amp;D activities. Many reputed Private and
      Govt. recruiters belonging to the core engineering, IT sector,</span
    ><span class="c7"
      >&nbsp;Financial as well as Educational sector have conducted Virtual/
      Campus placement drives or offered PPOs.</span
    ><span class="c27 c32"
      >&nbsp;A few of our esteemed recruiters among these are Microsoft,
      Amazon, Goldman Sachs, Intuit, Sprinkler, Optum, Deloitte, Standard
      Chartered, Oracle, Infosys, Wipro, Accenture, Paytm, Vardhman, Maruti
      Suzuki, SRF, Tata Power, Suzlon, HPCL, BPCL, EIL, BEL, C-Dot, C-DAC,
      Philips, Samsung, etc. More than 150 Companies visited at NIT Jalandhar
      for campus recruitment during Academic Session 2022-23. The Placement
      team at the Centre for Training and Placement cell of NIT Jalandhar
      would like to convey its heartfelt thanks to esteemed recruiters for
      their continuous cooperation and confidence shown in the students of NIT
      Jalandhar.</span
    >
  </p>
  <p class="c4">
    <span class="c7 c23"
      >In order to further increase liaison with our recruiters and to provide
      them with professional and competent human resources, the placement team
      of the institute </span
    ><span class="c16"
      >would like to request you to give the placement opportunity to our
      promising engineering, management &amp; science students who will be
      passing out in 2024.</span
    ><span class="c7 c23"
      >&nbsp;We also have a provision of internship for final year students
      with the duration of six months for B.Tech students starting from
      January 2024 and eleven months to one year for M.Tech students. </span
    ><span class="c16"
      >We also request you to convey us the internship slots available with
      you for our pre-final year B.Tech students who will be passing out in
      2025</span
    ><span class="c8 c7"
      >. The duration is six to eight weeks. The internship opportunities will
      prepare these students to work on live projects/ industrial problems and
      earn PPOs.</span
    >
  </p>
  <p class="c46">
    <span class="c3"
      >The Various B.Tech., M. Tech., MBA and M.Sc. programmes being offered
      by the Institute are given below:</span
    >
  </p>
  <a id="t.bf4f64f171f10cd66ba281ab5a6d4cc16529d343"></a><a id="t.0"></a>
  <table class="c14">
    <tr class="c25">
      <td class="c11" colspan="1" rowspan="1">
        <p class="c6">
          <span class="c23 c45">&nbsp;</span
          ><span class="c8 c21">Department</span>
        </p>
      </td>
      <td class="c30" colspan="1" rowspan="1">
        <p class="c22"><span class="c8 c21">B. Tech,</span></p>
        <p class="c22"><span class="c8 c21">(4-Year programme)</span></p>
      </td>
      <td class="c29" colspan="1" rowspan="1">
        <p class="c22"><span class="c8 c21">M. Tech/M.Sc./MBA</span></p>
        <p class="c22"><span class="c8 c21">(2-Year Programme)</span></p>
      </td>
      <td class="c31" colspan="1" rowspan="1">
        <p class="c22"><span class="c8 c21">PhD </span></p>
        <p class="c22"><span class="c8 c21">Programme</span></p>
      </td>
    </tr>
    <tr class="c18">
      <td class="c11" colspan="1" rowspan="1">
        <p class="c2">
          <span class="c1">Computer Science &amp; Engineering</span>
        </p>
      </td>
      <td class="c5" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
      <td class="c24" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
      <td class="c13" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
    </tr>
    <tr class="c17">
      <td class="c11" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">Information Technology</span></p>
      </td>
      <td class="c5" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">&nbsp;</span></p>
      </td>
      <td class="c24" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">&nbsp;</span></p>
      </td>
      <td class="c13" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
    </tr>
    <tr class="c18">
      <td class="c11" colspan="1" rowspan="1">
        <p class="c2">
          <span class="c1">Electronics and Communication Engineering</span>
        </p>
      </td>
      <td class="c5" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">&nbsp;</span></p>
      </td>
      <td class="c24" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">&nbsp;</span></p>
      </td>
      <td class="c13" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
    </tr>
    <tr class="c17">
      <td class="c11" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">Electrical Engineering</span></p>
      </td>
      <td class="c5" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">&nbsp;</span></p>
      </td>
      <td class="c29 c38" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">&nbsp;</span></p>
      </td>
      <td class="c13" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
    </tr>
    <tr class="c18">
      <td class="c11" colspan="1" rowspan="1">
        <p class="c2">
          <span class="c1">Instrumentation and Control Engineering</span>
        </p>
      </td>
      <td class="c5" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
      <td class="c24" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
      <td class="c13" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
    </tr>
    <tr class="c17">
      <td class="c11" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">Mechanical Engineering</span></p>
      </td>
      <td class="c5" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
      <td class="c24" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
      <td class="c13" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
    </tr>
    <tr class="c18">
      <td class="c11" colspan="1" rowspan="1">
        <p class="c2">
          <span class="c1">Industrial and Production Engineering</span>
        </p>
      </td>
      <td class="c5" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
      <td class="c24" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
      <td class="c13" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
    </tr>
    <tr class="c17">
      <td class="c11" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">Chemical Engineering</span></p>
      </td>
      <td class="c5" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
      <td class="c24" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
      <td class="c13" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
    </tr>
    <tr class="c17">
      <td class="c11" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">Civil Engineering</span></p>
      </td>
      <td class="c5" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">&nbsp;</span></p>
      </td>
      <td class="c24" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">&nbsp;</span></p>
      </td>
      <td class="c13" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
    </tr>
    <tr class="c17">
      <td class="c11" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">Biotechnology</span></p>
      </td>
      <td class="c5" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">&nbsp;</span></p>
      </td>
      <td class="c24" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">&nbsp;</span></p>
      </td>
      <td class="c13" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
    </tr>
    <tr class="c18">
      <td class="c11" colspan="1" rowspan="1">
        <p class="c2">
          <span class="c1">Textile Technology &amp; Management</span>
        </p>
      </td>
      <td class="c5" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">&nbsp;</span></p>
      </td>
      <td class="c24" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">&nbsp;</span></p>
      </td>
      <td class="c13" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
    </tr>
    <tr class="c17">
      <td class="c11" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">Renewable Energy</span></p>
      </td>
      <td class="c15" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">&nbsp;</span></p>
      </td>
      <td class="c24" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">&nbsp;</span></p>
      </td>
      <td class="c31 c38" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
    </tr>
    <tr class="c17">
      <td class="c11" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">Artificial Intelligence</span></p>
      </td>
      <td class="c15" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">&nbsp;</span></p>
      </td>
      <td class="c24" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">&nbsp;</span></p>
      </td>
      <td class="c31 c38" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
    </tr>
    <tr class="c37">
      <td class="c11" colspan="1" rowspan="1">
        <p class="c22">
          <span class="c23 c44">M. Sc. &nbsp; &nbsp;- &nbsp; </span
          ><span class="c1">Physics</span>
        </p>
        <p class="c22">
          <span class="c1"
            >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-
            &nbsp;Chemistry</span
          >
        </p>
        <p class="c22">
          <span class="c1"
            >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- &nbsp;
            Mathematics</span
          >
        </p>
      </td>
      <td class="c15" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
      <td class="c24" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">&nbsp;</span></p>
      </td>
      <td class="c13" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
    </tr>
    <tr class="c40">
      <td class="c11" colspan="1" rowspan="1">
        <p class="c2">
          <span class="c44 c23">MBA &nbsp; &nbsp; - &nbsp;</span
          ><span class="c1">Finance / Marketing/ HR</span>
        </p>
      </td>
      <td class="c15" colspan="1" rowspan="1">
        <p class="c2"><span class="c1">&nbsp;</span></p>
      </td>
      <td class="c24" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
      <td class="c13" colspan="1" rowspan="1">
        <p class="c0"><span class="c8 c20"></span></p>
      </td>
    </tr>
  </table>
  <p class="c19"><span class="c8 c7">&nbsp;</span></p>
  <a id="t.6c323efa24d126a47e9e7abb3cd7e97b8ba75d77"></a><a id="t.1"></a>
  <table class="c14">
    <tr class="c9">
      <td class="c35" colspan="1" rowspan="1">
        <p class="c39"><span class="c8 c7">&nbsp;</span></p>
      </td>
      <td class="c41" colspan="1" rowspan="1">
        <p class="c39"><span class="c3">Available</span></p>
      </td>
    </tr>
  </table>
  <p class="c19">
    <span class="c7">&nbsp;</span><span class="c8 c7">&nbsp;</span>
  </p>
  <a id="t.33ffdc9eb27bea735c8dbea8bc47b4df8d071765"></a><a id="t.2"></a>
  <table class="c14">
    <tr class="c33">
      <td class="c12" colspan="1" rowspan="1">
        <p class="c39"><span class="c8 c7">&nbsp;</span></p>
      </td>
      <td class="c47" colspan="1" rowspan="1">
        <p class="c39"><span class="c3">Not Available</span></p>
      </td>
    </tr>
  </table>
  <p class="c4"><span class="c7 c8">&nbsp;</span></p>
  <p class="c4">
    <span class="c27 c7"
      >Kindly fill out the attached JAF and revert back for further
      discussion. Looking forward to your prompt reply.</span
    >
  </p>
  <p class="c19"><span class="c8 c7">&nbsp;</span></p>
  <p class="c19">
    <span class="c8 c7"
      >For any query, you can reach the below-mentioned officials via their
      email IDs/ mobile numbers</span
    >
  </p>
  <p class="c19"><span class="c8 c7">&nbsp;</span></p>
  <p class="c42">
    <span class="c7 c23">1)</span
    ><span class="c26 c23">&nbsp; &nbsp; &nbsp;</span
    ><span class="c7 c23">Dr. Ajay Gupta, Head</span
    ><span class="c16">&nbsp;(Training &amp; Placement)</span
    ><span class="c7 c23">&nbsp;</span
    ><span class="c7 c36">ctp@nitj.ac.in</span
    ><span class="c8 c7">&nbsp;(M) +91-9501030373</span>
  </p>
  <p class="c42">
    <span class="c7 c23">2)</span
    ><span class="c26 c23">&nbsp; &nbsp; &nbsp;</span
    ><span class="c8 c7">Mr. Rohit Rana, Placement Officer- 9465329300</span>
  </p>
  <p class="c42">
    <span class="c7 c23">3)</span
    ><span class="c23 c26">&nbsp; &nbsp; &nbsp;</span
    ><span class="c8 c7">Mr. Kamaljit, Office Assistant-9988005931</span>
  </p>
  <p class="c19 c28"><span class="c8 c20"></span></p>
  <p class="c19 c28"><span class="c8 c20"></span></p>
  <p class="c10"><span class="c8 c7">Regards</span></p>
  <p class="c10"><span class="c8 c7">Aditya Gupta</span></p>
  <p class="c10"><span class="c8 c7">Placement Coordinator</span></p>
  <p class="c10"><span class="c8 c7">(M): 9463778947</span></p>
  <p class="c28 c34"><span class="c20 c27"></span></p>
</body>
</html>
`

const mailer=async (name:string,email:string)=>{
  try{
    const transporter:any=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASS
        }
    });
    const mailOptions={
        from:'"Center of Training and Placement"',
        to:email,
        cc: 'ctp@nitj.ac.in',
        subject:'Invitation for Campus Recruitment at NIT Jalandhar 2023-24 Session',
        html:`${html}`,
        attachments:[
            {
                filename:'Placement JAF Form -2023-24',
                path:'./JAF.docx'
            }
        ]

    };
    const info=await transporter.sendMail(mailOptions);
    console.log('Message sent: %s',info.messageId);
  }
  catch(e:any){
    console.log(e);
  }
};

app.get('/', async (req:Request, res:Response) => {
    const data=fs.readFileSync('./test.csv','utf-8');
    const arr=data.split('\n');

    let obj:any=[];
    let sucess:any=[];
    let fail:any=[];

    for(let i=1;i<arr.length;i++){
        const temp=arr[i].split(',');
        if(temp[0]===undefined || temp[0]==='' || temp[1]===undefined || temp[1]==='') continue;
        obj.push({
            name:temp[0].replace('\r',''),
            email:temp[1].replace('\r','')
        });      
    }
  

    for(let i=0;i<obj.length;i++){
      if(obj[i].email!==undefined && obj[i].email!==''){
          const name:string=obj[i].name;
          const email:string=obj[i].email;
          try{
              await mailer(name,email);
              console.log('Email sent to '+name);
              sucess.push({
                  name:name,
                  email:email
              })
          }
          catch(err:any){
              fail.push({
                  name:name,
                  email:email
              })
              console.log(err);
          }
      }
    }

    const sucessData=JSON.stringify(sucess);
    const failData=JSON.stringify(fail);

    fs.appendFileSync('./sucess.json',sucessData);
    fs.writeFileSync('./fail.json',failData);

    res.send('Email sent successfully');
});




app.listen(3000, () => {
    console.log('Server started on port 3000');
});

