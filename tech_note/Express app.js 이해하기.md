 ## require function
 + require 함수는, 다른 파일이나 모듈에서 module.exports 로 정의된 객체를 import 하기 위한 Node의 내장 함수이다.
 + 개발자는 필요한 module을 require 메소드를 통해서 가져올 수 있고 없앨수도 있다.
 ---
<pre>
var express = require('express'); // express framework를 app에 추가
var path = require('path'); // 경로 설정을 위한 노드 모듈

var favicon = require('serve-favicon'); // favicon 을 제공하는 express 미들웨어 이다. 이 미들웨어는 삭제해도 상관 없다.
var logger = require('morgan'); // request, response 로깅하는 미들웨어. 삭제해도 무방하다.
var cookieParser = require('cookie-parser'); // cookie 조작에 사용하는 미들웨어 이다. 만약 app에서 cookie를 사용하지 않으면 삭제해도 무방하다.
var bodyParser = require('body-parser');
// html form객체 사용할때 필요한 미들웨어 이다.  
// body object를 request에 담기 때문에 POST 파라미터에 접근할 수 있다. 

var routes = require('./routes/index');
var users = require('./routes/users');

app.set('views', path.join(__dirname, 'views')); 
/* join: 첫번째 parameter와 두번째 parameter를 합친 directory string을 리턴한다.
 * __dirname: 프로젝트 Home 디렉토리를 나타낸다. 
 * 'views': d:\project\github\aurora\views  
 * path 모듈은 path의 존재여부는 체크하지 않고 directory string만 만들어 준다.
*/

routes/users: routing이 동작하는걸 보여주고자 하는 dummy page이다. app.js에서 routing을 구현할 수 있지만,
그렇게 되면 app.js 가 지저분해 지므로 이런식으로 routing을 정의하는 것이 좋다.
</pre>
---

## A View Engine
---
<pre>
app.set('views', path.join(__dirname, 'views')); // view 폴더 설정 
app.set('view engine', 'jade'); // view 엔진 설정 => Express에게 jade template engine을 사용하도록 한다.
</pre>
---

<<<<<<< HEAD
<<<<<<< HEAD
## routes
---
<pre>
app.use('/', routes);  
app.use('/users', users); 
</pre>
---
+ first parameter: path
+ second parameter:
=======
=======
>>>>>>> 079ed52ed548405b3f04d33657132b8128359823
## app.use()
+ use 메소드는 app에게 파라미터로 전달된 것들을 사용하도록 해준다. 파라미터는 function, path and function이 될수도 있다. 
+ 추가설명이 필요함
---
<pre>
app.use(logger('dev')); // request에 대한 로그를 콘솔에 남긴다
app.use(bodyParser.json()); // app이 json을 parsing할 수 있도록 해준다. 
app.use(bodyParser.urlencoded({ extended: false })); // Get request의 경우 URL로 부터 데이터를 읽을수 있게 한다. 
app.use(cookieParser()); // 이것을 사용하면, express서버가 받는 모든 request에 대해서 cookie object를 갖는다.
app.use(express.static(path.join(__dirname, 'public'))); // public 디렉토리에서 static 파일을 관리하라는 것을 app에게 알려준다.
</pre>
---

## Routing method
+ 첫번째 파라미터는 path를 의미, 두번째 파라미터는 실행함수를 의미한다. 
+ app.js에서 route로 분리하는 것은 app.js가 커지는 것을 막기위해서다.
---
<pre>
app.use('/', routes);
app.use('/users', users);
</pre>
---

<<<<<<< HEAD
>>>>>>> 079ed52ed548405b3f04d33657132b8128359823
=======
>>>>>>> 079ed52ed548405b3f04d33657132b8128359823
