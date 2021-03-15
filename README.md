# financepeer_task_angular

**Front end : angular**

The project has 4 components

Login component : login page handling

Form Component : for json file upload

Display component : To display the uploaded data in json file


Two Service Files :

Api service file : for common api login and get data

File upload service : to handle file upload and store it database



**Backend : flask and sqlite with sqlAlchecmy**

app.py in the app folder will handle the api requests and data base used is sqlite.

Each time file upload will truncate the users table and load the new data


**Installation instructions**

angular : go to the project main folder and run "ng serve" (Assuming all angular dependencies node , etc are available")

**Flask:**
run following commands if flask and dependencies are not installed:

pip install flask ,
pip install -U flask-cors,
pip install flask-sqlalchemy

After installation got to the app folder and run "app.py" , flask will run on 5000 port to handle api requests
