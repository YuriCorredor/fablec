from logging import exception
import smtplib
import os
from dotenv import load_dotenv
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication
from email.mime.text import MIMEText
import csv

load_dotenv()
EMAIL = os.getenv("EMAIL")
PASSWORD = os.getenv("PASSWORD")

def main():
    #reader = csv_reader('emails.csv')
    #send_emails(reader)
    send_email_to('Yuricorredor7@gmail.com')

def send_emails(emails):
    for row in emails:
        try:
            email = row[5]
        except Exception as exception:
            print(exception)
        if email:
            send_email_to(email)
            print('email sent to "{}"!'.format(email))

def csv_reader(file_name):
    f = open(file_name, 'r')
    reader = csv.reader(f)
    return reader

def attach_files(message, files_names):
    for name in files_names:
        with open(name, 'rb') as file:
            payload = MIMEApplication(file.read(), name=name)
            payload.add_header('content-decomposition', 'attachment; filename={}'.format(name))
            message.attach(payload)

def send_email_to(receiver):
   
    content = '''
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html  lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * {
            border: 0;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #cccccc;
        }

        table {
            border-spacing: 0;
        }

        td {
            padding: 0;
        }

        img {
            border: 0;
        }

        .wrapper {
            width: 100%;
            table-layout: fixed;
            background-color: #cccccc;
            padding-bottom: 60px;
        }

        .main {
            background-color: #ffffff;
            margin: 0 auto;
            width: 100%;
            max-width: 600px;
            border-spacing: 0;
            font-family: 'Roboto', sans-serif;
            color: #171a1b;
        }

        .two-columns {
            text-align: center;
            font-size: 0;
        }

        .two-columns .column {
            width: 100%;
            max-width: 300px;
            display: inline-block;
            vertical-align: top;
            padding: 10px;
        }

        .column h2 {
            font-size: 24px;
            padding: 10px;
        }

        .column p {
            font-size: 16px;
            padding: 0 10px 20px 10px;
        }

        .top-text {
            padding: 25px;
            padding-bottom: 35px;
        }

        .top-text p {
            padding: 5px;
        }

        .footer {
            padding: 30px;
            background-color: #cccccc
        }

    </style>
</head>
<body>
    <center class="wrapper">
        <table width="100%" class="main">
            <!-- TOP BORDER -->
            <tr>
                <td style="background-color: #2a582a;" height="8"></td>
            </tr>
            <!-- HEADER SECTION -->
            <tr>
                <td>
                    <a href="#"><img alt="logo" width="150" style="max-width: 100%; margin-left: 10px; margin-bottom: 20px;" src="https://i.ibb.co/BNqyTF1/logo.png" alt=""></a>     
                </td>
            </tr>
            <!-- TOP TEXT -->
            <tr>
                <td class="top-text">
                    <p>Fablec Distribuidora de volta às atividades, com o melhor preço da região.</p>
                    <p>Trabalhamos com todos os equipamentos necessários para a sua escola ou creche.</p>
                    <br>
                    <h2>COBRIMOS OFERTAS.</h2>
                    <br>
                    <p>Consulte já um de nosso vendedores:</p>
                    <p>Whatsapp: (21)99034-4765 - Douglas Corredor</p>
                    <p>Email: fablecdistribuidora@hotmail.com</p>
                </td>
            </tr>
            <!-- TWO-COLUMNS SECTION - ITEMS -->
            <tr>
                <td>
                    <table width="100%">
                        <tr>
                            <td class="two-columns">

                                <table class="column">
                                    <tr>
                                        <td>
                                            <a href="#"><img style="max-width: 100%;" width="300px" src="https://cdn.awsli.com.br/600x450/262/262179/produto/24743104/6cda7494b4.jpg" alt=""></a>
                                        </td>
                                    </tr>
                                </table>

                                <table class="column">
                                    <tr>
                                        <td>
                                            <h2>Linha industrial</h2>
                                            <p>Aqui se encontram materiais como bebedouros (25/50/100/200 Litros), geladeiras, liquidificadoes, fogão Industrial, fritadeiras e muito mais. Tudo perfeito para o ambiente escolar!</p>
                                        </td>
                                    </tr>
                                </table>

                            </td>
                        </tr>
                    </table>
                    <table width="100%">
                        <tr>
                            <td class="two-columns">

                                <table class="column">
                                    <tr>
                                        <td>
                                            <a href="#"><img style="max-width: 100%;" width="300px" src="https://i.ibb.co/CzHryx6/notebook.png" alt=""></a>
                                        </td>
                                    </tr>
                                </table>

                                <table class="column">
                                    <tr>
                                        <td>
                                            <h2>Linha eletrônicos</h2>
                                            <p>Aqui se encontram materiais como monitores e televisores de tubo, plasma, LCD e LED, aparelhos de DVD, VHS e projetores, equipamentos de áudio e filmadoras, impressoras, balanças, computadores e muito mais!</p>
                                        </td>
                                    </tr>
                                </table>

                            </td>
                        </tr>
                    </table>
                    <table width="100%">
                        <tr>
                            <td class="two-columns">

                                <table class="column">
                                    <tr>
                                        <td>
                                            <a href="#"><img style="max-width: 100%;" width="300px" src="https://i.ibb.co/7tXdy4N/papelaria.png" alt=""></a>
                                        </td>
                                    </tr>
                                </table>

                                <table class="column">
                                    <tr>
                                        <td>
                                            <h2>Papelaria</h2>
                                            <p>Material de escritório, informática, impressoras e cartuchos, material escolar e muito mais. Os melhores produtos de Papelaria com ofertas imperdíveis estão aqui, na Fablec! Na hora de fazer as compras você não precisa se preocupar em sair de casa!</p>
                                        </td>
                                    </tr>
                                </table>

                            </td>
                        </tr>
                    </table>
                    <table width="100%">
                        <tr>
                            <td class="two-columns">

                                <table class="column">
                                    <tr>
                                        <td>
                                            <a href="#"><img style="max-width: 100%;" width="300px" src="https://i.ibb.co/ZBsqS0K/ar.jpg" alt=""></a>
                                        </td>
                                    </tr>
                                </table>

                                <table class="column">
                                    <tr>
                                        <td>
                                            <h2>Refrigeradores</h2>
                                            <p>Confira as Geladeiras e Refrigeradores Frost Free, Duplex, Inverter e muito mais. Tenha o melhor na cozinha de sua escola com as melhores marcas do mercado. Aproveite! Os melhores condicionadores de ar para a sua Escola. O melhor de tudo é que ao respirar no local você de fato, sente a diferença de ter um ar mais puro.</p>
                                        </td>
                                    </tr>
                                </table>

                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <!-- BORDER -->
            <tr>
                <td style="background-color: #2a582a;" height="8"></td>
            </tr>
            <!-- FOOTER INFO -->
            <tr>
                <td class="footer">
                    <h2>Abraços,</h2>
                    <h2>Equipe Fablec</h2>
                    <br>
                    <p>Tem alguma dúvida? Entre em contato conosco pelo Whatsapp ou ligue (21)99034-4765</p>
                </td>
            </tr>
        </table>
    </center>
</body>
</html>
    '''

    message = MIMEMultipart()
    message['From'] = EMAIL
    message['To'] = receiver

    message['Subject'] = 'FABLEC DISTRIBUIDORA VOLTA ÀS AULAS!'

    message.attach(MIMEText(content, 'html'))
   
    '''
    files_to_attach = ['Linha eletrônicos.jpeg', 'Linha industrial.jpeg', 'Papelaria.jpeg', 'Refrigeradores.jpeg']
    attach_files(message, files_to_attach)
    '''

    message_to_send = message.as_string()

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(EMAIL, PASSWORD)
        server.sendmail(EMAIL, receiver, message_to_send)
    except Exception as exception:
        try:
            server.connect()
            print(exception)
        except Exception as exception:
            send_email_to(receiver)
            print(exception)

main()