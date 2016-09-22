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

## routes
---
<pre>
app.use('/', routes);  
app.use('/users', users); 
</pre>
---
+ first parameter: path
+ second parameter: