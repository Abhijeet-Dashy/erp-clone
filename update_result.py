import re
from bs4 import BeautifulSoup

def parse_marks():
    with open('pdf_content.txt', 'r', encoding='utf-8') as f:
        text = f.read()

    semesters = {}
    current_sem = None
    
    for line in text.split('\n'):
        line = line.strip()
        if not line:
            continue
            
        if line.startswith('Semester  :'):
            match = re.search(r'Semester\s*:\s*(\d+)', line)
            if match:
                current_sem = match.group(1)
                semesters[current_sem] = {'subjects': [], 'sgpa': '', 'cgpa': ''}
        elif current_sem and line.startswith('SGPA  ='):
            match = re.search(r'SGPA\s*=\s*([\d.]+)', line)
            if match:
                semesters[current_sem]['sgpa'] = match.group(1)
        elif current_sem and line.startswith('CGPA  ='):
            match = re.search(r'CGPA\s*=\s*([\d.]+)', line)
            if match:
                semesters[current_sem]['cgpa'] = match.group(1)
        elif current_sem and not line.startswith('Subject') and not line.startswith('Generated') and not line.startswith('SGPA') and not line.startswith('CGPA') and not line.startswith('Semester') and not line.startswith('#') and not line.startswith('Disclaimer') and not line.startswith('high security') and not line.startswith('PROVISIONAL') and not line.startswith('Name') and not line.startswith('Course/Branch') and not line.startswith('BACHELOR') and not line.startswith('AND') and '---' not in line:
            parts = line.split()
            if len(parts) >= 4:
                if len(parts) > 1 and parts[1].startswith('-'):
                    code = parts[0] + parts[1]
                    name_parts = parts[2:]
                else:
                    code = parts[0]
                    name_parts = parts[1:]
                    
                grade = name_parts[-1]
                credit = name_parts[-2]
                
                if name_parts[-3] == '#':
                    subj_name = ' '.join(name_parts[:-3]) + ' #'
                else:
                    subj_name = ' '.join(name_parts[:-2])
                    
                semesters[current_sem]['subjects'].append({'code': code, 'name': subj_name, 'credit': credit, 'grade': grade})
    return semesters

marks = parse_marks()

with open('result_html.txt', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

# 1. Remove Exam Result tab and section
exam_tab_link = soup.find('a', href='#tabExamResult')
if exam_tab_link and exam_tab_link.parent:
    exam_tab_link.parent.decompose()

exam_tab_pane = soup.find('div', id='tabExamResult')
if exam_tab_pane:
    exam_tab_pane.decompose()

modal_reeval = soup.find('div', id='modalReevaluation')
if modal_reeval:
    modal_reeval.decompose()

# 2. Move Download Button
btn = soup.find('button', id='btnReport')
if btn:
    panel_heading = soup.find('div', class_='panel-heading', string=lambda t: t and 'SEMESTER RESULT' in t)
    if panel_heading:
        btn.extract() 
        wrapper = soup.new_tag('div')
        wrapper['style'] = "display: flex; justify-content: space-between; align-items: center; padding: 0 10px;"
        
        title_span = soup.new_tag('span')
        title_span.string = "SEMESTER RESULT"
        
        wrapper.append(title_span)
        btn['style'] = 'margin: 5px;'
        wrapper.append(btn)
        
        panel_heading.clear()
        panel_heading.append(wrapper)

# 3. Replace marks
semester_divs = soup.find_all('div', style=lambda s: s and 'width: 80%;height: 600px' in s)
for div in semester_divs:
    sem_header = div.find('th', string=lambda t: t and 'SEMESTER -' in t)
    if sem_header:
        sem_num_match = re.search(r'SEMESTER - (\d+)', sem_header.text)
        if sem_num_match:
            sem_num = sem_num_match.group(1)
            
            tables = div.find_all('table')
            if len(tables) >= 4:
                marks_table = tables[2]
                tbody = marks_table.find('tbody')
                
                headers = tbody.find('tr')
                tbody.clear()
                tbody.append(headers)
                
                if sem_num in marks:
                    sem_data = marks[sem_num]
                    for idx, subj in enumerate(sem_data['subjects'], 1):
                        tr = soup.new_tag('tr')
                        
                        td_slno = soup.new_tag('td', style="text-align:center;border: 1px solid #000;border-collapse: collapse;")
                        td_slno.string = str(idx)
                        tr.append(td_slno)
                        
                        td_code = soup.new_tag('td', style="text-align:center;border: 1px solid #000;border-collapse: collapse;")
                        td_code.string = subj['code']
                        tr.append(td_code)
                        
                        td_name = soup.new_tag('td', style="text-align:left;padding-left:10%;border: 1px solid #000;border-collapse: collapse;")
                        td_name.string = subj['name']
                        tr.append(td_name)
                        
                        td_credit = soup.new_tag('td', style="text-align:center;border: 1px solid #000;border-collapse: collapse;")
                        td_credit.string = subj['credit']
                        tr.append(td_credit)
                        
                        td_grade = soup.new_tag('td', style="text-align:center;border: 1px solid #000;border-collapse: collapse;")
                        td_grade.string = subj['grade']
                        tr.append(td_grade)
                        
                        tbody.append(tr)
                        
                    sgpa_cgpa_table = tables[3]
                    sgpa_th = sgpa_cgpa_table.find('th', string=lambda t: t and 'SGPA' in t)
                    cgpa_th = sgpa_cgpa_table.find('th', string=lambda t: t and 'CGPA' in t)
                    
                    if sgpa_th and sem_data.get('sgpa'):
                        sgpa_th.string = f"SGPA  :  {sem_data['sgpa']}"
                    if cgpa_th:
                        if sem_data.get('cgpa'):
                            cgpa_th.string = f"CGPA  :  {sem_data['cgpa']}"
                        else:
                            cgpa_th.string = ""

html_out = str(soup)

html_out = html_out.replace('ABHIJEET  DASH', 'ANEESH GOPAL SAHOO')
html_out = html_out.replace('ABHIJEET DASH', 'ANEESH GOPAL SAHOO')
html_out = html_out.replace('23BCSD95', '23BCTG82')

html_out = html_out.replace('\\\\', '\\\\\\\\').replace('`', '\\\\`').replace('$', '\\\\$')

html_out = re.sub(
    r"Final_Semester_Result_pdf_Download\([^)]*\)",
    "window.Final_Semester_Result_pdf_Download()",
    html_out
)

jsx_code = f'''import React, {{ useEffect }} from "react";
import "./Result.css";
import pdfUrl from "../src/assets/23BCTG82.pdf";

const htmlContent = `{html_out}`;

const Result = () => {{
  useEffect(() => {{
    window.Final_Semester_Result_pdf_Download = () => {{
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "23BCTG82.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }};
  }}, []);

  return <div dangerouslySetInnerHTML={{{{ __html: htmlContent }}}} />;
}};

export default Result;
'''

with open('components/Result.jsx', 'w', encoding='utf-8') as f:
    f.write(jsx_code)

print("Result.jsx successfully updated!")
