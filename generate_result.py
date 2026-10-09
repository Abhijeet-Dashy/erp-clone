import re
import json

with open('result_html.txt', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace names
html = html.replace('ABHIJEET  DASH', 'ANISH ANIKET')
html = html.replace('ABHIJEET DASH', 'ANISH ANIKET')
html = html.replace('23BCSD95', '23BCTG82')

# Escape backticks and dollar signs for JS template literal
html = html.replace('\\', '\\\\').replace('`', '\\`').replace('$', '\\$')

# Replace the download button's onclick to call our React-defined window method
html = re.sub(
    r"Final_Semester_Result_pdf_Download\([^)]*\)",
    "window.Final_Semester_Result_pdf_Download()",
    html
)

jsx_code = f"""import React, {{ useEffect }} from 'react';
import './Result.css';
import pdfUrl from '../src/assets/23BCTG82.pdf';

const htmlContent = `{html}`;

const Result = () => {{
  useEffect(() => {{
    window.Final_Semester_Result_pdf_Download = () => {{
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = '23BCTG82.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }};
  }}, []);

  return <div dangerouslySetInnerHTML={{{{ __html: htmlContent }}}} />;
}};

export default Result;
"""

with open('components/Result.jsx', 'w', encoding='utf-8') as f:
    f.write(jsx_code)

print('Result.jsx generated successfully!')
