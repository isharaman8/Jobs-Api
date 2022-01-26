<h1>Jobs Api</h1>
<h3>A simple api to demonstrate authentication in nodejs</h3>
<p>A fake job portal api where user can register and apply for jobs</p>

<p>Features: </p>
<ul>
  <li>JWT (<a href="https://www.npmjs.com/package/jsonwebtoken" target="_blank">json web token</a>) authentication</li>
  <li>Password hashing using <a href="https://www.npmjs.com/package/bcryptjs" target="_blank">bcryptjs</a></li>
  <li><a href="https://www.npmjs.com/package/express-rate-limit" target="_blank">Express rate limiter</a> used to limit repeated requests to api</li>
</ul>

<p>Supported end-points:</p>
<ul>
  <li><strong>(post)/api/v1/register: </strong>Register User</li>
  <li><strong>(post)/api/v1/login: </strong>Login User</li>
  <li><strong>(get)/api/v1/jobs: </strong>Get all job position applied by user</li>
  <li><strong>(get)/api/v1/jobs/:id: </strong>Get single job position</li>
  <li><strong>(post)/api/v1/jobs/ </strong>Apply for Job position</li>
  <li><strong>(patch)/api/v1/jobs/:id </strong>Update job position credentials</li>
  <li><strong>(delete)/api/v1/jobs/:id: </strong>Delete job</li>
</ul>
<hr>

<h3>How to use:</h3>
<p>Either use local mongodb server or one on <a href="https://www.mongodb.com/" target="_blank">mongodb atlas</a> to connect to the database. That being done, start up the server and try the api :smile:.</p>
<p>Try it <a href="https://serene-brook-67360.herokuapp.com/" target="_blank">here</a>

