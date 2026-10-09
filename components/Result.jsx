import React, { useEffect } from "react";
import "./Result.css";
import pdfUrl from "../src/assets/23BCTG82.pdf";

const htmlContent = `<html style="min-height: 896px; --wh-aurora-intensity: 0.7; --wh-aurora-image-intensity: 0.2; --wh-font-size-factor: 1;"><head>
<meta charset="utf-8"/>
<title>~EST Campus~</title><link href="../images/android-icon-36x36.png" rel="icon" sizes="36x36" type="image/png"/>
<link href="../images/android-icon-36x36.png" rel="icon" sizes="36x36" type="image/png"/>
<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport"/>
<link href="../tools/bootstrap-3.3.4/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
<!-- Validator -->
<link href="../css/bootstrapValidator.css" rel="stylesheet" type="text/css"/>
<!-- font-awesome -->
<link href="../tools/font-awesome-4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
<!-- Ionicons -->
<link href="../tools/ionicons-2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css"/>
<!--Bootstrap Multiselect-->
<link href="../css/bootstrap-multiselect.css" rel="stylesheet" type="text/css"/>
<!-- Date Picker -->
<link href="../css/datepicker/datepicker3.css" rel="stylesheet" type="text/css"/>
<link href="../tools/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css" rel="stylesheet" type="text/css"/>
<!-- Daterange picker -->
<link href="../css/daterangepicker/daterangepicker-bs3.css" rel="stylesheet" type="text/css"/>
<!--Time Picker-->
<link href="../css/timepicker/bootstrap-timepicker.css" rel="stylesheet" type="text/css"/>
<!-- Theme style -->
<link href="../css/AdminLTE.css?v=1.1" rel="stylesheet" type="text/css"/>
<!--Sweet Alert-->
<link href="../tools/sweetalert/css/sweetalert.css" rel="stylesheet" type="text/css"/>
<link href="../tools/sweet-alert/css/sweetalert2.min.css" rel="stylesheet" type="text/css"/>
<!--Selectize-->
<link href="../tools/selectize/css/selectize.bootstrap4.css" rel="stylesheet" type="text/css"/>
<!--Jquery UI-->
<link href="../tools/jquery-ui-1.11.4/jquery-ui.min.css" rel="stylesheet" type="text/css"/>
<link href="../tools/jquery-ui-1.11.4/themes/redmond/jquery.ui.theme.css" rel="stylesheet" type="text/css"/>
<!-- Bootstrap Datatable -->
<link href="../css/datatables/dataTables.bootstrap.css" rel="stylesheet" type="text/css"/>
<link href="../css/datatables/dataTables.responsive.css" rel="stylesheet" type="text/css"/>
<link href="../tools/datatable/buttons.dataTables.min.css" type="text/css"/>
<!--Toastr-->
<link href="../css/plugins/toastr/toastr.min.css" rel="stylesheet" type="text/css"/>
<!-- Morris chart -->
<link href="../css/morris/morris.css" rel="stylesheet" type="text/css"/>
<!-- jvectormap -->
<link href="../css/jvectormap/jquery-jvectormap-1.2.2.css" rel="stylesheet" type="text/css"/>
<!-- bootstrap wysihtml5 - text editor -->
<link href="../css/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css" rel="stylesheet" type="text/css"/>
<!-- fullCalendar -->
<link href="../tools/fullcalendar-2.9.0/fullcalendar.css" rel="stylesheet" type="text/css"/>
<link href="../tools/fullcalendar-2.9.0/fullcalendar.print.css" media="print" rel="stylesheet" type="text/css"/>
<!--Tool Tips-->
<link href="../css/plugins/tooltip/tooltipster.css" rel="stylesheet"/>
<link href="../css/plugins/tooltip/tooltipster-punk.css" rel="stylesheet"/>
<!-- jstree -->
<link href="../tools/jstree/themes/default/style.min.css" rel="stylesheet"/>
<!--Jqgrid CSS-->
<link href="../tools/jqGrid-4.6.0/css/ui.jqgrid.css" media="screen" rel="stylesheet" type="text/css"/>
<link href="../tools/jqGrid-4.6.0/css/ui.jqgrid-bootstarp.css" media="screen" rel="stylesheet" type="text/css"/>
<style>.datepicker{z-index:1200 !important;}</style>
<link href="../tools/flipclock/compiled/flipclock.css" rel="stylesheet"/>
<link href="../css/bootstrap-select.css" rel="stylesheet"/>
<link href="../css/jquery.scrolling-tabs.min.css" rel="stylesheet"/>
<link href="../tools/bootstrap-toggle-master/css/bootstrap-toggle.css" rel="stylesheet"/>
<link href="../tools/assets/css/material-dashboard.css" rel="stylesheet"/>
<style>
		body > .header .logo {
		float: left;
		font-size: 20px;
		line-height: 42px;
		text-align: center;
		padding: 0px 0px;
		width: 220px;
		font-family: 'Kaushan Script', cursive;
		font-weight: 500;
		height: 50px;
		display: block;
	}
	</style>
<style type="text/css">
        	/**
			* @Author : JAKKAM DINESH KUMAR
			* DATE 	  : 01-02-2019
			* DETAILS : FOR LODING EFFECT
			*/
			.table > tbody > tr.success > td, .table > tbody > tr.success > th, .table > tbody > tr > td.success, .table > tbody > tr > th.success, .table > tfoot > tr.success > td, .table > tfoot > tr.success > th, .table > tfoot > tr > td.success, .table > tfoot > tr > th.success, .table > thead > tr.success > td, .table > thead > tr.success > th, .table > thead > tr > td.success, .table > thead > tr > th.success {background-color: #cbf3bb;}
			.alignRight { text-align: right; }
			.alignCenter{text-align: center;}
			figure{margin:0;transform:translate(-50%,-50%) rotate(0deg) scale(1.4,1.4);position:absolute;left:50%;top:50%;border-radius:150px;box-sizing:border-box;animation:rotation 20s infinite linear;}
			figure div:after{content:"";width:20px;height:20px;border:3px solid #14a5a1;box-sizing:border-box;position:absolute;left:20px;top:20px;animation:shuffle 2s infinite;}
			figure div:nth-child(1){transform:rotate(0deg)}
			figure div:nth-child(1):after{animation-delay:-0.5s;}
			figure div:nth-child(2){transform:rotate(45deg)}
			figure div:nth-child(2):after{animation-delay:-1s;}
			figure div:nth-child(3){transform:rotate(90deg)}
			figure div:nth-child(3):after{animation-delay:-1.5s;}
			figure div:nth-child(4){transform:rotate(135deg)}
			figure div:nth-child(4):after{animation-delay:-2s;}
			figure div:nth-child(5){transform:rotate(180deg)}
			figure div:nth-child(5):after{animation-delay:-2.5s;}
			figure div:nth-child(6){transform:rotate(225deg)}
			figure div:nth-child(6):after{animation-delay:-3s;}
			figure div:nth-child(7){transform:rotate(270deg)}
			figure div:nth-child(7):after{animation-delay:-3.5s;}
			figure div:nth-child(8){transform:rotate(315deg)}
			figure div:nth-child(8):after{animation-delay:-4;}

			@keyframes rotation{
			  100%{transform:translate(-50%,-50%) rotate(-360deg) scale(1.4,1.4);}
			}
			@keyframes shuffle{
			  50%{transform:scale(0.4,0.4) rotate(-90deg);border-radius:50%;}
			}
			.check { 
			    width:100%;  
			}
			div.card {
			  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			}
		</style>
<style> /* devanagari */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 100;
      src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/v20/pxiGyp8kv8JHgFVrLPTucXtAKPY.woff2) format('woff2');
      unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 100;
      src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/v20/pxiGyp8kv8JHgFVrLPTufntAKPY.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 100;
      src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/v20/pxiGyp8kv8JHgFVrLPTucHtA.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* devanagari */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/v20/pxiByp8kv8JHgFVrLGT9Z11lFc-K.woff2) format('woff2');
      unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* poppins light */
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/Poppins-Light.ttf) format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

    /* poppins regular */
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/Poppins-Regular.ttf) format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* poppins thin */
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 100;
        src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/Poppins-Thin.ttf) format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* poppins medium */
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/Poppins-Medium.ttf) format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* poppins semi bold */
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/Poppins-SemiBold.ttf) format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* poppins bold */
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        src: url(chrome-extension://adikhbfjdbjkhelbdnffogkobkekkkej/assets/poppins/Poppins-Bold.ttf) format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    </style><style id="highlight-mengshou-style">
    .highlight-mengshou-wrap {
        background: #ff9;
        cursor: pointer;
    }
    .highlight-mengshou-wrap.active {
        background: #ffb;
    }
</style></head>
<body class="pace-done" style="min-height: 896px;"><div class="pace pace-inactive"><div class="pace-progress" data-progress="99" data-progress-text="100%" style="width: 100%;">
<div class="pace-progress-inner"></div>
</div>
<div class="pace-activity"></div></div>
<div class="row">
<div class="col-sm-12">
<div class="nav-tabs-custom">
<ul class="nav nav-tabs">
<li class="active"><a data-toggle="tab" href="#tabSemesterResult">Semester Result</a></li>

</ul>
<div class="tab-content">
<!-- Tab For Semester Result Start-->
<div class="tab-pane active" id="tabSemesterResult">
<div class="panel panel-success">
<div align="center" class="panel-heading" style="background-color: #4A8F00;border-color: #4A8F00;color: #FFF;"><div style="display: flex; justify-content: space-between; align-items: center; padding: 0 10px;"><span>SEMESTER RESULT</span><button class="btn btn-success pull-right" id="btnReport" name="btnReport" onclick="window.Final_Semester_Result_pdf_Download()" style="margin: 5px;" type="button"><i class="fa fa-fw fa-download"></i>  Download</button></div></div>
<div class="panel-body" id="ShowSemesterResult"><div class="row" style="padding: 20px 0px;width: 80%;margin: 0px auto;">
<div class="col-sm-10 col-sm-offset-1">

</div>
</div><div style="width: 80%;height: 600px;border: 3px solid rgb(0, 0, 0);margin: 10px auto;">
<table style="width:100%;">
<tbody>
<tr style="background-color: rgb(248, 176, 68);">
<th style="text-align: center;padding: 10px 0px;border-bottom: 1px solid rgb(0, 0, 0);">SEMESTER - 1</th>
</tr>
</tbody>
</table>
<table style="width:100%;margin: 15px 0px;">
<tbody>
<tr>
<td style="width: 30%;padding-left: 40px;">Student Roll No : </td>
<td style="font-weight: 700;font-family: arial;color: rgb(0, 48, 255);font-weight: 800;">23BCTG82</td>
</tr>
<tr>
<td style="width: 30%;padding-left: 40px;">Student Name : </td>
<td style="font-weight: 700;font-family: arial;">ANISH ANIKET</td>
</tr>
<tr>
<td style="width: 30%;padding-left: 40px;">Course : </td>
<td style="font-weight: 700;font-family: arial;">Bachelor of Technology</td>
</tr>
<tr>
<td style="width: 30%;padding-left: 40px;">Branch : </td>
<td style="font-weight: 700;font-family: arial;">Computer Science &amp; Engineering</td>
</tr>
</tbody>
</table>
<table style="width:90%;border: 1px solid #000;border-collapse: collapse;margin:0 auto;">
<tbody><tr style="background-color: rgb(86, 86, 86);color: rgb(255, 255, 255);">
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Slno</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Paper Code</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Paper Name</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Credit</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Grade</th>
</tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTBS-T-BS-005</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">ENGINEERING MATHEMATICS -I</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">S</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">2</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTBS-T-BS-006</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">ENGINEERING PHYSICS</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">D</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTBS-T-MC-008</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">ENVIRONMENTAL SCIENCE AND ENGINEERING</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">0</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">B</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">4</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-T-ES-001</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">COMPUTER PROGRAMMING #</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">D</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">5</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTEE-T-ES-001</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">BASIC ELECTRICAL ENGINEERING</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">2</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">S</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">6</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">IPT</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">INDUCTION PROGRAM</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">0</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">A</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">7</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTBS-P-BS-007</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">ENGINEERING PHYSICS LAB</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">A</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">8</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTBS-P-ES-009</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">MANUFACTURING PRACTICES</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">E</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">9</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-P-ES-002</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">COMPUTER PROGRAMMING LAB</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">2</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">A</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">10</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTEE-P-ES-002</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">BASIC ELECTRICAL ENGINEERING LAB</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">A</td></tr></tbody></table>
<table style="background-color: rgb(104, 218, 255);color: rgb(5, 26, 255);margin-top: 30px;width: 40%;border-radius: 0px 30px 30px 0px;">
<tbody>
<tr>
<th style="padding: 5px 30px;text-align: center;border-right: 4px dashed rgb(255, 255, 255);">SGPA  :  4.44</th>
<th style="padding: 0px 30px;"></th>
</tr>
</tbody>
</table></div><div style="width: 80%;height: 600px;border: 3px solid rgb(0, 0, 0);margin: 10px auto;">
<table style="width:100%;">
<tbody>
<tr style="background-color: rgb(248, 176, 68);">
<th style="text-align: center;padding: 10px 0px;border-bottom: 1px solid rgb(0, 0, 0);">SEMESTER - 2</th>
</tr>
</tbody>
</table>
<table style="width:100%;margin: 15px 0px;">
<tbody>
<tr>
<td style="width: 30%;padding-left: 40px;">Student Roll No : </td>
<td style="font-weight: 700;font-family: arial;color: rgb(0, 48, 255);font-weight: 800;">23BCTG82</td>
</tr>
<tr>
<td style="width: 30%;padding-left: 40px;">Student Name : </td>
<td style="font-weight: 700;font-family: arial;">ANISH ANIKET</td>
</tr>
<tr>
<td style="width: 30%;padding-left: 40px;">Course : </td>
<td style="font-weight: 700;font-family: arial;">Bachelor of Technology</td>
</tr>
<tr>
<td style="width: 30%;padding-left: 40px;">Branch : </td>
<td style="font-weight: 700;font-family: arial;">Computer Science &amp; Engineering</td>
</tr>
</tbody>
</table>
<table style="width:90%;border: 1px solid #000;border-collapse: collapse;margin:0 auto;">
<tbody><tr style="background-color: rgb(86, 86, 86);color: rgb(255, 255, 255);">
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Slno</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Paper Code</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Paper Name</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Credit</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Grade</th>
</tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTBS-T-BS-002</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">ENGINEERING CHEMISTRY</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">D</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">2</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTBS-T-BS-013</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">ENGINEERING MATHEMATICS -II</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">S</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTBS-T-HS-099</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">COMMUNICATIVE &amp; TECHNICAL ENGLISH</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">2</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">A</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">4</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTBS-T-MC-001</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">CONSTITUTION OF INDIA</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">0</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">C</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">5</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-T-ES-003</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">DATA STRUCTURES AND ALGORITHMS</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">F</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">6</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTEC-T-ES-001</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">BASIC ELECTRONICS ENGINEERING</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">2</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">S</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">7</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTBS-P-HS-011</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">COMMUNICATIVE &amp; TECHNICAL ENGLISH LAB</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">E</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">8</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-P-ES-004</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">DATA STRUCTURES &amp; ALGORITHMS LAB</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">2</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">A</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">9</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTBS-P-BS-003</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">ENGINEERING CHEMISTRY LAB</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">E</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">10</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTBS-P-ES-004</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">ENGINEERING GRAPHICS</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">E</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">11</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTEC-P-ES-002</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">BASIC ELECTRONICS ENGINEERING LAB</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">B</td></tr></tbody></table>
<table style="background-color: rgb(104, 218, 255);color: rgb(5, 26, 255);margin-top: 30px;width: 40%;border-radius: 0px 30px 30px 0px;">
<tbody>
<tr>
<th style="padding: 5px 30px;text-align: center;border-right: 4px dashed rgb(255, 255, 255);">SGPA  :  4.26</th>
<th style="padding: 0px 30px;">CGPA  :  4.34</th>
</tr>
</tbody>
</table></div><div style="width: 80%;height: 600px;border: 3px solid rgb(0, 0, 0);margin: 10px auto;">
<table style="width:100%;">
<tbody>
<tr style="background-color: rgb(248, 176, 68);">
<th style="text-align: center;padding: 10px 0px;border-bottom: 1px solid rgb(0, 0, 0);">SEMESTER - 3</th>
</tr>
</tbody>
</table>
<table style="width:100%;margin: 15px 0px;">
<tbody>
<tr>
<td style="width: 30%;padding-left: 40px;">Student Roll No : </td>
<td style="font-weight: 700;font-family: arial;color: rgb(0, 48, 255);font-weight: 800;">23BCTG82</td>
</tr>
<tr>
<td style="width: 30%;padding-left: 40px;">Student Name : </td>
<td style="font-weight: 700;font-family: arial;">ANISH ANIKET</td>
</tr>
<tr>
<td style="width: 30%;padding-left: 40px;">Course : </td>
<td style="font-weight: 700;font-family: arial;">Bachelor of Technology</td>
</tr>
<tr>
<td style="width: 30%;padding-left: 40px;">Branch : </td>
<td style="font-weight: 700;font-family: arial;">Computer Science &amp; Engineering</td>
</tr>
</tbody>
</table>
<table style="width:90%;border: 1px solid #000;border-collapse: collapse;margin:0 auto;">
<tbody><tr style="background-color: rgb(86, 86, 86);color: rgb(255, 255, 255);">
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Slno</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Paper Code</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Paper Name</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Credit</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Grade</th>
</tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTBS-T-BS-014</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">BIOLOGY FOR ENGINEERS</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">C</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">2</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTBS-T-BS-017</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">MATHEMATICS -III FOR COMPUTER SCIENCES</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">4</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">C</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTBS-T-ES-013</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">BASICS OF MECHANICAL ENGINEERING</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">4</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">D</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">4</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-T-ES-005</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">OOP USING JAVA</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">S</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">5</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-T-PC-007</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">COMPUTER ORGANIZATION &amp; ARCHITECTURE</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">F</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">6</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTEC-T-ES-003</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">DIGITAL ELECTRONICS</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">S</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">7</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTBS-P-HS-012</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">CORPORATE COMMUNICATION LAB</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">E</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">8</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-P-ES-006</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">OOP USING JAVA LAB</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">A</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">9</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-P-PC-008</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">COMPUTER ORGANIZATION &amp; ARCHITECTURE LAB</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">E</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">10</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTEC-P-ES-004</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">DIGITAL ELECTRONICS LAB</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">E</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">11</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTII-P-PJ-001</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">SUMMER INTERNSHIP -I</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">E</td></tr></tbody></table>
<table style="background-color: rgb(104, 218, 255);color: rgb(5, 26, 255);margin-top: 30px;width: 40%;border-radius: 0px 30px 30px 0px;">
<tbody>
<tr>
<th style="padding: 5px 30px;text-align: center;border-right: 4px dashed rgb(255, 255, 255);">SGPA  :  4.24</th>
<th style="padding: 0px 30px;"></th>
</tr>
</tbody>
</table></div><div style="width: 80%;height: 600px;border: 3px solid rgb(0, 0, 0);margin: 10px auto;">
<table style="width:100%;">
<tbody>
<tr style="background-color: rgb(248, 176, 68);">
<th style="text-align: center;padding: 10px 0px;border-bottom: 1px solid rgb(0, 0, 0);">SEMESTER - 4</th>
</tr>
</tbody>
</table>
<table style="width:100%;margin: 15px 0px;">
<tbody>
<tr>
<td style="width: 30%;padding-left: 40px;">Student Roll No : </td>
<td style="font-weight: 700;font-family: arial;color: rgb(0, 48, 255);font-weight: 800;">23BCTG82</td>
</tr>
<tr>
<td style="width: 30%;padding-left: 40px;">Student Name : </td>
<td style="font-weight: 700;font-family: arial;">ANISH ANIKET</td>
</tr>
<tr>
<td style="width: 30%;padding-left: 40px;">Course : </td>
<td style="font-weight: 700;font-family: arial;">Bachelor of Technology</td>
</tr>
<tr>
<td style="width: 30%;padding-left: 40px;">Branch : </td>
<td style="font-weight: 700;font-family: arial;">Computer Science &amp; Engineering</td>
</tr>
</tbody>
</table>
<table style="width:90%;border: 1px solid #000;border-collapse: collapse;margin:0 auto;">
<tbody><tr style="background-color: rgb(86, 86, 86);color: rgb(255, 255, 255);">
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Slno</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Paper Code</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Paper Name</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Credit</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Grade</th>
</tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTBS-T-BS-018</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">MATHEMATICS -IV FOR COMPUTER SCIENCES</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">4</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">F</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">2</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTBS-T-HS-018</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">ENGINEERING ECONOMICS</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">S</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-T-PC-009</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">DATABASE MANAGEMENT SYSTEMS</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">4</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">D</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">4</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-T-PC-011</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">DESIGN &amp; ANALYSIS OF ALGORITHMS</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">4</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">F</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">5</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-T-PC-016</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">OPERATING SYSTEMS</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">F</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">6</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-T-PE-999</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">ARTIFICIAL INTELLIGENCE #</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">C</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">7</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-P-PC-010</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">DATABASE MANAGEMENT SYSTEMS LAB</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">2</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">C</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">8</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-P-PC-013</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">DESIGN &amp; ANALYSIS OF ALGORITHMS LAB</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">B</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">9</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-P-PC-017</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">OPERATING SYSTEMS LAB</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">B</td></tr></tbody></table>
<table style="background-color: rgb(104, 218, 255);color: rgb(5, 26, 255);margin-top: 30px;width: 40%;border-radius: 0px 30px 30px 0px;">
<tbody>
<tr>
<th style="padding: 5px 30px;text-align: center;border-right: 4px dashed rgb(255, 255, 255);">SGPA  :  2.56</th>
<th style="padding: 0px 30px;">CGPA  :  3.79</th>
</tr>
</tbody>
</table></div><div style="width: 80%;height: 600px;border: 3px solid rgb(0, 0, 0);margin: 10px auto;">
<table style="width:100%;">
<tbody>
<tr style="background-color: rgb(248, 176, 68);">
<th style="text-align: center;padding: 10px 0px;border-bottom: 1px solid rgb(0, 0, 0);">SEMESTER - 5</th>
</tr>
</tbody>
</table>
<table style="width:100%;margin: 15px 0px;">
<tbody>
<tr>
<td style="width: 30%;padding-left: 40px;">Student Roll No : </td>
<td style="font-weight: 700;font-family: arial;color: rgb(0, 48, 255);font-weight: 800;">23BCTG82</td>
</tr>
<tr>
<td style="width: 30%;padding-left: 40px;">Student Name : </td>
<td style="font-weight: 700;font-family: arial;">ANISH ANIKET</td>
</tr>
<tr>
<td style="width: 30%;padding-left: 40px;">Course : </td>
<td style="font-weight: 700;font-family: arial;">Bachelor of Technology</td>
</tr>
<tr>
<td style="width: 30%;padding-left: 40px;">Branch : </td>
<td style="font-weight: 700;font-family: arial;">Computer Science &amp; Engineering</td>
</tr>
</tbody>
</table>
<table style="width:90%;border: 1px solid #000;border-collapse: collapse;margin:0 auto;">
<tbody><tr style="background-color: rgb(86, 86, 86);color: rgb(255, 255, 255);">
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Slno</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Paper Code</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Paper Name</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Credit</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Grade</th>
</tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTBS-T-MC-020</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">UNIVERSAL HUMAN VALUES &amp; PROFESSIONAL ETHICS</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">0</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">B</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">2</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-T-PC-013</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">COMPUTER NETWORKS</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">S</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-T-PC-015</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">FORMAL LANGUAGES &amp; AUTOMATA THEORY</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">F</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">4</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-T-PC-022</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">MACHINE LEARNING</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">4</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">F</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">5</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-T-PE-045</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">DATA MINING AND DATA WAREHOUSING</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">C</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">6</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-T-PE-047</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">MOBILE COMPUTING</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">S</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">7</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTBS-P-HS-021</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">SOFT SKILLS &amp; INTER -PERSONAL SKILLS LAB</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">2</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">A</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">8</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-P-PC-014</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">COMPUTER NETWORKS LAB</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">C</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">9</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-P-PC-021</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">INTERNET &amp; WEB TECHNOLOGY LAB</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">2</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">A</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">10</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-P-PJ-025</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">SKILL LAB AND PROJECT -I</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">2</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">A</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">11</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTII-P-PJ-002</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">SUMMER INTERNSHIP - II</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">O</td></tr></tbody></table>
<table style="background-color: rgb(104, 218, 255);color: rgb(5, 26, 255);margin-top: 30px;width: 40%;border-radius: 0px 30px 30px 0px;">
<tbody>
<tr>
<th style="padding: 5px 30px;text-align: center;border-right: 4px dashed rgb(255, 255, 255);">SGPA  :  3.42</th>
<th style="padding: 0px 30px;"></th>
</tr>
</tbody>
</table></div><div style="width: 80%;height: 600px;border: 3px solid rgb(0, 0, 0);margin: 10px auto;">
<table style="width:100%;">
<tbody>
<tr style="background-color: rgb(248, 176, 68);">
<th style="text-align: center;padding: 10px 0px;border-bottom: 1px solid rgb(0, 0, 0);">SEMESTER - 6</th>
</tr>
</tbody>
</table>
<table style="width:100%;margin: 15px 0px;">
<tbody>
<tr>
<td style="width: 30%;padding-left: 40px;">Student Roll No : </td>
<td style="font-weight: 700;font-family: arial;color: rgb(0, 48, 255);font-weight: 800;">23BCTG82</td>
</tr>
<tr>
<td style="width: 30%;padding-left: 40px;">Student Name : </td>
<td style="font-weight: 700;font-family: arial;">ANISH ANIKET</td>
</tr>
<tr>
<td style="width: 30%;padding-left: 40px;">Course : </td>
<td style="font-weight: 700;font-family: arial;">Bachelor of Technology</td>
</tr>
<tr>
<td style="width: 30%;padding-left: 40px;">Branch : </td>
<td style="font-weight: 700;font-family: arial;">Computer Science &amp; Engineering</td>
</tr>
</tbody>
</table>
<table style="width:90%;border: 1px solid #000;border-collapse: collapse;margin:0 auto;">
<tbody><tr style="background-color: rgb(86, 86, 86);color: rgb(255, 255, 255);">
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Slno</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Paper Code</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Paper Name</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Credit</th>
<th style="padding: 5px 0px;text-align: center;border: 1px solid #000;border-collapse: collapse;">Grade</th>
</tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-T-PC-026</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">SOFTWARE ENGINEERING</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">C</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">2</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-T-PC-059</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">CRYPTOGRAPHY &amp; NETWORK SECURITY</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">F</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-T-PC-999</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">MICROCONTROLLERS &amp; EMBEDDED SYSTEMS</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">D</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">4</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-T-PE-028</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">COMPUTER GRAPHICS</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">D</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">5</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-T-PE-031</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">SOFT COMPUTING</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">S</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">6</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-T-PE-052</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">NATURAL LANGUAGE PROCESSING</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">3</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">F</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">7</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-P-PC-027</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">SOFTWARE ENGINEERING LAB</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">F</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">8</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-P-PC-028</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">CRYPTOGRAPHY &amp; NETWORK SECURITY LAB</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">1</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">C</td></tr><tr><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">9</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">BTCS-P-PE-023</td><td style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;">EMERGING TECHNOLOGIES LAB</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">2</td><td style="text-align:center;border: 1px solid #000;border-collapse: collapse;">C</td></tr></tbody></table>
<table style="background-color: rgb(104, 218, 255);color: rgb(5, 26, 255);margin-top: 30px;width: 40%;border-radius: 0px 30px 30px 0px;">
<tbody>
<tr>
<th style="padding: 5px 30px;text-align: center;border-right: 4px dashed rgb(255, 255, 255);">SGPA  :  3.00</th>
<th style="padding: 0px 30px;">CGPA  :  3.59</th>
</tr>
</tbody>
</table></div></div>
<!-- Disclaimer Section -->
<div style="margin: 20px auto; width: 80%; text-align: left;">
<p style="color: #ff0000; font-weight: bolder;">
										# indicates Cleared in Supplementary Examination.
									</p>
<p style="color: #ff0000; font-weight: bolder;margin: 10px auto;">
<strong>Disclaimer:</strong> The results shown above are provisional and subject to change after post-publication scrutiny.  
										The final grade sheet printed on colored high-security paper with an official serial number will be issued after scrutiny.
									</p>
</div>
</div>
</div>
<!-- Tab For Semester Result End-->
<!-- Tab For Exam Result Start-->

<!-- Tab For Exam Result End-->
</div>
<!--Model For Reevalution-->

</div>
</div>
</div>
<script src="../js/jquery-2.1.3.min.js" type="text/javascript"></script>
<script src="../js/crypto-js.min.js" type="text/javascript"></script>
<script src="../js/NormalEncrptionDecryption.js" type="text/javascript"></script>
<script src="../tools/bootstrap-3.3.4/js/bootstrap.min.js" type="text/javascript"></script>
<script src="../tools/jquery-ui-1.11.4/jquery-ui.min.js" type="text/javascript"></script>
<!-- Bootstrap WYSIHTML5 -->
<script src="../js/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js" type="text/javascript"></script>
<!-- iCheck -->
<script src="../js/plugins/iCheck/icheck.min.js" type="text/javascript"></script>
<!-- toaster -->
<script src="../tools/toastr/js/toastr.min.js" type="text/javascript"></script>
<!--Select2-->
<!--<script src="../academics/select2.min.js"></script>-->
<script src="../tools/bootstrap-multiselect/js/bootstrap-multiselect.js" type="text/javascript"></script>
<!-- Bootbox -->
<script src="../js/bootbox.min.js" type="text/javascript"></script>
<!-- AdminLTE App -->
<script src="../js/AdminLTE/app.js" type="text/javascript"></script>
<!-- AdminLTE for demo purposes -->
<!--<script src="../js/AdminLTE/demo.js" type="text/javascript"></script>-->
<!--Bootstrap Multiselect-->
<script src="../tools/bootstrap-multiselect/js/bootstrap-multiselect.js" type="text/javascript"></script>
<!--Bootstrap Validator-->
<script src="../js/bootstrapValidator.js" type="text/javascript"></script>
<!-- DATA TABES SCRIPT -->
<script src="../js/plugins/dataTables/jquery.dataTables.min.js" type="text/javascript"></script>
<script src="../js/plugins/dataTables/dataTables.bootstrap.min.js" type="text/javascript"></script>
<script src="../js/plugins/daterangepicker/daterangepicker.js" type="text/javascript"></script>
<script src="../js/plugins/datepicker/bootstrap-datepicker.js" type="text/javascript"></script>
<script src="../tools/datatable/dataTables.buttons.min.js" type="text/javascript"></script>
<script src="../tools/datatable/buttons.flash.min.js" type="text/javascript"></script>
<script src="../tools/datatable/jszip.min.js" type="text/javascript"></script>
<script src="../tools/datatable/pdfmake.min.js" type="text/javascript"></script>
<script src="../tools/datatable/vfs_fonts.js" type="text/javascript"></script>
<script src="../tools/datatable/buttons.html5.min.js" type="text/javascript"></script>
<!-- fullCalendar -->
<script src="../tools/fullcalendar-2.3.1/lib/moment.min.js" type="text/javascript"></script>
<script src="../tools/fullcalendar-2.3.1/fullcalendar.min.js" type="text/javascript"></script>
<script src="../tools/jquery-loading/jquery.loading.js?v=1478102990" type="text/javascript"></script>
<!--jstree-->
<script src="../tools/jstree/jstree.min.js" type="text/javascript"></script>
<!--user notification-->
<script src="../notification/user_notification.js?v=1.5" type="text/javascript"></script>
<!--Sweet Alert -->
<script src="../tools/sweet-alert/js/sweetalert2.min.js" type="text/javascript"></script>
<script src="../tools/sweet-alert/js/promise.min.js" type="text/javascript"></script>
<script src="../tools/selectize/js/standalone/selectize.js" type="text/javascript"></script>
<script type="text/javascript">
		//If in Datepicker Same Date Selected in 2 times showing Error By using this function Error Rectified
		function DataPickerShowHide(id)
		{
			\\$(id).on('show', function(e){
			    if ( e.date)  {
			         \\$(this).data('stickyDate', e.date);
			    }
			    else {
			         \\$(this).data('stickyDate', null);
			    }
			});
			\\$(id).on('hide', function(e){
			    var stickyDate = \\$(this).data('stickyDate');

			    if ( !e.date && stickyDate)  {
			        \\$(this).datepicker('setDate', stickyDate);
			        \\$(this).data('stickyDate', null);
			    }
			});
		}
	</script>
<script src="../tools/sweet-alert/js/sweetalert2.min.js" type="text/javascript"></script>
<script src="../tools/sweet-alert/js/promise.min.js" type="text/javascript"></script>
<script type="text/javascript">
		var reEvaluation = 0;
		var subjectArr = [];
		\\$(document).ready(function()
		{
			/**
			* @Author : JAKKAM DINESH KUMAR
			* DATE 	  : 01-02-2019
			* DETAILS : VIEW SEMESTER WISE RESULT DETAILS
			*/
			\\$("#ShowSemesterResult").html('<figure><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></figure>');
			\\$("#ShowSemesterResult").load("exam_result_db.php?oper=SHOW_SEMESTER_RESULT&role_code=M1Z5SEVJM2dub0NWWE5GZy82dHh2QT09", 
			function(responseTxt, statusTxt, xhr){
		        if(statusTxt == "success")
		        {
					//\\$("#ShowSemesterResult").html("<span style='color: #ff0000;font-weight: bolder;margin-right: 70%'>N.B: * MARK IS FOR RE-EVALUATED SUBJECTS.</span>");
				}
		        else if(statusTxt == "error")
		        {
					\\$("#ShowSemesterResult").html("<center >No Data Available</center>");
				}
			            
		    });
			\\$("#txtExamName").selectize();
		
			var table = \\$('#tblExamResult').DataTable({
				"lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]],
				"pageLength": 7,
				"bProcessing": false,
				"bServerSide": false, 
				"bStateSave":false,
				"bPaginate": false,
		        "bLengthChange": false,
		        "bFilter": false,
		        "bSort": false,
		        "bInfo": false,
		        "bAutoWidth": false,
		        "bDestroy":false,
		        "aoColumns": [
		        	{"sName" : "slno","sWidth":"8%","bSortable":"false","sClass":"alignCenter"},
		        	{"sName" : "subject_name","sClass":"alignCenter"},
		        	{"sName" : "full_mark","sWidth":"15%","sClass":"alignCenter"},
		        	{"sName" : "mark_secured","sWidth":"15%","sClass":"alignCenter"},
					{"sName" : "action",
					 "sWidth":"15%",
					 "data"  : null,
					 "sClass":"alignCenter",
					 "defaultContent": "<button id='viewAnswerSheet' action ='viewAnswerSheet' class='btn btn-info btn-sm btn-responsive'><i class='fa fa-edit'></i>&nbsp;Answer Sheet</button>"
					}
		        ]
			});	
			\\$("#btnsearchResult").click(function(){
				var exam_name = \\$("#txtExamName").selectize()[0].selectize.getValue();
				getExamResult(exam_name);
			});
			
			\\$('#tblExamResult tbody').on( 'click', 'button[action=viewAnswerSheet]', function (event) {
				var data = table.row( \\$(this).parents('tr') ).data();
				var oTable = \\$('#tblExamResult').dataTable();
					\\$(oTable.fnSettings().aoData).each(function (){
					\\$(this.nTr).removeClass('success');
				});
				\\$(event.target.parentNode.parentNode).addClass('success');
				\\$.ajax({
					url:"exam_result_db.php?oper=CHECK_DATE_FOR_VIEW_ANSWER_SHEET&role_code=M1Z5SEVJM2dub0NWWE5GZy82dHh2QT09",//DELETE...
					type:"post",
					data:{exam_code:data.exam_code},
					success:function(response){
						var result = jQuery.parseJSON(response);
						if(result.dbStatus == "SUCCESS"){
							window.open("mark_entry_by_examiner_scann_for_report.php?role_code=M1Z5SEVJM2dub0NWWE5GZy82dHh2QT09&exam_code="+data.exam_code+"&subject_code="+data.subject_code+"&bundle_no="+data.bundle_no+"&examiner_code=&examiner_name=&subject_name="+data.subject_name+"&student_code="+data.student_code+"&evaluation_no="+data.evaluation_no+"&exam_name="+data.exam_name+"&type=FOR_MARK_DETAILS","Mark by Examiner","left=0,top=0,width="+screen.width+",height="+screen.height+",menubar=0,toolbar=0,scrollbars=1");
						}
						else if(result.dbStatus == "NOT_DEFINE")
						{
							toastr.error(result.dbMessage);
							
						}else{
							toastr.error('oops something went wrong.');
						}
						
					},
					error:function()
				 	{
						toastr.error('Unable to process please contact support');
					}
				});
				
				
			});
			
			\\$("#btnApplyForReevaluation").click(function(){
				var exam_name = \\$("#txtExamName").selectize()[0].selectize.getValue();
					getApplyDetails(exam_name);
			});
			\\$("#btnApply").click(function(){
				var exam_code = \\$("#exam_code_for_reevaluation").val();
				var total = \\$("#reEvaluationTotalAmount").val();
				swal({
				  title: 'Are you sure?',
				  text: total+" of Due will be created.",
				  //type: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Yes',
				  animation: false
				}).then(function() {
		    		var data = new FormData(document.getElementById("frmReevaluation"));
					\\$.ajax({
						url:"exam_result_db.php?oper=APPLY_FOR_RE_EVALUATION&role_code=M1Z5SEVJM2dub0NWWE5GZy82dHh2QT09",
						type:"post",
						data:data,
						cache: false,
				        contentType: false,
				        processData: false,
						success:function(response){
							var result = jQuery.parseJSON(response);
							if(result.dbStatus == "SUCCESS"){
								toastr.success('Your record has been saved Successfully.');
								getApplyDetails(exam_code);
								\\$("#modalReevaluation").modal('hide');
							}
							else
							{
								toastr.error(result.dbMessage);  
							}
							
						},
						error:function()
					 	{
							toastr.error('Unable to process please contact support');
						}
					});
				},function(dismiss){}).done();
			});
		});
		function getExamResult(exam_name){
			\\$.ajax({
				url:"exam_result_db.php?oper=GETEXAMRESULT&role_code=M1Z5SEVJM2dub0NWWE5GZy82dHh2QT09",
				type:"post",
				data:{exam_name:exam_name},
				success:function(response){
					var result = jQuery.parseJSON(response);
					if(result.dbStatus == "SUCCESS"){
						var table = \\$('#tblExamResult').DataTable();
						table.clear().draw();
						table.rows.add(result.aaData).draw();
					}else if(result.dbStatus == "FAILURE"){
						if(result.dbMessage[0] == "22P02"){
							toastr.error('Sorry! Invalide input.');
						}else{
							toastr.error(result.dbMessage);
						}
					}else if(result.dbStatus == 'INVALID_INPUT'){
						toastr.error(result.dbMessage);
					}else if(result.dbStatus == "INVALID_REQUEST"){
						toastr.error(result.dbMessage);
					}else if(result.dbStatus == "SESSION_EXPIRED"){
						toastr.error(result.dbMessage);
					}else if(result.dbStatus == "ACCESS_DENIED"){
						toastr.error(result.dbMessage);
					}else{
						toastr.error(result.dbMessage);
					}
				},
				error:function()
			 	{
					toastr.error('Unable to process please contact support');
				}
			});
		}
		
		function checkForReevaluation(e,subject_code){
			var amount = parseFloat(\\$("#reEvaluationAmount").val());
			var reEvaluation = parseFloat(\\$("#reEvaluationTotalAmount").val());
			if(e.checked){
				reEvaluation = reEvaluation+amount;
				subjectArr.push(subject_code);
			}else{
				if(reEvaluation !=0 ){
					reEvaluation = reEvaluation-amount;
					subjectArr.splice( subjectArr.indexOf(subject_code), 1 );
				}
			}
			\\$("#reEvaluationTotalAmount").val(reEvaluation);
			\\$("#lblReevaluationTotalFee").html('<i class="fa fa-inr"></i>&nbsp;&nbsp;'+reEvaluation);
		}
		function window.Final_Semester_Result_pdf_Download()
		{
			window.open('final_semester_result_pdf_download.php?role_code=M1Z5SEVJM2dub0NWWE5GZy82dHh2QT09&student_code='+student_code+'&semester='+semester,'winexamduty','status=0,toolbar=0,menubar=0,scrollbars=1,resizable=1,width=600,height=800').focus();
		}
		
		function getApplyDetails(exam_name)
		{
			\\$.ajax({
				url:"exam_result_db.php?oper=GET_SUBJECT_FOR_APPLY&role_code=M1Z5SEVJM2dub0NWWE5GZy82dHh2QT09",
				type:"post",
				data:{exam_name:exam_name},
				success:function(response){
					var result = jQuery.parseJSON(response);
					\\$("#div-Re-evaluation-subject").html('');
					if(result.dbStatus == "SUCCESS"){
						\\$("#div-Re-evaluation-subject").append(result.html);
						\\$("#reEvaluationAmount").val(result.amount);
						\\$("#reEvaluationTotalAmount").val(result.re_evaluation_amount);
						\\$("#exam_code_for_reevaluation").val(exam_name);
						\\$("#lblReevaluation").html('<i class="fa fa-inr"></i>&nbsp;&nbsp;'+result.amount);
						\\$("#lblReevaluationTotalFee").html('<i class="fa fa-inr"></i>&nbsp;&nbsp;'+result.re_evaluation_amount);
						\\$("#modalReevaluation").modal('show');
					}else if(result.dbStatus == "FAILURE"){
						toastr.error(result.dbMessage);
					}else if(result.dbStatus == 'INVALID_INPUT'){
						toastr.error(result.dbMessage);
					}else if(result.dbStatus == "INVALID_REQUEST"){
						toastr.error(result.dbMessage);
					}else if(result.dbStatus == "SESSION_EXPIRED"){
						toastr.error(result.dbMessage);
					}else if(result.dbStatus == "ACCESS_DENIED"){
						toastr.error(result.dbMessage);
					}else{
						toastr.error(result.dbMessage);
					}
				},
				error:function()
			 	{
					toastr.error('Unable to process please contact support');
				}
			});
		}
	</script>
<div class="loading" id="loading" style="position: fixed; background: rgb(255, 255, 255); width: 130px; text-align: center; z-index: 10000; padding: 6px; border: 1px solid rgb(255, 255, 255); top: 0px; left: 493px; display: none;"><img src="../img/477-3.gif"/> Loading...</div><div class="swal2-container"><div class="swal2-overlay" tabindex="-1"></div><div class="swal2-modal" style="display: none; margin-top: -362px;" tabindex="-1"><div class="swal2-icon swal2-error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="swal2-icon swal2-question">?</div><div class="swal2-icon swal2-warning">!</div><div class="swal2-icon swal2-info">i</div><div class="swal2-icon swal2-success"><span class="line tip"></span> <span class="line long"></span><div class="placeholder"></div> <div class="fix"></div></div><img class="swal2-image"/><h2></h2><div class="swal2-content"></div><input class="swal2-input"/><select class="swal2-select"></select><div class="swal2-radio"></div><label class="swal2-checkbox" for="swal2-checkbox"><input id="swal2-checkbox" type="checkbox"/></label><textarea class="swal2-textarea"></textarea><div class="swal2-validationerror"></div><hr class="swal2-spacer"/><button class="swal2-confirm">OK</button><button class="swal2-cancel">Cancel</button><span class="swal2-close">×</span></div></div><div id="fs_div_all" style="all:initial;"></div><protonpass-root-da81 data-protonpass-role="root" data-protonpass-theme="os"></protonpass-root-da81><webhighlights-element-registry data-wh-world="anmhnwie" elements-count="66"></webhighlights-element-registry><div id="webhighlights-notificationshldjnlbobkdkghfidgoecgmklcemanhm"></div><style id="web-highlights-global-style-variables">:root { --wh-slate-50: #f8fafc;--wh-slate-100: #f1f5f9;--wh-slate-200: #e2e8f0;--wh-slate-300: #cbd5e1;--wh-slate-400: #94a3b8;--wh-slate-500: #64748b;--wh-slate-600: #475569;--wh-slate-700: #334155;--wh-slate-800: #1e293b;--wh-slate-900: #0f172a;--wh-slate-950: #020617;--wh-primary-50: rgb(188, 220, 205);--wh-primary-100: rgb(154, 208, 185);--wh-primary-200: rgb(120, 197, 164);--wh-primary-300: rgb(86, 186, 144);--wh-primary-400: rgb(53, 176, 125);--wh-primary-500: rgb(0, 179, 122);--wh-primary-600: hsl(161, 100%, 33%);--wh-primary-700: hsl(161, 100%, 31%);--wh-primary-800: hsl(161, 100%, 29%);--wh-primary-900: hsl(161, 100%, 25%);--wh-primary-950: hsl(161, 100%, 20%);--wh-secondary-50: hsl(218, 22%, 27%);--wh-secondary-100: hsl(218, 22%, 23%);--wh-secondary-200: hsl(218, 22%, 22%);--wh-secondary-300: hsl(218, 22%, 19%);--wh-secondary-400: hsl(218, 22%, 17%);--wh-secondary-500: hsl(218, 22%, 15%);--wh-secondary-600: hsl(218, 22%, 13%);--wh-secondary-700: hsl(218, 22%, 11%);--wh-secondary-800: hsl(218, 22%, 9%);--wh-secondary-900: hsl(218, 22%, 5%);--wh-secondary-950: hsl(218, 22%, 3%);--wh-gray-50: #f9fafb;--wh-gray-100: #f3f4f6;--wh-gray-200: #e5e7eb;--wh-gray-300: #d1d5db;--wh-gray-400: #9ca3af;--wh-gray-500: #6b7280;--wh-gray-600: #4b5563;--wh-gray-700: #374151;--wh-gray-800: #1f2937;--wh-gray-900: #111827;--wh-gray-950: #030712;--wh-zinc-50: #fafafa;--wh-zinc-100: #f4f4f5;--wh-zinc-200: #e4e4e7;--wh-zinc-300: #d4d4d8;--wh-zinc-400: #a1a1aa;--wh-zinc-500: #71717a;--wh-zinc-600: #52525b;--wh-zinc-700: #3f3f46;--wh-zinc-800: #27272a;--wh-zinc-900: #18181b;--wh-zinc-950: #09090b;--wh-neutral-50: #fafafa;--wh-neutral-100: #f5f5f5;--wh-neutral-200: #e5e5e5;--wh-neutral-300: #d4d4d4;--wh-neutral-400: #a3a3a3;--wh-neutral-500: #737373;--wh-neutral-600: #525252;--wh-neutral-700: #404040;--wh-neutral-800: #262626;--wh-neutral-900: #171717;--wh-neutral-950: #0a0a0a;--wh-stone-50: #fafaf9;--wh-stone-100: #f5f5f4;--wh-stone-200: #e7e5e4;--wh-stone-300: #d6d3d1;--wh-stone-400: #a8a29e;--wh-stone-500: #78716c;--wh-stone-600: #57534e;--wh-stone-700: #44403c;--wh-stone-800: #292524;--wh-stone-900: #1c1917;--wh-stone-950: #0c0a09;--wh-red-50: #fef2f2;--wh-red-100: #fee2e2;--wh-red-200: #fecaca;--wh-red-300: #fca5a5;--wh-red-400: #f87171;--wh-red-500: #ef4444;--wh-red-600: #dc2626;--wh-red-700: #b91c1c;--wh-red-800: #991b1b;--wh-red-900: #7f1d1d;--wh-red-950: #450a0a;--wh-orange-50: #fff7ed;--wh-orange-100: #ffedd5;--wh-orange-200: #fed7aa;--wh-orange-300: #fdba74;--wh-orange-400: #fb923c;--wh-orange-500: #f97316;--wh-orange-600: #ea580c;--wh-orange-700: #c2410c;--wh-orange-800: #9a3412;--wh-orange-900: #7c2d12;--wh-orange-950: #431407;--wh-amber-50: #fffbeb;--wh-amber-100: #fef3c7;--wh-amber-200: #fde68a;--wh-amber-300: #fcd34d;--wh-amber-400: #fbbf24;--wh-amber-500: #f59e0b;--wh-amber-600: #d97706;--wh-amber-700: #b45309;--wh-amber-800: #92400e;--wh-amber-900: #78350f;--wh-amber-950: #451a03;--wh-yellow-50: #fefce8;--wh-yellow-100: #fef9c3;--wh-yellow-200: #fef08a;--wh-yellow-300: #fde047;--wh-yellow-400: #facc15;--wh-yellow-500: #eab308;--wh-yellow-600: #ca8a04;--wh-yellow-700: #a16207;--wh-yellow-800: #854d0e;--wh-yellow-900: #713f12;--wh-yellow-950: #422006;--wh-lime-50: #f7fee7;--wh-lime-100: #ecfccb;--wh-lime-200: #d9f99d;--wh-lime-300: #bef264;--wh-lime-400: #a3e635;--wh-lime-500: #84cc16;--wh-lime-600: #65a30d;--wh-lime-700: #4d7c0f;--wh-lime-800: #3f6212;--wh-lime-900: #365314;--wh-lime-950: #1a2e05;--wh-green-50: #f0fdf4;--wh-green-100: #dcfce7;--wh-green-200: #bbf7d0;--wh-green-300: #86efac;--wh-green-400: #4ade80;--wh-green-500: #22c55e;--wh-green-600: #16a34a;--wh-green-700: #15803d;--wh-green-800: #166534;--wh-green-900: #14532d;--wh-green-950: #052e16;--wh-emerald-50: #ecfdf5;--wh-emerald-100: #d1fae5;--wh-emerald-200: #a7f3d0;--wh-emerald-300: #6ee7b7;--wh-emerald-400: #34d399;--wh-emerald-500: #10b981;--wh-emerald-600: #059669;--wh-emerald-700: #047857;--wh-emerald-800: #065f46;--wh-emerald-900: #064e3b;--wh-emerald-950: #022c22;--wh-teal-50: #f0fdfa;--wh-teal-100: #ccfbf1;--wh-teal-200: #99f6e4;--wh-teal-300: #5eead4;--wh-teal-400: #2dd4bf;--wh-teal-500: #14b8a6;--wh-teal-600: #0d9488;--wh-teal-700: #0f766e;--wh-teal-800: #115e59;--wh-teal-900: #134e4a;--wh-teal-950: #042f2e;--wh-cyan-50: #ecfeff;--wh-cyan-100: #cffafe;--wh-cyan-200: #a5f3fc;--wh-cyan-300: #67e8f9;--wh-cyan-400: #22d3ee;--wh-cyan-500: #06b6d4;--wh-cyan-600: #0891b2;--wh-cyan-700: #0e7490;--wh-cyan-800: #155e75;--wh-cyan-900: #164e63;--wh-cyan-950: #083344;--wh-sky-50: #f0f9ff;--wh-sky-100: #e0f2fe;--wh-sky-200: #bae6fd;--wh-sky-300: #7dd3fc;--wh-sky-400: #38bdf8;--wh-sky-500: #0ea5e9;--wh-sky-600: #0284c7;--wh-sky-700: #0369a1;--wh-sky-800: #075985;--wh-sky-900: #0c4a6e;--wh-sky-950: #082f49;--wh-blue-50: #eff6ff;--wh-blue-100: #dbeafe;--wh-blue-200: #bfdbfe;--wh-blue-300: #93c5fd;--wh-blue-400: #60a5fa;--wh-blue-500: #3b82f6;--wh-blue-600: #2563eb;--wh-blue-700: #1d4ed8;--wh-blue-800: #1e40af;--wh-blue-900: #1e3a8a;--wh-blue-950: #172554;--wh-indigo-50: #eef2ff;--wh-indigo-100: #e0e7ff;--wh-indigo-200: #c7d2fe;--wh-indigo-300: #a5b4fc;--wh-indigo-400: #818cf8;--wh-indigo-500: #6366f1;--wh-indigo-600: #4f46e5;--wh-indigo-700: #4338ca;--wh-indigo-800: #3730a3;--wh-indigo-900: #312e81;--wh-indigo-950: #1e1b4b;--wh-violet-50: #f5f3ff;--wh-violet-100: #ede9fe;--wh-violet-200: #ddd6fe;--wh-violet-300: #c4b5fd;--wh-violet-400: #a78bfa;--wh-violet-500: #8b5cf6;--wh-violet-600: #7c3aed;--wh-violet-700: #6d28d9;--wh-violet-800: #5b21b6;--wh-violet-900: #4c1d95;--wh-violet-950: #2e1065;--wh-purple-50: #faf5ff;--wh-purple-100: #f3e8ff;--wh-purple-200: #e9d5ff;--wh-purple-300: #d8b4fe;--wh-purple-400: #c084fc;--wh-purple-500: #a855f7;--wh-purple-600: #9333ea;--wh-purple-700: #7e22ce;--wh-purple-800: #6b21a8;--wh-purple-900: #581c87;--wh-purple-950: #3b0764;--wh-fuchsia-50: #fdf4ff;--wh-fuchsia-100: #fae8ff;--wh-fuchsia-200: #f5d0fe;--wh-fuchsia-300: #f0abfc;--wh-fuchsia-400: #e879f9;--wh-fuchsia-500: #d946ef;--wh-fuchsia-600: #c026d3;--wh-fuchsia-700: #a21caf;--wh-fuchsia-800: #86198f;--wh-fuchsia-900: #701a75;--wh-fuchsia-950: #4a044e;--wh-pink-50: #fdf2f8;--wh-pink-100: #fce7f3;--wh-pink-200: #fbcfe8;--wh-pink-300: #f9a8d4;--wh-pink-400: #f472b6;--wh-pink-500: #ec4899;--wh-pink-600: #db2777;--wh-pink-700: #be185d;--wh-pink-800: #9d174d;--wh-pink-900: #831843;--wh-pink-950: #500724;--wh-rose-50: #fff1f2;--wh-rose-100: #ffe4e6;--wh-rose-200: #fecdd3;--wh-rose-300: #fda4af;--wh-rose-400: #fb7185;--wh-rose-500: #f43f5e;--wh-rose-600: #e11d48;--wh-rose-700: #be123c;--wh-rose-800: #9f1239;--wh-rose-900: #881337;--wh-rose-950: #4c0519;--wh-primary-color: var(--wh-primary-500);--wh-primary-color-hover: #00a16e;--wh-primary-color-transparent: #00aa7424;--wh-primary-color-transparent-light: #00a8730f;--wh-primary-color-transparent-strong: #00a87340;--wh-primary-color-transparent-stronger: hsla(161, 100%, 33%, 0.5);--wh-primary-color-transparent-strongest: hsla(161, 100%, 33%, 0.75);--wh-primary-light: #53e3a6;--wh-primary-dark: #007f4b;--wh-primary-dark-hover: #017444;--wh-primary-shadow: #00b07841;--wh-primary-shadow-2: #00b07870;--wh-primary-border-color: #c8c8c870;--wh-warning-color: #ff5a1f;--wh-warning-color-light: #feecdc;--wh-ai-primary-decimal: 167, 139, 250;--wh-ai-secondary-decimal  : 147, 51, 234;--wh-ai-accent-decimal: 244, 114, 182;--wh-ai-primary: rgba(var(--wh-ai-primary-decimal), 1);--wh-ai-secondary: rgba(var(--wh-ai-secondary-decimal), 1);--wh-ai-accent: rgba(var(--wh-ai-accent-decimal), 1);--secondary-color: #3d4455;--secondary-color-hover: #3a4052;--secondary-color-transparent: #3d44556b;--secondary-light: #4c556d;--secondary-dark: #252934;--secondary-dark-hover: #191b22;--secondary-dark-transparent: #2e2d2d46;--highlight-color: #92ffaa;--error-color: #d62d4c;--error-color-light: #fde8e8;--error-info: #14854e;--success-color: #0e9f6e;--success-color-light: #def7ec;--font-color: #2f3237;--font-color-light: #626364;--font-color-dark: #252525;--wh-font-family: 'SF Pro Display', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";--font-family: var(--wh-font-family);--wh-link-color: #1d9bf0;--wh-form-active-color: #3b82f6;--wh-accent-blue: #1f6feb;--BREAKPOINT_XS: 575px;--BREAKPOINT_S: 767px;--BREAKPOINT_M: 991px;--BREAKPOINT_L: 1199px;--BREAKPOINT_XL: 1399px;--BREAKPOINT_XXL: 1699px;--wh-danger-color: var(--wh-red-600);--wh-danger-color-hover: var(--wh-red-700);--wh-font-size: calc(13px * var(--wh-font-size-factor, 1));--wh-blockquote-line-height: 1.3;--wh-aurora-intensity: 0.7;--wh-aurora-image-intensity: 0.2;--wh-font-size-factor: 1;--wh-breakpoint-xs: 575px;--wh-breakpoint-s: 767px;--wh-breakpoint-m: 991px;--wh-breakpoint-l: 1199px;--wh-breakpoint-xl: 1399px;--wh-breakpoint-xxl: 1699px;--wh-font-size-2xs: calc(10px * var(--wh-font-size-factor, 1));--wh-font-size-xs: calc(11px * var(--wh-font-size-factor, 1));--wh-font-size-s: calc(12px * var(--wh-font-size-factor, 1));--wh-font-size-m: calc(13px * var(--wh-font-size-factor, 1));--wh-font-size-l: calc(14px * var(--wh-font-size-factor, 1));--wh-font-size-xl: calc(16px * var(--wh-font-size-factor, 1));--wh-font-size-2xl: calc(18px * var(--wh-font-size-factor, 1));--wh-font-size-3xl: calc(20px * var(--wh-font-size-factor, 1));--wh-font-size-4xl: calc(24px * var(--wh-font-size-factor, 1));--wh-font-size-5xl: calc(30px * var(--wh-font-size-factor, 1));--wh-font-size-6xl: calc(36px * var(--wh-font-size-factor, 1));--wh-spacing-2xs: 2px;--wh-spacing-xs: 4px;--wh-spacing-s: 8px;--wh-spacing-m: 12px;--wh-spacing-l: 16px;--wh-spacing-xl: 24px;--wh-spacing-2xl: 32px;--wh-spacing-3xl: 48px;--wh-spacing-4xl: 64px;--wh-spacing-5xl: 96px;--wh-border-radius-none: 0px;--wh-border-radius-xs: 2px;--wh-border-radius-s: 4px;--wh-border-radius-m: 6px;--wh-border-radius-l: 8px;--wh-border-radius-xl: 12px;--wh-border-radius-2xl: 16px;--wh-border-radius-3xl: 24px;--wh-border-radius-full: 9999px;--wh-font-weight-light: 300;--wh-font-weight-normal: 400;--wh-font-weight-medium: 500;--wh-font-weight-semibold: 600;--wh-font-weight-bold: 700;--wh-font-weight-extrabold: 800;--wh-line-height-tight: 1.25;--wh-line-height-snug: 1.375;--wh-line-height-normal: 1.5;--wh-line-height-relaxed: 1.625;--wh-line-height-loose: 2;--wh-error-text: var(--wh-red-400);--wh-bg-base: var(--wh-secondary-600);--wh-bg-base-hover: var(--wh-secondary-500);--wh-border-base: var(--wh-secondary-200);--wh-border-base-hover: var(--wh-secondary-100);--wh-border-base-strong: var(--wh-secondary-100);--wh-border-base-strong-hover: var(--wh-secondary-50);--wh-bg-base-hover-strong: var(--wh-secondary-300);--wh-bg-back: var(--wh-secondary-700);--wh-bg-back-strong: var(--wh-secondary-800);--wh-bg-back-strong-hover: var(--wh-secondary-900);--wh-bg-back-hover: var(--wh-secondary-600);--wh-bg-back-hover-strong: var(--wh-secondary-800);--wh-border-back: var(--wh-secondary-100);--wh-border-back-strong: var(--wh-secondary-50);--wh-deck-wash-strength: 0.6;--wh-bg-front: var(--wh-secondary-400);--wh-bg-front-strong: var(--wh-secondary-200);--wh-bg-front-strong-hover: var(--wh-secondary-50);--wh-bg-front-hover: var(--wh-secondary-300);--wh-bg-front-hover-strong: var(--wh-secondary-200);--wh-border-front: hsl(227, 20%, 25%);--wh-border-front-strong: hsl(227, 20%, 35%);--wh-border-front-hover: hsl(227, 20%, 55%);--wh-text-stronger: hsl(0, 0%, 95%);--wh-text-strongest: hsl(0, 0%, 100%);--wh-text-strong: hsl(0, 0%, 90%);--wh-text: hsl(0, 0%, 85%);--wh-text-hover: var(--wh-text-strong);--wh-text-light: hsl(0, 0%, 82%);--wh-text-lighter: hsl(0, 0%, 72%);--wh-text-lightest: hsl(0, 0%, 62%);--wh-border-color: hsla(0, 0%, 100%, 0.15);--wh-border-color-strong: hsla(0, 0%, 100%, 0.25);--wh-note-editor-bg-color: hsl(221, 27%, 17%);--wh-note-editor-bg-color-preview: hsl(221, 27%, 15%);--wh-bg-tags: var(--wh-secondary-300);--wh-bg-tags-hover: var(--wh-secondary-200);--wh-syntax-bg-color: rgba(255, 255, 255, 0.05);--wh-fallback-img-color: var(--wh-secondary-600);--wh-bg-disabled: hsl(220, 22%, 18%);--wh-bg-notification-unread: hsla(161, 100%, 20%, 0.15);--wh-bg-notification-unread-hover: hsla(161, 100%, 20%, 0.05);--wh-subtle-gray: rgb(255, 255, 255, 0.1);--wh-shadow: inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.1),
      /* 2. shadow ring 👇 */ 0 0 0 1px hsla(230, 13%, 9%, 0.075),
      /* 3. multiple soft shadows 👇 */ 0 0.3px 0.4px hsla(230, 13%, 9%, 0.02),
      0 0.9px 1.5px hsla(230, 13%, 9%, 0.045),
      0 3.5px 6px hsla(230, 13%, 9%, 0.09);--wh-shadow-primary: var(--wh-primary-500) 0px 0px 0px 1px inset,
      var(--wh-primary-500) 0px 0px 1px;--wh-skeleton-bg: var(--wh-secondary-300);--wh-skeleton-bg-hover: var(--wh-secondary-200);--wh-skeleton-bg-strong: var(--wh-secondary-200);--wh-skeleton-bg-strong-hover: var(--wh-secondary-100);--wh-shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.3);--wh-shadow-s: 0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4);--wh-shadow-m: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.4);--wh-shadow-l: 0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.4);--wh-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4);--wh-shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.5);--wh-warning-bg: rgba(245, 158, 11, 0.08);--wh-warning-bg-hover: rgba(245, 158, 11, 0.10);--wh-warning-border: rgba(245, 158, 11, 0.2);--wh-warning-text: #f59e0b;--wh-aurora-scrim-mid: hsla(218, 22%, 14%, 0.5);--wh-aurora-scrim-strong: hsla(218, 22%, 14%, 0.86);--wh-aurora-scrim-full: hsla(218, 22%, 13%, 0.9);--wh-aurora-title: hsl(0, 0%, 100%);--wh-aurora-text: hsl(0, 0%, 87%);--wh-aurora-text-muted: hsl(218, 10%, 74%);--wh-aurora-tag-bg: hsla(0, 0%, 100%, 0.09);--wh-aurora-tag-bg-hover: hsla(0, 0%, 100%, 0.16);--wh-aurora-tag-border: hsla(0, 0%, 100%, 0.12);--wh-aurora-tag-text: hsl(0, 0%, 92%);--wh-aurora-divider: hsla(0, 0%, 100%, 0.14); }</style><style id="web-highlights-global-styles">
  webhighlights-sidebar {
    --wh-font-size: calc(13.5px * var(--wh-font-size-factor, 1));
  }

  body.web-highlights-animate {
    transition: all 300ms linear;
    transition-property: margin-left, margin-right;
  }

  body.web-highlights-open {
    margin-left: 393px !important;
  }

  web-highlight.webhighlights-highlight {
    background-color: #92ffaa;
    cursor: pointer;
    visibility: visible !important;
  }

  web-highlight.webhighlights-highlight.webhighlight-with-tags,
  web-highlight.webhighlights-highlight.webhighlight-with-notes {
    border-bottom: 2.8px solid gray;
    border-radius: 0px;
  }

  web-highlight > *:not(webhighlights-popup-toolbox) {
    background-color: #92ffaa;
  }

  webhighlights-popup-toolbox.contains-highlight {
    transform: translate(-63px, -10px);
    position: fixed;
  }
</style><webhighlights-popup-toolbox data-wh-world="anmhnwie"></webhighlights-popup-toolbox><webhighlights-marker data-wh-world="anmhnwie"></webhighlights-marker><div class="give-freely-root" data-extension-id="hldjnlbobkdkghfidgoecgmklcemanhm" data-extension-name="Web Highlights: PDF &amp; Web Highlighter + Notes &amp; AI Summary" id="give-freely-root-hldjnlbobkdkghfidgoecgmklcemanhm" style="display: block;"></div></body><webhighlights-sidebar alignment="left" data-wh-world="anmhnwie" sidebar-width="393"></webhighlights-sidebar></html>`;

const Result = () => {
  useEffect(() => {
    window.Final_Semester_Result_pdf_Download = () => {
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "23BCTG82.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default Result;
