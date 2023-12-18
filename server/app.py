from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)

smtp_server = 'smtp.gmail.com'  
smtp_port = 587  
smtp_username = 'fromwebsite871@gmail.com'  
smtp_password = 'xivn lcif vnoj advi' 



@app.route('/api/send-data', methods=['POST'])
def receive_data():
    try:
        data = request.get_json()
        subject = data.get("subject")
        message = data.get("message") 
        sender = data.get("email")
        msg = MIMEMultipart()
        msg['From'] = sender
        msg['To'] = smtp_username
        msg['Subject'] = subject
        msg.attach(MIMEText(f'{message}\n{sender}', 'plain'))
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(user=smtp_username, password=smtp_password)
        server.sendmail(sender, smtp_username, msg.as_string())
        print('Письмо успешно отправлено')

        return jsonify({"message": "Данные успешно получены и обработаны!"})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
