# SETUP DATABASE AND USERS

1. Login to MySQL as root

```shell
mysql -u root -p
```
(omit -p if root user has no password)

For linux -
```shell
sudo mysql -u root
```

2. Create Database and User

```mysql
create database sampledb;
create user sampleuser identified by 'samplepass';
```

3. Grant Privileges
```mysql
grant all privileges on sampledb.* to sampleuser;
flush privileges;
```

Make sure all commands return `Query OK`

4. Check it worked

Logout as root using `Ctrl-D`

Login again as the new user
```shell
mysql -u sampleuser -p 
Password: (enter "samplepass" here)
```
NOTE: On Linux/Mac it won't show **** but it actually does work.

Once inside MySQL shell
```mysql
show databases;
```
this should show `sampledb` as one db in the list

# CREATE SCHEMA

```mysql
create table tasks (id integer auto_increment primary key, name text, done boolean);

insert into tasks (name, done) values ('task 1', true);
```
